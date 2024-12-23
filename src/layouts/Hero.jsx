import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {

    return (
        <div className="grid grid-rows-1 z-auto">
            {/* Main Hero Section */}
            <div>

                <div className="relative bg-gray-100 text-black shadow flex items-center border-none overflow-hidden w-full h-full">
                    {/* Image */}
                    <img
                        src="../src/assets/bb.jpg"
                        alt="Image"
                        className="h-full w-full object-fill"
                    />

                    {/* Overlay Navigation Bar */}
                    <div className="absolute top-0 left-0 w-full flex justify-between items-center bg-black/50 text-white px-8 py-6 z-10 pointer-events-auto">
                        {/* Title */}

                        <h1 className="text-5xl font-bold !text-white">Filmly</h1>

                        {/* Navigation Links */}
                        <div className="flex items-center space-x-6">
                            <Link
                                to="/"
                                className="text-lg hover:text-gray-400 transition-colors"
                            >
                                Home
                            </Link>
                            <Link
                                to="/movies"
                                className="text-lg hover:text-gray-400 transition-colors"
                            >
                                Movies
                            </Link>
                            <Link
                                to="/movies"
                                className="text-lg hover:text-gray-400 transition-colors"
                            >
                                TV Shows
                            </Link>
                            <Link
                                to="/about"
                                className="text-lg hover:text-gray-400 transition-colors"
                            >
                                About
                            </Link>
                            <Link to="/signin">
                                <button className="bg-darkpurple px-4 py-2 rounded-lg text-lg font-semibold hover:bg-purple transition-colors ease-in-out">
                                    Join Filmly
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Overlay Text */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/60 to-transparent text-white flex flex-col justify-center items-center p-6 space-y-4">
                        <h2 className="text-5xl font-bold pt-2">
                            Unlimited Movies, TV Shows and More
                        </h2>
                        <p className="text-xl font-semibold pt-2">
                            Starts at 149. Cancel at any time
                        </p>
                        <p className="text-lg pt-2">
                            Ready to watch? Enter your email to create or restart your
                            membership
                        </p>

                        <div className="pl-80 grid grid-cols-2 gap-4 pt-2">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-white w-[480px] h-[55px] rounded-xl text-black font-semibold text-lg px-4"
                            />


                            <button
                                className="bg-darkpurple w-[150px] h-[55px] rounded-xl text-white font-semibold text-lg hover:bg-purple  transition-colors  ease-in-out"
                            >
                                Sign In
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
