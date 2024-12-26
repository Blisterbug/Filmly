import React from "react";

const MobileHorizontalMainCard = ({ poster, plot, trailer }) => {
  return (
    <div className="relative group">
      <div
        className="relative rounded-xl overflow-hidden shadow-lg"
        style={{ width: "360px", height: "300px" }}
      >
        {/* Image */}
        <img
          src={poster}
          alt="Poster"
          className="h-full w-full object-cover"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent text-white flex flex-col justify-end items-start p-2 space-y-2">
          <h2 className="text-2xl font-bold">{/* Title Text */}The Greatest of All Time</h2>
          <p className="text-sm font-semibold">{/* Genre */}Action | Thriller | Drama</p>
          <p className="text-xs font-semibold flex items-center space-x-2">
            <span>{/* Year | Duration */}2024 | 3h 13min</span>
            <span
              className="bg-gray-500 text-white font-bold px-2 py-1 rounded-md text-xs"
            >
              U/A 16+
            </span>
          </p>

          {/* Button */}
          <button
            className="bg-darkpurple  w-[225px] h-12 rounded-lg text-white font-semibold text-md hover:bg-purple  transition-colors duration-300 ease-in-out"
            onClick={() => window.open(trailer, "_blank")}
          >
            Watch Trailer
          </button>
        </div>
      </div>
    </div>
  );
};

// Utility Function to Split Text
const splitText = (text, wordsPerLine) => {
  const words = text.split(" ");
  const lines = [];
  for (let i = 0; i < words.length; i += wordsPerLine) {
    lines.push(words.slice(i, i + wordsPerLine).join(" "));
  }
  return lines;
};

export default MobileHorizontalMainCard;
