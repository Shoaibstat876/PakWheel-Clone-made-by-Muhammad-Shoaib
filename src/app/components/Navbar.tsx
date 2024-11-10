import React from "react";
import Link from "next/link";
import Image from "next/image";

/*// define interface for future use 
interface NavbarProps {}

// Creating a navbar as functional component
const Navbar: React.FC<NavbarProps> = () => {  */
const Navbar: React.FC = () => {  // Removed NavbarProps
    return (

<nav className="text-white bg-gray-900">
{/* for creating the bar of navbar*/}
<div className="flex items-center justify-between py-2 px-4">
{/*left section*/}
<div className="flex items-center justify-between space-x-3">
    <Link href="/" className="text-white text-xs">📱 Download App via SMS</Link>
</div>
{/*right section*/}
<div className="flex items-center space-x-2 text-xs">
    <Link href="/" className="text-red-500">اردو</Link>
    <span>|</span>
    <Link href="/" className="text-white">Sign Up</Link>
    <span>|</span>
    <Link href="/" className="text-white">Sign In</Link>

</div>
</div>
{/*Horizontal line*/}
<hr className="border-gray-700 my-1"/>
{/*Bottom Items i.e Logo*/}
<div className="flex items-center mt-2 space-x-16 px-4 py-3">
    <Link href="/">
    <Image
    src="https://wsa1.pakwheels.com/assets/new-pw-logo-white-c4cd16ae34613cc1fa16d7840f34a71e.svg"
    alt="Pak-wheel"
    width={130}
    height={130}
    className="h-8"
    >
    </Image>
    </Link>

    <div className="flex items-center space-x-20 text-sm">
    <Link href="/" className="hover:text-red-500">New Cars</Link>
    <Link href="/" className="hover:text-red-500">Used Cars</Link>
    <Link href="/" className="hover:text-red-500">Bikes</Link>
    <Link href="/" className="hover:text-red-500">Auto Store</Link>
    <Link href="/" className="hover:text-red-500">Videos</Link>
    <Link href="/" className="hover:text-red-500">Forums</Link>
    <Link href="/" className="hover:text-red-500">Blog</Link>
    <Link href="/" className="hover:text-red-500">More</Link>
    
    {/*Post ad Button*/}
    <Link href="/" className="bg-red-600 hover:bg-red-700 px-5  py-2 rounded text-white">Post An Ad</Link>



</div>

 
   
    
</div>
</nav>
















    );
};

export default Navbar;