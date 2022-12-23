import { useEffect, useRef } from "react";
import ReactLogo from "../assets/logo/ReactLogo.png";
import ReduxLogo from "../assets/logo/ReduxLogo.png";
import TailwindLogo from "../assets/logo/TailwindLogo.png";
import JavascriptLogo from "../assets/logo/JavascriptLogo.png";
import TypescriptLogo from "../assets/logo/TypescriptLogo.png";
import NodeLogo from "../assets/logo/NodeLogo.png";
import PhotoshopLogo from "../assets/logo/PhotoshopLogo.png";

const MySkills = () => {
  const skillRef = useRef(null);
  const column1Ref = useRef(null);
  const column2Ref = useRef(null);
  const column3Ref = useRef(null);
  const column4Ref = useRef(null);
  const column5Ref = useRef(null);
  const column6Ref = useRef(null);
  const column7Ref = useRef(null);
  const w = window.outerWidth;

  useEffect(() => {
    console.log(w);
    function handleScroll() {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      //Moves Up
      column1Ref.current.style.transform = `translateY(${scrollTop}px)`;
      column3Ref.current.style.transform = `translateY(${scrollTop}px)`;
      column5Ref.current.style.transform = `translateY(${scrollTop}px)`;
      column7Ref.current.style.transform = `translateY(${scrollTop}px)`;
      //Moves Down
      if (scrollTop == 2800) {
        skillRef.current.style.transform = `translateX(${
          w / 100
        }px) translateY(-${scrollTop}px) `;
      } else {
        skillRef.current.style.transform = `translateX(${
          scrollTop / 2
        }px) translateY(-${scrollTop}px) `;
      }
      column2Ref.current.style.transform = `translateY(-${scrollTop}px)`;
      column4Ref.current.style.transform = `translateY(-${scrollTop}px)`;
      column6Ref.current.style.transform = `translateY(-${scrollTop}px)`;
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="skills" className="pt-10 pb-24 ">
      <div
        ref={skillRef}
        className="skillsHeader fixed left-1/4 -translate-y-1/2 -translate-x-1/2
         md:text-8xl text-4xl ml:48"
        style={{ top: 2900, color: "#ffffff" }}
      >
        TECHNICAL SKILLS
      </div>

      <div ref={column1Ref} className="ReactLogo" style={{ top: -2500 }}>
        <img className="w-36 h-36" alt="ReactLogo" src={ReactLogo} />
      </div>

      <div ref={column2Ref} className="ReduxLogo" style={{ top: 3100 }}>
        <img className="w-36 h-36" alt="ReduxLogo" src={ReduxLogo} />
      </div>

      <div ref={column3Ref} className="TailwindLogo" style={{ top: -2500 }}>
        <img className="w-36 h-36" alt="TailwindLogo" src={TailwindLogo} />
      </div>

      <div ref={column4Ref} className="JavascriptLogo" style={{ top: 3100 }}>
        <img className="w-36 h-36" alt="JavascriptLogo" src={JavascriptLogo} />
      </div>

      <div ref={column5Ref} className="TypescriptLogo" style={{ top: -2500 }}>
        <img className="w-36 h-36" alt="TypescriptLogo" src={TypescriptLogo} />
      </div>

      <div ref={column6Ref} className="NodeLogo" style={{ top: 3100 }}>
        <img className="w-36 h-36" alt="NodeLogo" src={NodeLogo} />
      </div>

      <div ref={column7Ref} className="PhotoshopLogo" style={{ top: -2500 }}>
        <img className="w-36 h-36" alt="PhotoshopLogo" src={PhotoshopLogo} />
      </div>
    </section>
  );
};

export default MySkills;
