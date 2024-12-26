import React from 'react'

const MobileMoreCard = () => {
  return (
    <>

      <div className='grid justify-items-center pt-4 gap-y-4'> {/* Adjusted spacing */}

        {/* Card 1 */}
        <div className='flex-none w-[90%] h-[200px] bg-gradient-to-r from-[#AD5389] to-[#3C1053] rounded-3xl text-white shadow-lg'>
          <div className='p-6 flex flex-col justify-between gap-y-2'> {/* Added padding and flexbox */}
            <h2 className='text-2xl font-bold '>Enjoy on your TV</h2>
            <h4 className=' text-lg'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h4>
          </div>
        </div>

        {/* Card 2 */}
        <div className='flex-none w-[90%] h-[200px] bg-gradient-to-r from-[#333333] to-[#DD1818] rounded-3xl text-white shadow-lg'>
          <div className='p-6 flex flex-col justify-between gap-y-2'>
            <h2 className='text-2xl font-bold leading-8'>Download your shows to watch offline</h2>
            <h4 className='text-lg'>Save your favorites easily and always have something to watch.</h4>
          </div>
        </div>

        {/* Card 3 */}
        <div className='flex-none w-[90%] h-[200px] bg-gradient-to-r from-[#333399] to-[#FF00CC] rounded-3xl text-white shadow-lg'>
          <div className='p-6 flex flex-col justify-between gap-y-2'>
            <h2 className='text-2xl font-bold leading-8'>Watch everywhere</h2>
            <h4 className=' text-lg'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h4>
          </div>
        </div>

        {/* Card 4 */}
        <div className='flex-none w-[90%] h-[200px] bg-gradient-to-r from-[#89253E] to-[#3A6186] rounded-3xl text-white shadow-lg'>
          <div className='p-6 flex flex-col justify-between gap-y-2'>
            <h2 className='text-2xl font-bold leading-8'>Create profiles for kids</h2>
            <h4 className='text-lg'>Send kids on adventures with their favorite characters in a space made just for them — free with your membership.</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileMoreCard
