import React from "react";
import { Link } from "react-router-dom";

const MobileHero = () => {
  return (
    <div className="relative w-full h-full">
      {/* Background Image */}
      <img
        src="../netflix.jpg"
        alt="Hero Image"
        className="w-full h-[500px] object-cover "
      />
      <div class="absolute inset-0 bg-black opacity-70"></div>

      {/* Navigation Bar */}
      <div className="absolute top-0 inset-x-0 text-white py-4 px-2 flex justify-between items-center shadow-xl pointer-events-auto z-50">
        {/* Title */}
        <h1 className="text-2xl font-bold ">Filmly</h1>

        {/* Navigation Links */}
        <div className="flex items-center space-x-4 pl-2">
          <Link
            to="/"
            className="text-md hover:text-gray-400 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/mobileMovies"
            className="text-md hover:text-gray-400 transition-colors"
          >
            Movies
          </Link>
          <Link
            to="/about"
            className="text-md hover:text-gray-400 transition-colors"
          >
            About
          </Link>
        </div>

        {/* Join Button */}
        <Link to="/mobileSignin">
          <button className="bg-darkpurple px-[8px] py-2 rounded-md text-sm font-semibold hover:bg-purple transition-colors ease-in-out">
            Join Filmly
          </button>
        </Link>
      </div>

      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 py-8 space-y-6">
        {/* Slogan */}
        <h2 className="text-3xl font-semibold text-center">
          Unlimited Movies, TV Shows, and More
        </h2>

        {/* Price */}
        <p className="text-xl text-center font-medium">
          Starts at ₹149. Cancel at any time
        </p>

        {/* Email Input Section */}
        <div className="w-full flex flex-col items-center gap-4 mt-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-[90%] max-w-[350px] p-4 rounded-lg text-white font-medium text-sm bg-transparent/70 focus:outline-none focus:ring-0focus:ring-gray-500"

          />
          <button className="w-[45%] max-w-[350px] bg-darkpurple text-white py-2 rounded-lg text-lg font-semibold hover:bg-purple transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileHero;
