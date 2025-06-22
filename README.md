# Renewable Energy Dashboard

This project is a responsive data visualization dashboard developed with React and TypeScript. It showcases global renewable energy trends, including capacity growth, investment patterns, and energy mix statistics from 2015 to 2024. The charts are built using Recharts, and the interface is styled with Tailwind CSS.

## Features

- Area chart showing growth in solar, wind, hydro, and total capacity
- Pie chart representing the 2024 global energy mix
- Bar chart comparing renewable capacity across key countries
- Line chart tracking correlation between investment and capacity
- Responsive layout optimized for desktop and mobile
- Modular TypeScript codebase for scalability

## Technology Stack

- React 19
- TypeScript
- Tailwind CSS v3
- Recharts
- Lucide React (icon library)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (Node package manager)

### Installation

```bash
npm install
Running the App
bash
Copy
Edit
npm start
Then visit: http://localhost:3000

Tailwind Configuration
Ensure postcss.config.js contains:

js
Copy
Edit
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
And src/index.css includes:

css
Copy
Edit
@tailwind base;
@tailwind components;
@tailwind utilities;
Project Structure
lua
Copy
Edit
/renewable-dashboard
├── src/
│   ├── App.tsx
│   ├── RenewableEnergyDashboard.tsx
│   ├── index.tsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
License
This project is provided for educational and demonstration purposes.