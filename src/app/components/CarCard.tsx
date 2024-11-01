// Import necessary components from Next.js and React
import Image from 'next/image';   // Next.js Image component for optimized image loading
import Link from 'next/link';     // Next.js Link component for internal routing/navigation
import { FC } from 'react';       // Import FC (Function Component) type for defining React functional components with TypeScript

// Define the CarCardProps interface for TypeScript, outlining the expected structure of props passed to CarCard
interface CarCardProps {
    imageSrc: string;           // Path or URL of the car image
    name: string;               // Car's name (e.g., 'Honda Civic')
    priceRange: string;         // Price range text (e.g., 'PKR 23.3 - 30.5 lacs')
    reviews: number;            // Number of reviews for the car
    rating: number;             // Car's rating out of 5
    isPlaceholder?: boolean;    // Optional property to indicate if the card is a placeholder for a future car
}

// Define the main CarCard component, specifying that it expects props of type CarCardProps
const CarCard: FC<CarCardProps> = ({ imageSrc, name, priceRange, reviews, rating, isPlaceholder = false }) => {
    // Object that maps specific car names to their respective static routes (pages) in the project
    const carRoutes: { [key: string]: string } = {
        "Honda City": "/car-details/honda-city",         // Route for Honda City
        "Honda Civic": "/car-details/honda-civic",       // Route for Honda Civic
        "Toyota Corolla": "/car-details/toyota-corolla", // Route for Toyota Corolla
        "Suzuki Alto": "/car-details/suzuki-alto",       // Route for Suzuki Alto
    };

    return (
        // Card container with white background, rounded corners, and shadow
        <div className="bg-white rounded-lg shadow p-4">
            {/* Link wraps the entire card, allowing users to click anywhere on the card to navigate */}
            <Link href={carRoutes[name] || "#"} className="hover:text-sky-500">
                {/* Render placeholder if `isPlaceholder` is true, otherwise show the car image */}
                {isPlaceholder ? (
                    // Placeholder div shown when the car is a future model (upcoming or newly launched)
                    <div className="w-full h-[100px] bg-gray-200 rounded-md flex items-center justify-center">
                        <p className="text-gray-400">Coming Soon</p>   {/* Text indicating future model */}
                    </div>
                ) : (
                    // Render the actual car image using Next.js Image component for optimization
                    <Image src={imageSrc} alt={name} width={150} height={100} className="w-full h-auto rounded-md" />
                )}
                
                {/* Render the car name, applying gray styling if it's a placeholder */}
                <h3 className={`text-lg font-semibold mt-3 ${isPlaceholder ? 'text-gray-400' : ''}`}>
                    {isPlaceholder ? 'Future Model' : name}   {/* Display 'Future Model' for placeholder cars */}
                </h3>
            </Link>

            {/* Display price range, applying gray styling if it's a placeholder */}
            <p className={`mt-1 ${isPlaceholder ? 'text-gray-400' : 'text-green-600'}`}>
                {isPlaceholder ? 'Price Unavailable' : priceRange}   {/* Placeholder text if unavailable */}
            </p>

            {/* Reviews and Rating section */}
            <div className="flex items-center mt-2">
                {/* Star icons for rating, styled in gray if it's a placeholder */}
                <span className={`text-sm ${isPlaceholder ? 'text-gray-400' : 'text-orange-500'} mr-1`}>
                    {"★".repeat(rating)}   {/* Dynamically repeat the '★' icon based on the rating value */}
                </span>
                {/* Display the number of reviews, with gray text if it's a placeholder */}
                <span className={`text-sm ${isPlaceholder ? 'text-gray-400' : 'text-gray-500'} ml-2`}>
                    {isPlaceholder ? 'No Reviews' : `${reviews} Reviews`}   {/* Placeholder text if no reviews */}
                </span>
            </div>
        </div>
    );
};

// Export the CarCard component as default for use in other files
export default CarCard;
