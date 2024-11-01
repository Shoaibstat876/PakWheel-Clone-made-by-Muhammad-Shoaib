const Hero = () => {
  return (
      <section className="bg-gray-100 py-16"> {/* Section container with a light gray background and padding */}
      
        {/* Outer container to center-align content and add horizontal padding */}
        <div className="container mx-auto px-4">
          
          {/* Main heading of the Hero section */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sell Your Car on PakWheels and Get the Best Price
          </h1>
  
          {/* Grid layout to display two different features side by side on medium screens and up */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* First feature card: Posting an ad on the website */}
            <div className="bg-white p-6 shadow-md rounded-lg"> {/* Card styling for a clean appearance */}
              <h2 className="text-xl font-semibold mb-4">Post Your Ad on PakWheels</h2> {/* Subheading */}
              
              {/* List of benefits for posting an ad */}
              <ul className="list-none">
                <li className="flex items-center mb-2"> {/* Flex container for each item with an icon and text */}
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {/* SVG icon with a green checkmark */}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Post Your Ad for Free in 3 Easy Steps
                </li>
                
                <li className="flex items-center mb-2">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Get Genuine offers from Verified Buyers
                </li>
                
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Sell your car Fast at the Best Price
                </li>
              </ul>
              
              {/* Button to encourage posting an ad */}
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4">
                Post Your Ad
              </button>
            </div>
  
            {/* Second feature card: A special service to assist with selling */}
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Try PakWheels Sell It For Me</h2>
              
              {/* List of benefits for the premium selling service */}
              <ul className="list-none">
                <li className="flex items-center mb-2">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Dedicated Sales Expert to Sell Your Car
                </li>
                
                <li className="flex items-center mb-2">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  We Bargain for you and share the Best Offer
                </li>
                
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  We ensure Safe & Secure Transaction
                </li>
              </ul>
              
              {/* Updated button to encourage using the premium service */}
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
                Register Your Car
              </button>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Hero;


