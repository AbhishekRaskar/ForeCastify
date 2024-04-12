
import React from "react";

const Stories = () => {
  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-6 py-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Latest Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border border-gray-200 p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Technology Advancements</h3>
            <p className="text-gray-700 mb-4">
              Discover the latest breakthroughs in technology, from artificial
              intelligence to renewable energy.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Read more
            </a>
          </div>
          <div className="border border-gray-200 p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Health & Wellness</h3>
            <p className="text-gray-700 mb-4">
              Stay informed about health news, medical research, and tips for
              maintaining a healthy lifestyle.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Read more
            </a>
          </div>
          <div className="border border-gray-200 p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">
              Politics & Current Affairs
            </h3>
            <p className="text-gray-700 mb-4">
              Get the latest updates on political events, elections, and
              international relations.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Read more
            </a>
          </div>
          <div className="border border-gray-200 p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Arts & Entertainment</h3>
            <p className="text-gray-700 mb-4">
              Explore the world of entertainment, including movie reviews,
              celebrity news, and cultural events.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Read more
            </a>
          </div>
          <div className="border border-gray-200 p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Travel & Adventure</h3>
            <p className="text-gray-700 mb-4">
              Plan your next adventure with travel tips, destination guides, and
              inspiring stories from around the world.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Read more
            </a>
          </div>
          <div className="border border-gray-200 p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Business & Finance</h3>
            <p className="text-gray-700 mb-4">
              Stay updated on the latest business news, economic trends, and
              financial advice.
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

export default Stories;
