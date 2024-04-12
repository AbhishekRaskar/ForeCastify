
import React from "react";

const Space = () => {
  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-6 py-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Space Exploration News: New Discoveries
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Exoplanet Exploration</h3>
            <p className="text-gray-700 mb-4">
              Astronomers have discovered a new exoplanet with conditions
              suitable for life in a nearby star system.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Read more
            </a>
          </div>
          <div className="border border-gray-200 p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Black Hole Observations</h3>
            <p className="text-gray-700 mb-4">
              Groundbreaking observations of a distant black hole have provided
              new insights into its behavior and structure.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Read more
            </a>
          </div>
          <div className="border border-gray-200 p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Mars Rover Mission</h3>
            <p className="text-gray-700 mb-4">
              NASA's Perseverance rover has uncovered new evidence of ancient
              microbial life on Mars, furthering the search for extraterrestrial
              life.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Read more
            </a>
          </div>
          <div className="border border-gray-200 p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Space Station Expansion</h3>
            <p className="text-gray-700 mb-4">
              International space agencies are planning to expand the
              capabilities of the International Space Station to support
              long-duration missions to the Moon and Mars.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Space;
