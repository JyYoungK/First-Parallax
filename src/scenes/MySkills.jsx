import { useEffect, useRef } from "react";
import ReactLogo from "../assets/logo/ReactLogo.webp";
import ReduxLogo from "../assets/logo/ReduxLogo.webp";
import TailwindLogo from "../assets/logo/TailwindLogo.webp";
import JavascriptLogo from "../assets/logo/JavascriptLogo.webp";
import TypescriptLogo from "../assets/logo/TypescriptLogo.webp";
import NodeLogo from "../assets/logo/NodeLogo.webp";
import PhotoshopLogo from "../assets/logo/PhotoshopLogo.webp";

const MySkills = () => {
  const skillRef = useRef(null);
  const column1Ref = useRef(null);
  const column2Ref = useRef(null);
  const column3Ref = useRef(null);
  const column4Ref = useRef(null);
  const column5Ref = useRef(null);
  const column6Ref = useRef(null);
  const column7Ref = useRef(null);
  const columnLineRef = useRef(null);
  const w = window.outerWidth;

  useEffect(() => {
    function handleScroll() {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      //Moves Up
      column1Ref.current.style.transform = `translateY(${scrollTop}px)`;
      column3Ref.current.style.transform = `translateY(${scrollTop}px)`;
      column5Ref.current.style.transform = `translateY(${scrollTop}px)`;
      column7Ref.current.style.transform = `translateY(${scrollTop}px)`;

      //Moves Down
      if (scrollTop > 2730 && scrollTop < 2830) {
        skillRef.current.style.transform = `translateX(${
          w / 60
        }px) translateY(-${scrollTop}px) `;
      } else {
        skillRef.current.style.transform = `translateX(${5000}px) translateY(-${scrollTop}px) `;
      }
      column2Ref.current.style.transform = `translateY(-${scrollTop}px)`;
      column4Ref.current.style.transform = `translateY(-${scrollTop}px)`;
      column6Ref.current.style.transform = `translateY(-${scrollTop}px)`;
      columnLineRef.current.style.transform = `translateY(-${scrollTop}px)`;
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  // border-4 border-red-600
  return (
    <section id="skills" className="pt-10 pb-24">
      <div
        ref={skillRef}
        className="skillsHeader
         md:text-8xl text-4xl ml:48"
        style={{ top: 2900, color: "#ffffff" }}
      >
        TECHNICAL SKILLS
      </div>
      <div ref={column1Ref} className="ReactLogo" style={{ top: -2500 }}>
        <img
          className="md:w-36 md:h-36 w-16 h-16"
          alt="ReactLogo"
          src={ReactLogo}
        />
      </div>
      <div ref={column2Ref} className="ReduxLogo" style={{ top: 3100 }}>
        <img
          className="md:w-36 md:h-36 w-16 h-16"
          alt="ReduxLogo"
          src={ReduxLogo}
        />
      </div>
      <div ref={column3Ref} className="TailwindLogo" style={{ top: -2500 }}>
        <img
          className="md:w-36 md:h-36 w-16 h-16"
          alt="TailwindLogo"
          src={TailwindLogo}
        />
      </div>
      <div ref={column4Ref} className="JavascriptLogo" style={{ top: 3100 }}>
        <img
          className="md:w-36 md:h-36 w-16 h-16"
          alt="JavascriptLogo"
          src={JavascriptLogo}
        />
      </div>
      <div ref={column5Ref} className="TypescriptLogo" style={{ top: -2500 }}>
        <img
          className="md:w-36 md:h-36 w-16 h-16"
          alt="TypescriptLogo"
          src={TypescriptLogo}
        />
      </div>
      <div ref={column6Ref} className="NodeLogo" style={{ top: 3100 }}>
        <img
          className="md:w-36 md:h-36 w-16 h-16"
          alt="NodeLogo"
          src={NodeLogo}
        />
      </div>
      <div ref={column7Ref} className="PhotoshopLogo" style={{ top: -2500 }}>
        <img
          className="md:w-36 md:h-36 w-16 h-16"
          alt="PhotoshopLogo"
          src={PhotoshopLogo}
        />
      </div>
      <div
        ref={columnLineRef}
        className="fixed h-1.5 w-full left-0 bg-gradient-rainblue"
        style={{ top: 3250 }}
      ></div>
    </section>
  );
};

export default MySkills;
