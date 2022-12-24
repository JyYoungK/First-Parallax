import AnchorLink from "react-anchor-link-smooth-scroll";
import { AiFillHome } from "react-icons/ai";
import { BsFillMoonFill } from "react-icons/bs";
import { GiDeerHead, GiOwl } from "react-icons/gi";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative  before:absolute before:w-12 before:h-12 before:rounded-full
    before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;

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
    </div>
  );
};

export default DotGroup;
