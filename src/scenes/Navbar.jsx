import AnchorLink from "react-anchor-link-smooth-scroll";
import { AiFillHome } from "react-icons/ai";
import { BsFillMoonFill } from "react-icons/bs";
import { GiDeerHead, GiOwl, GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import React, { useState, useRef } from "react";
import bgMusic from "../assets/bgm.mp3";

const Navbar = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative  before:absolute before:w-12 before:h-12 before:rounded-full
    before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="flex flex-col gap-14 fixed top-[30%] right-7 z-5000">
      <AnchorLink
        href="#home"
        className={`${
          selectedPage === "home" ? selectedStyles : "bg-black"
        } w-6 h-6 rounded-full`}
        onClick={() => setSelectedPage("home")}
      >
        <AiFillHome
          className={`w-6 h-6 rounded-full ${
            selectedPage === "home"
              ? `text-yellow underline ${selectedStyles}`
              : "text-white"
          }`}
        />
      </AnchorLink>
      <AnchorLink
        href="#deer"
        className={`${
          selectedPage === "deer" ? selectedStyles : "bg-black"
        } w-6 h-6 rounded-full`}
        onClick={() => setSelectedPage("deer")}
      >
        <GiDeerHead
          className={`w-6 h-6 rounded-full ${
            selectedPage === "deer"
              ? `text-yellow underline ${selectedStyles}`
              : "text-white"
          }`}
        />
      </AnchorLink>
      <AnchorLink
        href="#owl"
        className={`${
          selectedPage === "owl" ? selectedStyles : "bg-black"
        } w-6 h-6 rounded-full`}
        onClick={() => setSelectedPage("owl")}
      >
        <GiOwl
          className={`w-6 h-6 rounded-full ${
            selectedPage === "owl"
              ? `text-yellow underline ${selectedStyles}`
              : "text-white"
          }`}
        />
      </AnchorLink>
      <AnchorLink
        href="#moon"
        className={`${
          selectedPage === "moon" ? selectedStyles : "bg-black"
        } w-6 h-6 rounded-full`}
        onClick={() => setSelectedPage("moon")}
      >
        <BsFillMoonFill
          className={`w-6 h-6 rounded-full ${
            selectedPage === "moon"
              ? `text-yellow underline ${selectedStyles}`
              : "text-white"
          }`}
        />
      </AnchorLink>
      <div>
        <audio ref={audioRef} src={bgMusic} />
        {isPlaying ? (
          <GiSpeaker
            className={`w-7 h-7 rounded-full text-white bg-black`}
            onClick={togglePlay}
          />
        ) : (
          <GiSpeakerOff
            className={`w-7 h-7 rounded-full text-white bg-black `}
            onClick={togglePlay}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
