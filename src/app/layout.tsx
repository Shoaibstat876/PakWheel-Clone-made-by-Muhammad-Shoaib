// D:\Governor NextJs\Project\cars-get-wings\src\app\layout.tsx

import React from 'react';
import Navbar from './components/Navbar';
import './globals.css'; // Ensure Tailwind CSS is configured correctly here

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Cars Get Wings</title>
        <meta name="description" content="Buy and sell premium cars with ease on Cars Get Wings." />
      </head>
      <body className="bg-gray-50 text-gray-800 font-sans antialiased">
        
        {/* Navbar */}
        

        {/* Main Content */}
        <main className="container mx-auto p-4 mt-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white p-4 mt-12">
          <div className="container mx-auto text-center">
            <p>© 2024 Cars Get Wings. All rights reserved.</p>
          </div>
        </footer>
        
      </body>
    </html>
  );
};

export default Layout;

