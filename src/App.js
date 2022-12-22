import Navbar from "./scenes/Navbar";
import Landing from "./scenes/Landing";
import DotGroup from "./scenes/DotGroup";
import MySkills from "./scenes/MySkills";
import LineGradient from "./components/LineGradient";
import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import useMediaQuery from "./hooks/useMediaQuery";
import { useEffect, useState } from "react";
import Testimonials from "./scenes/Testimonials";
import { motion } from "framer-motion";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const s = window.scrollY;
    const w = window.outerWidth;
    const h = document.getElementsByClassName("paralax")[0].clientWidth;
    const h_b =
      document.getElementsByClassName("forest_container")[0].clientWidth;
    const p = (s / h) * 1000;
    const p_b = (s / h_b) * 100;
    const opas = 1 - (1 / 100) * p_b; //scale fastest
    const z_1 = 1 + (w / 1000) * p_b;
    const z_2 = 1 + (w / 10000) * p_b;
    const z_3 = 1 + (w / 90000) * p_b;
    const z_4 = 1 + w * 0.00001 * p_b;
    const z_forest = 1 + w * 0.000008 * p_b;
    const z_6 = 1 + w * 0.000001 * p_b;
    const z_7 = 1 + w * 0.0000005 * p_b;
    const z_8 = 1 + w * 0.00000001 * p_b;
    const z_9 = 1 + w * 0.000005 * p_b;
    const z_10 = 1 + (w / 5000000) * p; //scale slowest
    const hr = (w / 1500) * p_b; //scale fastest
    const hr_2 = (w / 15000) * p_b;

    document.getElementsByClassName(
      "moon"
    )[0].style = `transform: scale(${z_10})`;

    // document.getElementsByClassName(
    //   "fog"
    // )[0].style = `transform: scale(${z_1});opacity: ${opas}`;

    //forest starts scaling, others don't
    console.log(z_forest);

    if (z_forest <= 4) {
      document.getElementsByClassName(
        "forest"
      )[0].style = `transform: translate3d(${hr}px,0,0) scale(${z_forest})`;
      document.getElementsByClassName(
        "temple"
      )[0].style = `transform: translate3d(${hr_2}px,0,0) scale(${z_7})`;
    }

    if (z_forest <= 15 && z_forest > 4) {
      //start scaling after forest finishes scaling
      document.getElementsByClassName(
        "temple"
      )[0].style = `transform: translate3d(${hr_2}px,0,0) scale(${z_6})`;
    }

    if (z_forest > 15) {
      //start scaling fast after forest content finishes
      document.getElementsByClassName(
        "temple"
      )[0].style = `transform: translate3d(${hr_2}px,0,0) scale(${z_4})`;
    }

    // document.getElementsByClassName(
    //   "deer"
    // )[0].style = `transform: translate3d(${hr_3}px,0,0) scale(${z_forest})`;
  };

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

  return (
    <div>
      <div className="paralax">
        {/* <div className="fixed w-full h-full top-0 left-0 fog"></div> */}
        <div className="fixed w-full h-full top-0 left-0 moon"></div>
        {/* ----------- First Content Title/Forest Page -----------  */}
        <div className="fixed w-full h-full top-0 left-0 forest"></div>
        <div className="forest_container">
          <div className="forest-header">
            <h1> Junyoung Kang</h1>
            <h2> Frontend Developer/Web Designer</h2>
          </div>
          <div className="content"></div>
        </div>

        {/* ----------- Second Content /Temple Page ----------- */}
        <div className="fixed w-full h-full top-0 left-0 temple"></div>
        <div className="temple_container">
          <div className="w-5/6 mx-auto md:h-full ">
            <motion.div
              margin="0 0 -200px 0"
              amount="all"
              onViewportEnter={() => setSelectedPage("skills")}
            >
              <MySkills />
            </motion.div>
          </div>
          <LineGradient />
          <div className="w-5/6 mx-auto">
            <motion.div
              margin="0 0 -200px 0"
              amount="all"
              onViewportEnter={() => setSelectedPage("projects")}
            >
              <Projects />
            </motion.div>
          </div>
          <LineGradient />
          <div className="w-5/6 mx-auto md:h-full">
            <motion.div
              margin="0 0 -200px 0"
              amount="all"
              onViewportEnter={() => setSelectedPage("testimonials")}
            >
              <Testimonials />
            </motion.div>
          </div>
        </div>

        {/* ----------- Third Content /Deer Page ----------- */}
        <div className="fixed w-full h-full top-0 left-0 deer"></div>
        <div className="deer_container">
          <div className="w-5/6 mx-auto md:h-full ">
            <motion.div
              margin="0 0 -200px 0"
              amount="all"
              onViewportEnter={() => setSelectedPage("skills")}
            >
              <MySkills />
            </motion.div>
          </div>
          <LineGradient />
          <div className="w-5/6 mx-auto">
            <motion.div
              margin="0 0 -200px 0"
              amount="all"
              onViewportEnter={() => setSelectedPage("projects")}
            >
              <Projects />
            </motion.div>
          </div>
          <LineGradient />
          <div className="w-5/6 mx-auto md:h-full">
            <motion.div
              margin="0 0 -200px 0"
              amount="all"
              onViewportEnter={() => setSelectedPage("testimonials")}
            >
              <Testimonials />
            </motion.div>
          </div>
          {/* <div className="w-5/6 mx-auto md:h-full">
            <motion.div
              margin="0 0 -200px 0"
              amount="all"
              onViewportEnter={() => setSelectedPage("contact")}
            >
              <Contact />
            </motion.div>
          </div>
          <Footer /> */}
        </div>
        {/* End */}
      </div>

      {/* <div className="w-5/6 mx-auto md:h-full">
        {isDesktop && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("home")}
        >
          <Landing setSelectedPage={setSelectedPage} />
        </motion.div>
      </div> */}
    </div>
  );
}

export default App;
