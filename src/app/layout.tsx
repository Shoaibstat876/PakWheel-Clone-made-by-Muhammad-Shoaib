// D:\Governor NextJs\Project\cars-get-wings\src\app\layout.tsx

"use client"; // Add this directive to make this file a client component

import React from 'react';
import { usePathname } from 'next/navigation'; // Use usePathname from next/navigation
import Navbar from './components/Navbar'; // Importing Navbar
import './globals.css'; // Ensure Tailwind CSS is configured correctly here

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname(); // Get the current pathname
  const isHomePage = pathname === '/'; // Check if the current route is the homepage

  return (
    <html lang="en">
      <head>
        <title>Cars Get Wings</title>
        <meta name="description" content="Buy and sell premium cars with ease on Cars Get Wings." />
      </head>
      <body className="bg-gray-50 text-gray-800 font-sans antialiased">
        
        {/* Render Navbar only on the homepage */}
        {isHomePage && <Navbar />} {/* This will render Navbar only when on the homepage */}

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



