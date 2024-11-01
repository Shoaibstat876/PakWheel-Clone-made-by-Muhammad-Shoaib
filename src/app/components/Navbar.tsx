import React from 'react';        // Importing React, which lets us create components like Navbar
import Link from 'next/link';     // 'next/link' is used for client-side navigation in Next.js, making links more efficient
import Image from 'next/image';   // 'next/image' optimizes images for better performance, like automatic resizing and lazy loading

// Creating the Navbar component as a functional component in TypeScript
const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white"> {/* Navbar with dark background and white text for contrast */}
      
      {/* Top bar container with a download link on the left and sign-in options on the right */}
      <div className="flex justify-between items-center px-4 py-2">
        
        {/* Left section: Contains the app download link with a reduced font size */}
        <div className="flex items-center space-x-3"> {/* space-x-3 creates a small gap between elements */}
          <Link href="/" className="text-red-500 text-xs"> {/* Changed to Link component */}
            📱 Download App via SMS
          </Link>
        </div>

        {/* Right section: Language selection, Sign-Up, and Sign-In links */}
        <div className="flex items-center space-x-2 text-xs"> {/* text-xs for smaller font, space-x-2 for tighter spacing */}
          <Link href="/" className="text-red-500">اردو</Link> {/* Urdu language link with red color */}
          
          {/* Next.js Link components for Sign Up and Sign In */}
          <Link href="/signup" className="hover:text-red-500"> {/* hover:text-red-500 adds a hover effect in red */}
            Sign Up
          </Link>
          <span>|</span> {/* Simple separator between Sign Up and Sign In */}
          <Link href="/signin" className="hover:text-red-500">
            Sign In
          </Link>
        </div>
      </div>
      
      {/* Horizontal line for separation */}
      <hr className="border-gray-700 my-1" /> {/* Thin gray line with small vertical spacing (my-1) */}

      {/* Main Navbar with logo and primary navigation links */}
      <div className="flex items-center justify-between px-4 py-3">
        
        {/* Logo section with reduced size */}
        <Link href="/" className="flex items-center"> {/* Wrapping the logo with a link to the homepage */}
          <Image 
            src="/logo.png"             // Logo source image (change the path as needed)
            alt="PakWheels Logo"         // Alternative text for accessibility
            width={80}                   // Width set to 80 pixels for compact appearance
            height={80}                  // Height set to 80 pixels for compact appearance
            className="h-8"              // Adjusting height with Tailwind to fit better in the navbar
          />
        </Link>

        {/* Main navigation links with slightly smaller font and spacing */}
        <div className="flex space-x-4 text-sm"> {/* Space-x-4 for spacing between links, text-sm for smaller font */}
          <Link href="/" className="hover:text-red-500">Used Cars</Link>
          <Link href="/" className="hover:text-red-500">New Cars</Link>
          <Link href="/" className="hover:text-red-500">Bikes</Link>
          <Link href="/" className="hover:text-red-500">Auto Store</Link>
          <Link href="/" className="hover:text-red-500">Videos</Link>
          <Link href="/" className="hover:text-red-500">Forums</Link>
          <Link href="/" className="hover:text-red-500">Blog</Link>
          <Link href="/" className="hover:text-red-500">More</Link>
          {/* Post an Ad button with special styling */}
          <Link href="/post-ad" className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700">
            Post an Ad
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

