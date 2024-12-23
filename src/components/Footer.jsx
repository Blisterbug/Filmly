import React from 'react';
import Icons from './Icons';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10 w-full overflow-x-hidden">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 sm:px-6 lg:px-8 w-full pt-6">

        {/* Left Section*/}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h3 className="text-xl font-semibold mb-8">
            <a href="https://support.google.com/" target="_blank" className="text-blue-700">Help centre</a> or call us: <a className='text-blue-700'>003-0235-112-56</a>
          </h3>
          {/* <p className='mb-3'>Terms and conditions apply. Join here for exclusive movie updates from Filmly</p> */}
          <div className='grid grid-cols-3 gap-x-4 gap-y-6'>
            <a className='hover:underline'>FAQ</a>
            <a className='hover:underline'>Cookie Preferences</a>
            <a className='hover:underline'>Investor Relations</a>
            <a className='hover:underline'>Legal Notices</a>
            <a className='hover:underline'>Accounts</a>
            <a className='hover:underline'>Media</a>
            <a className='hover:underline'>Terms of use</a>
            <a className='hover:underline'>Privacy</a>
            <a className='hover:underline'>Ways to Watch</a>
            <a className='hover:underline'>Corporate Information</a>
            <a className='hover:underline'>Only on Filmly</a>
            <a className='hover:underline'>Media Centre</a>

          </div>
        </div>

        {/* Right Section*/}
        <div className="lg:w-1/2 flex flex-col items-center">

          <p className='mb-8 text-xl'> Join here for exclusive movie updates from Filmly</p>

          <input
            type="email"
            placeholder="Enter your email"
            aria-label="Email address input to grt updates"
            className="p-3 w-full max-w-md rounded-md border text-black  font-semibold border-gray-300 focus:ring focus:ring-blue-200 outline-none"
          />
          <button
            aria-label="Get updates"
            className="mt-6 bg-purple text-white font-semibold px-20 py-3 rounded-lg hover:bg-darkpurple transition-all duration-200"
          >
            Get updates
          </button>
        </div>
      </div>

      {/* Divider Line */}
      <hr className="my-8 border-gray-900" />

      {/* Footer Bottom Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 px-4 sm:px-6 lg:px-8 w-full">

        {/* Left Side - Copyright */}
        <p className="text-center lg:text-left text-sm">
          © 2035 by Filmly. All rights reserved.
        </p>

        {/* Right Side - Social Icons */}
        <Icons />
      </div>
    </footer>
  );
};

export default Footer;
