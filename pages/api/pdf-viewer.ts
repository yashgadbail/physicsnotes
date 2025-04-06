import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { PDFDocument, rgb } from 'pdf-lib';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { url } = req.query;
  if (!url || typeof url !== 'string') {
    return res.status(400).json({ error: 'URL parameter is required' });
  }

  try {
    // Get the PDF file path
    const pdfPath = path.join(process.cwd(), 'public', url);
    
    // Check if file exists
    if (!fs.existsSync(pdfPath)) {
      return res.status(404).json({ error: 'PDF not found' });
    }

    // Read the PDF file
    const pdfBytes = fs.readFileSync(pdfPath);
    
    // Load the PDF document
    const pdfDoc = await PDFDocument.load(new Uint8Array(pdfBytes));
    
    // Get user information for watermark
    const userEmail = req.headers['x-user-email'] || 'anonymous';
    const timestamp = new Date().toISOString();
    
    // Add watermark to each page
    const pages = pdfDoc.getPages();
    for (const page of pages) {
      const { width, height } = page.getSize();
      
      // Create watermark text
      const watermarkText = `${userEmail} | ${timestamp}`;
      
      // Add watermark
      page.drawText(watermarkText, {
        x: 50,
        y: 50,
        size: 12,
        color: rgb(0.7, 0.7, 0.7),
        opacity: 0.5,
      });
    }

    // Save the modified PDF
    const modifiedPdfBytes = await pdfDoc.save();
    
    // Set response headers
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename="protected.pdf"');
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    
    // Send the modified PDF
    res.send(Buffer.from(modifiedPdfBytes));
  } catch (error) {
    console.error('Error processing PDF:', error);
    res.status(500).json({ error: 'Error processing PDF' });
  }
} 