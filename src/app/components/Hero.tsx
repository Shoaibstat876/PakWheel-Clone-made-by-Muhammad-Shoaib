// Separate SVG Icon Component for Checkmark
const CheckmarkIcon = () => (
  <svg
    className="w-6 h-6 text-green-500 mr-2"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

const Hero = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Sell Your Car on PakWheels and Get the Best Price
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Post Your Ad Feature Card */}
          <article className="bg-white p-6 shadow-md rounded-lg" aria-labelledby="post-your-ad">
            <h2 id="post-your-ad" className="text-xl font-semibold mb-4">
              Post Your Ad on PakWheels
            </h2>
            <ul className="list-none">
              <li className="flex items-center mb-2">
                <CheckmarkIcon />
                Post Your Ad for Free in 3 Easy Steps
              </li>
              <li className="flex items-center mb-2">
                <CheckmarkIcon />
                Get Genuine offers from Verified Buyers
              </li>
              <li className="flex items-center">
                <CheckmarkIcon />
                Sell your car Fast at the Best Price
              </li>
            </ul>
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4">
              Post Your Ad
            </button>
          </article>

          {/* Sell It For Me Feature Card */}
          <article className="bg-white p-6 shadow-md rounded-lg" aria-labelledby="sell-it-for-me">
            <h2 id="sell-it-for-me" className="text-xl font-semibold mb-4">
              Try PakWheels Sell It For Me
            </h2>
            <ul className="list-none">
              <li className="flex items-center mb-2">
                <CheckmarkIcon />
                Dedicated Sales Expert to Sell Your Car
              </li>
              <li className="flex items-center mb-2">
                <CheckmarkIcon />
                We Bargain for you and share the Best Offer
              </li>
              <li className="flex items-center">
                <CheckmarkIcon />
                We ensure Safe & Secure Transaction
              </li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
              Register Your Car
            </button>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Hero;
