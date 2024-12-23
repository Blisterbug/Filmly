import React from 'react';

const Grids = () => {
    return (
        <div className="grid grid-cols-6 gap-4 p-6">
            {/* Large item */}
            <div className="col-span-4 row-span-2 bg-gradient-to-r from-[#89253E] to-[#3A6186] text-white rounded-2xl flex flex-col justify-center items-center h-[317px] p-6">
                <h2 className="text-6xl font-bold mb-4 text-center">Unlimited Entertainment</h2>
                {/* <p className="text-center leading-relaxed text-lg ">
                    Enjoy a vast library of movies, TV shows, and documentaries. From critically acclaimed originals to timeless classics, Filmly offers endless entertainment for everyone.
                </p> */}
            </div>


            {/* Small square items */}
            <div className="col-span-2 row-span-1 bg-gradient-to-r from-[#F3904F] to-[#3B4371] text-white rounded-2xl flex flex-col items-center justify-center h-[150px] p-6">
                <h2 className="text-4xl font-bold mb-4 text-center">Stream Anywhere</h2>
                {/* <p className="text-center leading-relaxed">Watch on your smartphone, tablet, Smart TV, or laptop.</p> */}
            </div>


            <div className="col-span-2 row-span-1 bg-gradient-to-r from-[#333333] to-[#dd1818] text-white rounded-2xl flex flex-col items-center justify-center h-[150px] p-6">
                <h2 className="text-4xl font-bold mb-4 text-center pt-2">Multiple Profiles</h2>
                {/* <p className="text-center leading-relaxed ">Create up to 5 profiles under one account, so everyone in the family gets personalized recommendations and viewing history.</p> */}
            </div>

            {/* Medium rectangle */}
            <div className="col-span-3 row-span-1 bg-gradient-to-r from-[#7303c0] to-[#ec38bc] text-white rounded-2xl flex flex-col items-center justify-center h-[300px] p-6">
                <h2 className="text-5xl font-bold mb-4 text-center">No Ads, Just Entertainment</h2>
                {/* <p className="text-center leading-relaxed">Enjoy uninterrupted streaming with Filmly’s ad-free experience, letting you focus on the story, not the commercials.</p> */}
            </div>

            {/* Another medium rectangle */}
            <div className="col-span-3 row-span-1 bg-gradient-to-r from-[#c9d6ff] to-[#e2e2e2] text-black  rounded-2xl flex flex-col items-center justify-center h-[300px] p-6">
                <h2 className="text-5xl font-bold mb-4 text-center">Download and Go</h2>
                {/* <p className="text-center leading-relaxed font-semibold">Save your favorite titles for offline viewing. Whether you’re on a plane or in a remote area, Filmly keeps you entertained.</p> */}
            </div>

            {/* Tall item */}
            <div className="col-span-2 row-span-2 bg-gradient-to-r from-[#30e8bf] to-[#ff8235] text-black rounded-2xl flex flex-col items-center justify-center h-[300px] p-6">
                <h2 className="text-5xl font-bold mb-4 text-center">Original Content</h2>
                {/* <p className="text-center leading-relaxed font-semibold">Filmly Originals bring you groundbreaking shows and movies like Stranger Things, The Crown, and The Witcher, produced exclusively for the platform.</p> */}
            </div>

            {/* Small square items */}
            <div className="col-span-1 row-span-1 bg-gradient-to-r from-[#d9a7c7] to-[#fffdcd] text-black rounded-2xl flex items-center justify-center h-[134px] p-6">
                <h2 className="text-3xl font-bold">4K Ultra HD</h2>
            </div>
            <div className="col-span-1 row-span-1 bg-gradient-to-r from-[#000046] to-[#1cb5e0] text-white rounded-2xl flex items-center justify-center h-[134px] p-6">
                <h2 className="text-3xl font-bold">Affordable Plans</h2>
            </div>
            <div className="col-span-1 row-span-1 bg-gradient-to-r from-[#1a2a6c] to-[#b21f1f] text-white rounded-2xl flex items-center justify-center h-[134px] p-6">
                <h2 className="text-3xl font-bold">Parental Controls</h2>
            </div>
            <div className="col-span-1 row-span-1 bg-gradient-to-r from-[#636363] to-[#a2ab58] text-white rounded-2xl flex items-center justify-center h-[134px] p-6">
                <h2 className="text-3xl font-bold ">Multi-Language Support</h2>
            </div>
            <div className="col-span-4 row-span-1 bg-gradient-to-r from-[#ad5389] to-[#3c1053] text-white rounded-2xl flex flex-col items-center justify-center h-[150px] p-6">
                <h2 className="text-5xl font-bold mb-4 text-center">Personalized Recommendations</h2>
                {/* <p className="text-center text-base leading-relaxed">
    Discover shows and movies tailored just for you. Filmly's advanced algorithms curate content based on your viewing history and preferences, ensuring every moment is binge-worthy.
     </p> */}
            </div>

        </div>
    );
};

export default Grids;
