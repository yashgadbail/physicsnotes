import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname;

  // Check if the request is for the PDF viewer API
  if (path.startsWith('/api/pdf-viewer')) {
    // Get the user's email from the session or token
    const userEmail = request.cookies.get('userEmail')?.value || 'anonymous';
    
    // Clone the request and add the user email to the headers
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-user-email', userEmail);
    
    // Return the modified request
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/pdf-viewer/:path*',
}; 