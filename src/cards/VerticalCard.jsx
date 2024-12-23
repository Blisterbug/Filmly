import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";


const VerticalCard = ({ id, name, posterV, genre, plot, trailer, duration, director, stars }) => {
  const [isPopoverVisible, setPopoverVisible] = useState(false);

  return (
    <div className="inline-block">
      {/* Image Button */}
      <button onClick={() => setPopoverVisible(true)}>
        <div
          className=" rounded-2xl shadow-md overflow-hidden"
          style={{ width: "162px", height: "215px" }}
        >
          <img
            src={posterV}
            alt="Poster"
            className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </button>

      {/* Card Info */}
      <div className="w-[162px] pt-2">
        <div className="font-semibold text-lg text-center truncate">{name}</div>
        <div className="text-xs font-medium text-center">{genre}</div>
      </div>

      {isPopoverVisible && (
        <Popover
          id={id}
          name={name}
          posterV={posterV}
          genre={genre}
          plot={plot}
          trailer={trailer}
          duration={duration}
          director={director}
          stars={stars}
          onClose={() => setPopoverVisible(false)}
        />
      )}
    </div>
  );
};

const Popover = ({ id, name, poster, posterV, genre, plot, trailer, duration, director, stars, onClose }) => {

  return (
    <>
      <div className="fixed inset-0 bg-black/30 backdrop-blur-md z-10"></div>
      <div className="">
        <div className='fixed right-[341px] top-[47px] bg-white text-black rounded-2xl z-20'>
          <div className="w-[664px] h-[540px] shadow-xl border rounded-2xl grid">

            <div className='flex justify-end pt-6 p-2 h-[35px]  items-center'>
              <button className='w-[30px] h-[35px] text-2xl text-gray-400 hover:text-black font-semibold' onClick={onClose}>

                <FontAwesomeIcon icon={faTimes} />

              </button>
            </div>

            <div className="flex p-4 pt-1">
              <div className=''><img src={posterV} alt="" className='w-[72px] h-[106px] rounded-md' /></div>
              <div className='grid justify-start pl-6'>
                <h2 className='text-3xl font-bold'>{name}</h2>
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

export default VerticalCard;
