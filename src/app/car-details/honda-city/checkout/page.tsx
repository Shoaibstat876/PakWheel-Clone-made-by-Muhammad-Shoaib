"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const Checkout: React.FC = () => {
    const router = useRouter(); // Initialize useRouter for navigation

    const handlePlaceYourOrder = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form submission
        router.push('/car-details/honda-city/thankyou'); // Navigate to Thank You page
    };

    return (
        <div className="container mx-auto px-4 py-8 bg-blue-50 min-h-screen flex flex-col items-center">
            <h1 className="text-4xl font-bold text-center mb-8 text-black">
                Enter your Details
            </h1>

            <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-full max-w-md">
                <form onSubmit={handlePlaceYourOrder}>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Card Number"
                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <input
                            type="text"
                            placeholder="Address"
                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
                    >
                        Place your order
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;
