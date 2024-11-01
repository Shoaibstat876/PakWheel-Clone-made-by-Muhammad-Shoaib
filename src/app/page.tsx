// Importing necessary components for the homepage.
import Hero from './components/Hero'; // Hero component for the introductory section.
import FeaturedCars from './components/FeaturedCars'; // Component for displaying popular cars.


// Defining the Homepage functional component.
const Homepage = () => {
  return (
    // The main container for the homepage content.
    <div>
      
      {/* Rendering the Hero section at the top of the homepage */}
      <Hero />
      
      {/* Main content area of the homepage */}
      <main className="flex flex-col items-center justify-center bg-gray-100">
        {/* Rendering the FeaturedCars component to display popular car listings */}
        <FeaturedCars />
      </main>
    </div>
  );
};

// Exporting the Homepage component as the default export.
export default Homepage;
