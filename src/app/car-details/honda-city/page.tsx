// Path: D:\Governor NextJs\Project\cars-get-wings\src\app\car-details\honda-city\page.tsx
"use client"; // Marks this as a client component

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const HondaCityDetails: React.FC = () => {
    const router = useRouter(); // Initialize useRouter for navigation

    const handleMoreDetails = () => {
        router.push('/car-details/honda-city/more-details'); // Navigate to More Details page for Honda City
    };
    const handleMakePayment = () => {
        router.push('/car-details/honda-city/checkout'); // Navigate to More Details page for Honda City
    };
    return (
        <div className="container mx-auto px-4 py-8 bg-gray-100">
            <h1 className="text-3xl font-bold text-center mb-6 underline">
                Honda City 2024 - Price, Images, Reviews &<br /> Specs
            </h1>
            
            <div className="flex justify-center mb-4">
                <Image 
                    src="/Honda_City_Front.jpg"  // Image from the public folder
                    alt="Honda City" 
                    width={320}   // Set a fixed width
                    height={240}  // Set a fixed height
                    className="rounded-lg shadow-md"
                />
            </div>

            <p className="text-lg text-gray-700 text-justify mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

            </p>

            <h2 className="text-2xl font-semibold text-green-600 text-center mb-4">
                PKR 50,00,000
            </h2>

            <div className="flex justify-center space-x-4">
        <button
          onClick={handleMakePayment}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Make Payment
        </button>
                <button 
                    className="bg-gray-700 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-800"
                    onClick={handleMoreDetails} // Triggers navigation
                >
                    More Details
                </button>
            </div>
        </div>
    );
};

export default HondaCityDetails;
