import React from 'react';

const Home = () => {
  return (
    <div>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Featured Designs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Design Cards Here */}
            {/* Example card */}
            <div className="border border-gray-300 rounded p-4">
              <img src="your-image-url.jpg" alt="Design 1" className="w-full rounded mb-2" />
              <p className="font-semibold">Design Name</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-2">
                View Details
              </button>
            </div>
            {/* Repeat similar card structure for other designs */}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <form className="flex justify-center" id="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-l px-4 py-2 outline-none"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r"
            >
              Subscribe
            </button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 Embroidery Library</p>
      </footer>
    </div>
  );
};


export default Home;
