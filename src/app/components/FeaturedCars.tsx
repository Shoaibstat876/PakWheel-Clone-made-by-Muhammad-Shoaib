"use client";  // Enables client-side features in Next.js components, necessary to use React hooks like `useState`.

import { useState } from 'react'; // Import `useState` from React to manage component state for the active tab.
import CarCard from './CarCard'; // Import the CarCard component to render individual car details for each tab.

// Define the `Car` type for TypeScript to enforce a structure for each car's data.
type Car = {
    imageSrc: string;      // Image source path for car image
    name: string;          // Name of the car
    priceRange: string;    // Price range of the car
    reviews: number;       // Number of reviews the car has received
    rating: number;        // Average rating of the car
};

// Define `CarData` type to structure car data by tab categories.
type CarData = {
    popular: Car[];        // Array of cars under 'Popular' category
    upcoming: Car[];       // Array of cars under 'Upcoming' category
    newlyLaunched: Car[];  // Array of cars under 'Newly Launched' category
};

// Main `FeaturedCars` component definition
const FeaturedCars = () => {
    // Placeholder car data used in 'Upcoming' and 'Newly Launched' tabs.
    const placeholderCar: Car = { 
        imageSrc: '/placeholder-image.png',   // Placeholder image path (indicates "Coming Soon")
        name: 'Future Model',                 // Placeholder name
        priceRange: 'Price Unavailable',      // Placeholder price range
        reviews: 0,                           // Placeholder review count
        rating: 0                             // Placeholder rating
    };

    // Car data object, categorizing cars under 'Popular', 'Upcoming', and 'Newly Launched' tabs.
    const carData: CarData = {
        popular: [
            // Each car includes an image, name, price range, review count, and rating.
            { imageSrc: '/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg', name: 'Toyota Corolla', priceRange: 'PKR 59.7 - 75.5 lacs', reviews: 621, rating: 4 },
            { imageSrc: '/Suzuki_Alto_-_PNG.png', name: 'Suzuki Alto', priceRange: 'PKR 23.3 - 30.5 lacs', reviews: 200, rating: 3 },
            { imageSrc: '/Honda_City_Front.jpg', name: 'Honda City', priceRange: 'PKR 46.5 - 58.5 lacs', reviews: 458, rating: 4 },
            { imageSrc: '/honda civic.jpg', name: 'Honda Civic', priceRange: 'PKR 86.6 - 99.0 lacs', reviews: 358, rating: 4 },
        ],
        // Fill 'upcoming' and 'newlyLaunched' arrays with placeholder car data to show "Coming Soon" information.
        upcoming: Array(4).fill(placeholderCar),       
        newlyLaunched: Array(4).fill(placeholderCar),   
    };

    // Define `activeTab` state to track the currently selected tab, initialized to 'popular'.
    const [activeTab, setActiveTab] = useState<keyof CarData>('popular');

    return (
        <div className="py-8 px-4">  {/* Container for component with padding */}
            <h2 className="text-2xl font-bold mb-4">Featured New Cars</h2> {/* Section heading */}
            
            {/* Tab navigation for switching between car categories */}
            <div className="relative mb-4 border-b-2 border-gray-200 flex space-x-4">
                {(['popular', 'upcoming', 'newlyLaunched'] as const).map((tab) => (  // Map over tab options
                    <button
                        key={tab}  // Assign unique key for each tab button
                        onClick={() => setActiveTab(tab)}  // Update active tab state on click
                        className={`relative py-2 px-4 transition-all duration-300 ${activeTab === tab ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}
                    >
                        {/* Render human-readable tab name based on `tab` value */}
                        {tab === 'popular' && 'Popular'}
                        {tab === 'upcoming' && 'Upcoming'}
                        {tab === 'newlyLaunched' && 'Newly Launched'}
                        
                        {/* Animate underline for active tab */}
                        <span
                            className={`absolute left-0 right-0 bottom-[-2px] h-[2px] bg-blue-500 transition-transform duration-300 ease-in-out ${activeTab === tab ? 'scale-x-100' : 'scale-x-0'} hover:scale-x-100`}
                        ></span>
                    </button>
                ))}
                
                {/* Link to view all cars, aligned to the far right of the tab container */}
                <a href="/all-cars" className="ml-auto text-blue-600">View All New Cars</a>
            </div>

            {/* Car list rendered according to the active tab */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {carData[activeTab].map((car, index) => (
                    // Render each CarCard component, passing car data and a unique key
                    <CarCard key={index} {...car} isPlaceholder={car.imageSrc === '/placeholder-image.png'} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedCars;  // Export FeaturedCars component to be used in other parts of the app.
