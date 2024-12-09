import React from "react";

const UniqueFeatures: React.FC = () => {
  return (
    <div className="py-10 px-5 bg-purple-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6">
        <img src="/images/sofa.png" alt="Sofa" className="w-full md:w-1/2 rounded-lg" />
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Unique Features Of Latest & Trending Products</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>All frames constructed with hardwood solids and laminates</li>
            <li>Reinforced with double wood dowels, glue, screws, and nails</li>
            <li>Arms, backs, and seats are structurally reinforced</li>
          </ul>
          <button className="bg-pink-500 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-pink-600">
            Add To Cart
          </button>
          <p className="mt-2 text-gray-500">B&B Italian Sofa — <span className="text-pink-500">$32.00</span></p>
        </div>
      </div>
    </div>
  );
};

export default UniqueFeatures;
