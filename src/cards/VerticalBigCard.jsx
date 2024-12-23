import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";


const VerticalBigCard = ({ id, name, poster, posterV, genre, plot, trailer, duration, director, stars }) => {

  const [isPopoverVisible, setPopoverVisible] = useState(false)
  return (
    <div className="grid grid-rows-1 z-auto">
      <div>
        <button
          onClick={() => setPopoverVisible(true)}>
          <div
            className="bg-gray-100  text-black rounded-3xl shadow flex items-center border-none"
            style={{ width: "302px", height: "420px" }}
          >
            {/* Image */}
            <img
              src={posterV}
              alt="Image"
              className="h-full w-full  rounded-xl object-fill shadow-lg hover:scale-105 transition-all 500 ease-in"
            />
          </div>
        </button>
      </div>

      <div className="w-[238px] h-[35px] flex pt-2 ">
        {/* <span className="text-4xl font-bold w-[35px] pl-2">{id}</span> */}
        {/* <div className="grid grid-rows-1 pl-3 gap-3">
            <div className="font-semibold text-lg">{name}</div>
            <div className="text-xs font-medium pt-4">{genre}</div>
        </div> */}

      </div>
      {isPopoverVisible &&
        <Popover id={id} name={name} poster={poster} genre={genre} plot={plot} trailer={trailer} posterV={posterV} duration={duration} director={director} stars={stars} onClose={() => setPopoverVisible(false)} />}

    </div>
  );
};


const Popover = ({ id, name, poster, posterV, genre, plot, trailer, duration, director, stars, onClose }) => {

  return (
    <>
      <div className="fixed inset-0 bg-black/30 backdrop-blur-md z-10"></div>
      <div className="">
        <div className='fixed right-[341px] top-[47px] bg-white  text-black rounded-2xl z-20'>
          <div className="w-[664px] h-[540px] shadow-xl border rounded-2xl grid">

            <div className='flex justify-end pt-6 p-2 h-[35px]  items-center'>
              <button className='w-[30px] h-[35px] text-2xl text-gray-400 hover:text-black font-semibold' onClick={onClose}>

                <FontAwesomeIcon icon={faTimes} />

              </button>
            </div>

            <div className="flex p-4 pt-1">
              <div className=''><img src={posterV} alt="" className='w-[72px] h-[106px] rounded-md' /></div>
              <div className='grid justify-start pl-6'>
                <h2 className='text-3xl font-bold truncate'>{name}</h2>
                <p>2024  | {duration}  | <span className="bg-gray-500 text-white font-bold border p-1 rounded-lg">U/A</span></p>
                <p>{genre}</p>
              </div>
            </div>

            <div className='p-4 leading-8 text-lg'>
              <p>{plot}</p>
            </div>

            <div className='p-4 grid'>
              <p><span className='font-semibold'>Director : </span> {director}</p>
              <p><span className='font-semibold'>Cast & Crew : </span>{stars}</p>
            </div>

            <div className="flex justify-center items-end pb-6">
              <button className='bg-darkpurple w-[550px] h-[50px] rounded-xl text-white font-semibold text-lg hover:bg-purple transition-colors duration-100 ease-out' onClick={() => window.open(trailer, "_blank")}>Watch Trailer</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}





export default VerticalBigCard;
