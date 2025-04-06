# Physics Notes - Interactive Learning Platform

A comprehensive physics learning platform that provides interactive study materials, practice problems, and formula references for students.

## Features

### 1. Daily Practice Problems (DPP)
- Organized by Class (11th and 12th) and Chapters
- 10 questions per chapter with detailed explanations
- 10-minute timer for practice sessions
- Score calculation and performance tracking
- Option to view explanations after submission
- Cannot navigate back until submission
- Partial submissions allowed

### 2. Formula Handbook
- Categorized physics formulas
- Search functionality
- Category filtering
- Detailed explanations and units
- Modern, responsive design

### 3. Exam Preparation
- Study materials and tips
- Category and difficulty level filtering
- Comprehensive exam resources
- Organized by topics and concepts

### 4. PDF Assistant
- Interactive chat interface
- Markdown support
- Real-time responses
- Clean, modern UI

## Technology Stack

- Next.js
- TypeScript
- CSS Modules
- React Markdown
- PDF.js

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/physicsnotes.git
```

2. Install dependencies:
```bash
cd physicsnotes
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
physicsnotes/
├── pages/
│   ├── dpp.tsx              # Daily Practice Problems
│   ├── formula-handbook.tsx # Formula reference
│   ├── exam-preparation.tsx # Exam resources
│   └── pdf-assistant.tsx    # PDF chat interface
├── styles/
│   ├── DPP.module.css
│   ├── FormulaHandbook.module.css
│   ├── ExamPreparation.module.css
│   └── PdfChat.module.css
└── components/
    └── PdfChat.tsx         # PDF chat component
```

## Features in Detail

### Daily Practice Problems (DPP)
- Hierarchical navigation (Class → Chapter → Questions)
- Timer-based practice sessions
- Score calculation based on total questions
- Explanations for each question
- Reset and try again functionality
- Responsive design for all devices

### Formula Handbook
- Mechanics, Electromagnetism, and Thermodynamics sections
- Searchable formula database
- Category-based filtering
- Detailed formula descriptions
- Unit information

### Exam Preparation
- Topic-wise study materials
- Difficulty level filtering
- Comprehensive exam tips
- Organized resource structure

### PDF Assistant
- Interactive chat interface
- Markdown support for formatting
- Real-time responses
- Clean and intuitive UI

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

© 2024 Physics Notes. All Rights Reserved.

This software and its source code are the exclusive property of Physics Notes. The following terms apply:

1. No part of this software may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of Physics Notes.

2. The software may not be modified, reverse-engineered, or used to create derivative works.

3. The software may not be rented, leased, sublicensed, or otherwise transferred without the express written consent of Physics Notes.

4. Any unauthorized use, reproduction, or distribution of this software is strictly prohibited and may result in severe civil and criminal penalties.

For licensing inquiries, please contact: physicsnotes@example.com