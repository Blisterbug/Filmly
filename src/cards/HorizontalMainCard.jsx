import React from "react";

const HorizontalMainCard = ({
  poster,
  plot,
  trailer,

}) => {

  return (
    <div className="grid grid-rows-1 z-auto">
      <div>

        <div
          className="relative rounded-3xl shadow flex items-center overflow-hidden"
          style={{ width: "1300px", height: "580px" }}
        >
          {/* Image */}
          <img
            src={poster}
            alt="Image"
            className="h-full w-full object-fill shadow-lg"
          />

          {/* Overlay Text */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent text-white flex flex-col justify-center items-start p-6 pt-36 space-y-4">

            <h2 className="text-5xl font-semibold pl- pt-2">The Greatest of All Time</h2>
            <p className="text-xl font-medium pl-24 pt-2">Action | Thriller | Drama</p>
            <p className="text-lg pl-24 pt-2">
              2024 | 3h 13min |{" "}
              <span className="bg-gray-500 text-white font-bold px-2 py-1 pt-2 rounded-lg">
                U/A 16+
              </span>
            </p>
            <p className="text-base leading-7 pt-2">
              {splitText(plot, 9).map((line, index) => (
                <span key={index} className="block">
                  {line}
                </span>
              ))}
            </p>

            <button
              className="bg-darkpurple w-[550px] h-[50px] rounded-xl text-white font-semibold text-lg hover:bg-purple transition-colors duration-100 ease-out "
              onClick={() => window.open(trailer, "_blank")}
            >
              Watch Trailer
            </button>
          </div>
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

export default HorizontalMainCard;
