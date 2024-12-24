import React from 'react'

const MoreCard = () => {
    return (
        <>
            <h1 className='text-4xl font-semibold p-4 pl-28 pt-10 bg-black text-white '>More reasons to join</h1>
            <div className='grid grid-cols-4 gap-6 px-28 pt-6 bg-black pb-16 '>

                <div className='container w-[260px] h-[340px] bg-gradient-to-r from-[#AD5389] to-[#3C1053] rounded-3xl text-white shadow-lg'>
                    <div className='grid gap-12'>
                        <div className='p-4 grid gap-4 '>
                            <h2 className='text-2xl font-bold pt-4'>Enjoy on your TV</h2>
                            <h4 className='font-medium'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h4>
                        </div>



                    </div>
                </div>

                <div className='container w-[260px] h-[340px] bg-gradient-to-r from-[#333333] to-[#DD1818] rounded-3xl text-white shadow-lg '>
                    <div className='grid gap-12'>
                        <div className='p-4 grid gap-4 '>
                            <h2 className='text-2xl font-bold pt-4'>Download your shows to watch offline</h2>
                            <h4 className='font-medium'>Save your favourites easily and always have something to watch.</h4>
                        </div>



                    </div>
                </div>

                <div className='container w-[260px] h-[340px] bg-gradient-to-r from-[#333399] to-[#FF00CC] rounded-3xl text-white shadow-lg'>
                    <div className='grid gap-12'>
                        <div className='p-4 grid gap-4 '>
                            <h2 className='text-2xl font-bold pt-4'>Watch everywhere</h2>
                            <h4 className='font-medium'>Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.</h4>
                        </div>


                    </div>
                </div>
                <div className='container w-[260px] h-[340px] bg-gradient-to-r from-[#89253E] to-[#3A6186] rounded-3xl text-white shadow-lg'>
                    <div className='grid gap-12'>
                        <div className='p-4 grid gap-4 '>
                            <h2 className='text-2xl font-bold pt-4'>Create profiles for kids</h2>
                            <h4 className='font-medium'>Send kids on adventures with their favourite characters in a space made just for them — free with your membership.</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MoreCard