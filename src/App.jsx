import Birds from "./scenes/Birds";
import DotGroup from "./scenes/DotGroup";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";
import { useEffect, useState } from "react";
import Thanks from "./scenes/Thanks";
import { motion } from "framer-motion";

const App = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [hideOwl, setHideOwl] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const s = window.scrollY;
    const w = window.outerWidth;
    const h = document.getElementsByClassName("paralax")[0].clientWidth;
    const h_b =
      document.getElementsByClassName("forest_container")[0].clientWidth;
    const p = (s / h) * 1000;
    const p_b = (s / h_b) * 100;
    const opas = 1 - (1 / 50) * p_b; //scale fastest
    const z_1 = 1 + (w / 1000) * p_b;
    const z_2 = 1 + (w / 10000) * p_b;
    const z_3 = 1 + (w / 90000) * p_b;
    const z_4 = 1 + w * 0.00001 * p_b;
    const z_forest = 1 + w * 0.000008 * p_b;
    const z_5 = 1 + w * 0.000004 * p_b;
    const z_6 = 1 + w * 0.000001 * p_b;
    const z_7 = 1 + w * 0.0000005 * p_b;
    const z_8 = 1 + w * 0.00000001 * p_b;
    const z_9 = 1 + w * 0.00000005 * p_b;
    const z_10 = 1 + (w / 50000000) * p; //scale slowest
    const skip_to_deer = (w / 150) * p_b;
    const hr = (w / 1500) * p_b; //scale fastest
    const hr_2 = (w / 15000) * p_b;
    const hr_3 = (w / 1500000) * p_b;
    const hr_4 = (w / 15000000) * p_b;

    document.getElementsByClassName(
      "fog"
    )[0].style = `transform: translate3d(${hr}px,0,0) scale(${z_forest})`;

    //forest starts scaling, others don't
    document.getElementsByClassName(
      "forest"
    )[0].style = `transform: translate3d(${hr}px,0,0) scale(${z_forest})`;

    if (z_forest <= 4) {
      document.getElementsByClassName(
        "temple"
      )[0].style = `transform: translate3d(${hr_2}px,0,0) scale(${z_7})`;
      document.getElementsByClassName(
        "deer"
      )[0].style = `transform: translate3d(${hr_3}px,0,0) scale(${z_8})`;
      setHideOwl(true);
    }

    if (z_forest <= 7 && z_forest > 4) {
      //start scaling after forest finishes scaling
      document.getElementsByClassName(
        "temple"
      )[0].style = `transform: translate3d(${skip_to_deer}px,0,0) scale(${z_6})`;
      document.getElementsByClassName(
        "deer"
      )[0].style = `transform: translate3d(${hr_3}px,0,0) scale(${z_7})`;
      setHideOwl(true);
    }

    if (z_forest > 7) {
      //start scaling fast after forest content finishes
      setHideOwl(false);
      document.getElementsByClassName("deer")[0].style.display = "none";
      document.getElementsByClassName(
        "owl"
      )[0].style = `transform: translate3d(${hr_3}px,0,0) scale(${z_8})`;
    }

    if (z_forest > 14) {
      setHideOwl(true);
      document.getElementsByClassName(
        "moon"
      )[0].style = `transform: scale(${z_9})`;
    } else {
      document.getElementsByClassName(
        "moon"
      )[0].style = `transform: scale(${z_10})`;
    }
  };

  return (
    <div className="paralax hide-scrollbar">
      <div className="w-5/6 mx-auto md:h-full">
        <DotGroup
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("home")}
        >
          <Birds />
        </motion.div>
      </div>

      {/* ----------- Show Fog only on Desktop -----------  */}

      <div className="hidden md:block fixed w-full h-full top-0 left-0 fog"></div>

      {/* ----------- First Content Home Page -----------  */}
      <div className="fixed w-full h-full top-0 left-0 forest"></div>

      <div className={`forest_container z-91`}>
        <div className="forest-header hover:filter hover:saturate-200 transition duration-500">
          <div className="md:text-8xl text-4xl"> Junyoung Kang</div>
          <div className="md:text-4xl"> Frontend Developer / Web Designer</div>
        </div>
      </div>

      {/* ----------- Second Content Skills Page ----------- */}
      <div className="fixed w-full h-full top-0 left-0 temple"></div>
      <div className="skill_container">
        <div className="md:h-full">
          <motion.div
            margin="0 0 0 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("deer")}
          >
            <div className="deerSpace" id="deer"></div>
          </motion.div>
          <MySkills />
        </div>
      </div>
      <div className="fixed w-full h-full top-0 left-0 deer"></div>

      {/* ----------- Third Content Projects Page ----------- */}
      <div
        className={`fixed w-full h-full top-0 left-0 owl ${
          hideOwl ? "hidden" : "block"
        }`}
      ></div>
      <div className="owl_container mt-5">
        <div className="md:h-full">
          <motion.div
            margin="0 0 0 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("owl")}
          >
            <div className="owlSpace" id="owl"></div>
          </motion.div>
        </div>
      </div>
      <div className="project_container">
        <div className="md:h-full">
          <Projects />
        </div>
      </div>

      {/* ----------- Last Content Thanks Page ----------- */}
      <div className="fixed w-full h-full top-0 left-0 moon">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
        <div id="stars5"></div>
        <div id="stars6"></div>
        <div id="stars7"></div>
      </div>
      <div className="moon_container">
        <div className="md:h-full">
          <motion.div
            margin="0 0 0 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("moon")}
          >
            <div className="moonSpace" id="moon"></div>
          </motion.div>
        </div>
      </div>
      <div className="thanks_container">
        <Thanks />
        <Contact />
      </div>

      {/* End */}
    </div>
  );
};

export default App;
