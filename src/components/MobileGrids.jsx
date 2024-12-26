import React from 'react';

const MobileGrids = () => {
  return (
    <div className="grid grid-cols-2 gap-2 p-4 max-w-[390px] mx-auto">
      {/* Large item */}
      <div className="col-span-2 row-span-2 bg-gradient-to-r from-[#89253E] to-[#3A6186] text-white rounded-xl flex flex-col justify-center items-center h-[180px] p-4">
        <h2 className="text-4xl font-bold text-center">Unlimited Entertainment</h2>
      </div>

      {/* Small square items */}
      <div className="col-span-1 row-span-1 bg-gradient-to-r from-[#F3904F] to-[#3B4371] text-white rounded-xl flex flex-col items-center justify-center h-[120px] p-4">
        <h2 className="text-2xl font-bold text-center">Stream Anywhere</h2>
      </div>

      <div className="col-span-1 row-span-1 bg-gradient-to-r from-[#333333] to-[#dd1818] text-white rounded-xl flex flex-col items-center justify-center h-[120px] p-4">
        <h2 className="text-2xl font-bold text-center">Multiple Profiles</h2>
      </div>

      {/* Medium rectangle */}
      <div className="col-span-2 row-span-1 bg-gradient-to-r from-[#7303c0] to-[#ec38bc] text-white rounded-2xl flex flex-col items-center justify-center h-[160px] p-4">
        <h2 className="text-3xl font-bold text-center">No Ads, Just Entertainment</h2>
      </div>

      {/* Another medium rectangle */}
      <div className="col-span-2 row-span-1 bg-gradient-to-r from-[#c9d6ff] to-[#e2e2e2] text-black rounded-2xl flex flex-col items-center justify-center h-[160px] p-4">
        <h2 className="text-4xl font-bold text-center">Download and Go</h2>
      </div>

      {/* Tall item */}
      <div className="col-span-2 row-span-2 bg-gradient-to-r from-[#30e8bf] to-[#ff8235] text-black rounded-2xl flex flex-col items-center justify-center h-[200px] p-4">
        <h2 className="text-4xl font-bold text-center">Original Content</h2>
      </div>

      {/* Small square items */}
      <div className="col-span-1 row-span-1 bg-gradient-to-r from-[#d9a7c7] to-[#fffdcd] text-black rounded-2xl flex items-center justify-start h-[120px] p-4">
        <h2 className="text-xl font-bold">4K Ultra HD</h2>
      </div>
      <div className="col-span-1 row-span-1 bg-gradient-to-r from-[#000046] to-[#1cb5e0] text-white rounded-2xl flex items-center justify-center h-[120px] p-4">
        <h2 className="text-xl font-bold">Affordable Plans</h2>
      </div>
      <div className="col-span-1 row-span-1 bg-gradient-to-r from-[#1a2a6c] to-[#b21f1f] text-white rounded-2xl flex items-center justify-center h-[120px] p-4">
        <h2 className="text-xl font-bold">Parental Controls</h2>
      </div>
      <div className="col-span-1 row-span-1 bg-gradient-to-r from-[#636363] to-[#a2ab58] text-white rounded-2xl flex items-center justify-center h-[120px] p-4">
        <h2 className="text-xl font-bold">Multi-Language Support</h2>
      </div>

      {/* Large item (Personalized Recommendations) */}
      <div className="col-span-2 row-span-1 bg-gradient-to-r from-[#ad5389] to-[#3c1053] text-white rounded-2xl flex flex-col items-center justify-center h-[160px] p-4">
        <h2 className="text-3xl font-bold text-center">Personalized Recommendations</h2>
      </div>
    </div>
  );
};

export default MobileGrids;
