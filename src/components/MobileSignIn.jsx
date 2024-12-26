import React from "react";
import { Link } from "react-router-dom";
import MobileFooter from "./MobileFooter";

const MobileSignIn = () => {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            {/* Header */}
            <div className="p-4 bg-black/80 flex items-center">
                <Link to="/" className="text-lg flex items-center text-gray-300">
                    <i className="fas fa-chevron-left "></i>Go to home page
                </Link>
            </div>

            {/* Main Content */}
            <div className="flex-grow flex flex-col items-center justify-center px-4">
                <div className="w-full max-w-md bg-black/75 p-6 rounded-lg shadow-lg">
                    {/* Sign-in Header */}
                    <h1 className="text-3xl font-bold mb-6 text-center">Sign In</h1>

                    {/* Email Input */}
                    <input
                        type="email"
                        placeholder="Email or mobile number"
                        className="w-full h-12 rounded-md px-4 mb-4 bg-gray-800 text-gray-200 focus:outline-none focus:ring focus:ring-purple-500"
                    />

                    {/* Password Input */}
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full h-12 rounded-md px-4 mb-4 bg-gray-800 text-gray-200 focus:outline-none focus:ring focus:ring-purple-500"
                    />

                    {/* Sign-in Button */}
                    <button
                        type="submit"
                        className="w-full h-12 rounded-md bg-purple text-white font-semibold text-lg hover:bg-purple-700 mb-4"
                    >
                        Sign In
                    </button>

                    {/* Alternative Sign-in */}
                    <div className="text-center text-gray-400 mb-4">OR</div>
                    <button
                        type="button"
                        className="w-full h-12 rounded-md bg-gray-700/30 text-white font-semibold hover:bg-gray-700 mb-4"
                    >
                        Use a sign-in code
                    </button>

                    {/* Forgot Password */}
                    <div className="text-center mb-4">
                        <a href="" className="text-blue-500 hover:underline">
                            Forgot Password?
                        </a>
                    </div>

                    {/* Remember Me */}
                    <div className="flex items-center justify-center mb-6">
                        <input
                            type="checkbox"
                            className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring focus:ring-purple-500"
                        />
                        <label className="ml-2 text-gray-400">Remember me for 30 days</label>
                    </div>

                    {/* Sign-up Link */}
                    <div className="text-center text-gray-400">
                        New to Filmly?{' '}
                        <a href="" className="text-blue-500 hover:underline">
                            Sign up now.
                        </a>
                    </div>

                    {/* Google reCAPTCHA Notice */}
                    <p className="text-xs text-center text-gray-500 mt-6">
                        This page is protected by Google reCAPTCHA to ensure you are not a bot.{' '}
                        <a
                            href="https://developers.google.com/recaptcha/intro"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            Learn more.
                        </a>
                    </p>
                </div>
            </div>

            {/* Footer */}
            <MobileFooter />
        </div>
    );
};

export default MobileSignIn;
