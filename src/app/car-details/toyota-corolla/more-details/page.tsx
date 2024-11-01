// File: src/app/car-details/toyota-corolla/more-details/page.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ToyotaCorollaMoreDetails: React.FC = () => {
    const router = useRouter(); // Initialize useRouter for navigation
    const handleMakePayment = () => {
        router.push('/car-details/toyota-corolla/checkout'); // Navigate to More Details page for Honda City
    };

    
    return (
        <div className="bg-gray-100 min-h-screen py-10 px-4">
            {/* Centered Heading */}
            <h1 className="text-4xl font-bold text-center underline mb-8">
                Toyota Corolla 2024 - Price in Pakistan, Images, Reviews &<br /> Specs
            </h1>
            
            {/* Centered Image */}
            <div className="flex justify-center mb-6">
                <Image 
                    src="/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg" // Placeholder for Toyota Corolla image
                    alt="Toyota Corolla Front View" 
                    width={500} 
                    height={400} 
                    className="rounded-lg shadow-lg"
                />
            </div>

            {/* Button Section */}
            <div className="flex justify-center space-x-4 mb-6">
                <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700">
                    Book a Test Drive
                </button>
                <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg border border-blue-600 shadow-md hover:bg-gray-200">
                    Request Bank Finance
                </button>
                <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg border border-blue-600 shadow-md hover:bg-gray-200">
                    Visit Place
                </button>
                <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg border border-blue-600 shadow-md hover:bg-gray-200">
                    Car Inspection
                </button>
            </div>

            {/* Vehicle Description Section */}
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Vehicle Description</h2>
                <p className="text-lg text-gray-700 mb-4">
                    <span className="font-semibold">Number of Doors:</span> 4, <span className="font-semibold">Engine:</span> 1800 CC, 
                    <span className="font-semibold"> Condition:</span> 8.5/10, <span className="font-semibold">Driven:</span> 9500 KM,
                    <span className="font-semibold"> Suspension Type:</span> Soft Suspension, <span className="font-semibold">Avg:</span> 13 Km per ltr,
                    <span className="font-semibold"> Transmission:</span> Automatic, <span className="font-semibold">Fuel Type:</span> High Octane
                </p>

                {/* Price Section */}
                <h3 className="text-3xl font-semibold text-green-600 mb-6">PKR 5,000,000</h3>

                {/* Make Payment Button */}
                <div className="flex justify-center">
                
                    <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-700"    onClick={handleMakePayment}          >
                        Make Payment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ToyotaCorollaMoreDetails;


