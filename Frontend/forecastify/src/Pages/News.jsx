
import React from "react";

const News = () => {
  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-6 py-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Latest News: Weather Updates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Severe Storm Alert</h3>
            <p className="text-gray-700 mb-4">
              A severe storm is forecasted to hit the East Coast tomorrow.
              Residents are advised to take necessary precautions.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Read more
            </a>
          </div>
          <div className="border border-gray-200 p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Record-breaking Heatwave</h3>
            <p className="text-gray-700 mb-4">
              Parts of the Midwest are experiencing record-breaking
              temperatures, with heat indices exceeding 100°F.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Read more
            </a>
          </div>
          <div className="border border-gray-200 p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">
              Tropical Depression Forms
            </h3>
            <p className="text-gray-700 mb-4">
              A new tropical depression has formed in the Atlantic Ocean, with
              potential impacts on coastal areas.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Read more
            </a>
          </div>
          <div className="border border-gray-200 p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Wildfire Update</h3>
            <p className="text-gray-700 mb-4">
              Firefighters continue to battle wildfires in the Western United
              States, with several evacuation orders in place.
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

export default News;
