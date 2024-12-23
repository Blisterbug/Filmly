import React from 'react'

const Popover = () => {
  return (
    <>
      <div className=''>
        <div className="w-[664px] h-[520px] shadow-xl border rounded-2xl grid">

          <div className='flex justify-end pt-6 p-2 h-[35px]  items-center'>
            <button className='w-[30px] h-[35px] text-2xl text-gray-400 hover:text-black font-semibold'>

              X

            </button>
          </div>

          <div className="flex p-4 pt-2">
            <div className=''><img src="../src/assets/m.avif" alt="" className='w-[72px] h-[106px] rounded-md' /></div>
            <div className='grid justify-start pl-6'>
              <h2 className='text-3xl font-bold'>Black Doves
              </h2>
              <p>2024  | 55 Min  | U/A</p>
              <p>Action  | Drama  | Mystery </p>
            </div>
          </div>

          <div className='p-4 leading-7'>
            <p>Helen embarks on a passionate affair with a man who has no idea what her secret identity is. Caught in the crosshairs when her lover falls victim to the dangerous London underworld, Helen's employer's call in Sam to protect her.</p>
          </div>

          <div className='p-4 grid gap-2'>
            <p><span className='font-semibold'>Director : </span> Joe Barton</p>
            <p><span className='font-semibold'>Cast & Crew : </span>Keira Knightley, Ben Whishaw, Sarah Lancashire</p>
          </div>

          <div className="flex justify-center items-end pb-6">
            <button className='bg-blue-500 w-[450px] h-[50px] rounded-xl text-white font-semibold text-lg hover:bg-blue-700 transition-colors 500 ease-in-out'>Watch Trailer</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default Popover