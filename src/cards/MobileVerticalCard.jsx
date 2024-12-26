import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from '/MobileHorizontalCard.module.css';

const MobileVerticalCard = ({ id, name, poster, posterV, genre, plot, trailer, duration, director, stars }) => {
    const [isPopoverVisible, setPopoverVisible] = useState(false);

    return (
        <div className="grid grid-rows-1 z-auto">
            <div>
                <button onClick={() => setPopoverVisible(true)}>
                    <div
                        className="bg-gray-100 text-black rounded-3xl shadow flex items-center border-none"
                        style={{ width: "180px", height: "220px" }}
                    >
                        <img
                            src={posterV}
                            alt="Image"
                            className="h-full w-full rounded-xl object-fill shadow-lg hover:scale-105 transition-all duration-200 ease-in"
                        />
                    </div>
                </button>
            </div>

            <div className="w-[200px] h-[35px] flex pt-2">
                <div className="grid grid-rows-1 pl-3 gap-3">
                    <div className="text-lg">{name}</div>
                </div>
            </div>

            {isPopoverVisible && (
                <Popover
                    id={id}
                    name={name}
                    poster={poster}
                    genre={genre}
                    plot={plot}
                    trailer={trailer}
                    posterV={posterV}
                    duration={duration}
                    director={director}
                    stars={stars}
                    onClose={() => setPopoverVisible(false)}
                />
            )}
        </div>
    );
};

const Popover = ({ name, poster, posterV, genre, plot, trailer, duration, director, stars, onClose }) => {
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(onClose, 300); // Matches the animation duration in CSS
    };

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/30 backdrop-blur-md  z-10"
                onClick={handleClose}
            ></div>
            {/* Popover */}
            <div
                className={`fixed bottom-0 left-5 hide-scrollbar transform -translate-x-1/2 bg-white text-black rounded-t-2xl z-20 shadow-lg transition-transform duration-300 ease-in-out ${isClosing ? styles.animateSlideOut : styles.animateSlideIn
                    }`}
                style={{
                    width: "calc(100% - 32px)",
                    maxWidth: "350px",
                    maxHeight: "80vh",
                    overflowY: "auto",
                }}
            >
                <div className="flex justify-between items-center p-4">
                    <h2 className="text-3xl font-bold truncate py-2">{name}</h2>
                    <button
                        className="text-2xl text-gray-400 hover:text-black font-semibold"
                        onClick={handleClose}
                    >
                        <FontAwesomeIcon icon={faTimes} size="lg" />
                    </button>
                </div>

                <div className="p-4">
                    <img src={poster} alt={name} className="w-full h-40 object-cover rounded-md" />
                    <p className="mt-2 text-md leading-7">{plot}</p>
                    <div className="mt-4 space-y-3">
                        <p className="text-md">
                            <span className="font-bold">Genre:</span> {genre}
                        </p>
                        <p className="text-md">
                            <span className="font-bold">Duration:</span> {duration}
                        </p>
                        <p className="text-md">
                            <span className="font-bold">Director:</span> {director}
                        </p>
                        <p className="text-md">
                            <span className="font-bold">Cast:</span> {stars}
                        </p>
                    </div>
                </div>

                <div className="p-4">
                    <button
                        className="bg-darkpurple w-full h-[50px] rounded-xl text-white font-semibold text-lg transition-colors duration-100 ease-out hover:bg-purple"
                        onClick={() => window.open(trailer, "_blank")}
                    >
                        Watch Trailer
                    </button>
                </div>
            </div>
        </>
    );
};


export default MobileVerticalCard;
