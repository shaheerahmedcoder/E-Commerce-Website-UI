import React from "react";

const Hero = () => {
  return (
    <section className="bg-light-purple-100 py-16">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-start gap-10">
          {/* Lamp Image */}
          <div>
            <img
              src="/images/lamp.png"
              alt="Lamp"
              className="w-32 h-32 object-contain"
            />
          </div>

          {/* Text Section */}
          <div className="max-w-lg">
            <p className="text-pink-500 font-semibold mb-4">
              Best Furniture For Your Castle...
            </p>
            <h1 className="text-4xl font-bold mb-4 leading-tight">
              New Furniture Collection <br />
              Trends in 2020
            </h1>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
            <button className="bg-pink-500 text-white px-6 py-3 font-semibold rounded-md">
              Shop Now
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative">
          <img
            src="/images/cover.png"
            alt="Furniture"
            className="w-full max-w-md rounded-md"
          />
          <div className="absolute top-8 right-8 bg-blue-500 text-white text-sm font-bold px-4 py-2 rounded-full">
            50% off
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
