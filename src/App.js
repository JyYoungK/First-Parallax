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
    const h_b = document.getElementsByClassName("container")[0].clientWidth;
    const p = (s / h) * 1;
    const p_b = (s / h_b) * 100;
    const opas = 1 - (1 / 100) * p_b;
    const z_1 = 1 + (w / 10000) * p_b;
    const z_2 = 1 + (w / 5000000) * p;
    document.getElementsByClassName(
      "p-item1"
    )[0].style = `transform: scale(${z_2})`;
    const hr = (w / 2000) * p_b;
    const z_3 = 1 + w * 0.000005 * p_b;
    document.getElementsByClassName(
      "p-item2"
    )[0].style = `transform: translate3d(${hr}px,0,0) scale(${z_3})`;
    const hr_2 = (w / 1500) * p_b;
    const z_4 = 1 + w * 0.00001 * p_b;
    document.getElementsByClassName(
      "p-item3"
    )[0].style = `transform: translate3d(${hr_2}px,0,0) scale(${z_4})`;
    document.getElementsByClassName(
      "p-item4"
    )[0].style = `transform: scale(${z_1});opacity: ${opas}`;
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
      {/* <div className="app bg-deep-blue"> */}
      {/* <div className="paralax">
        <div className="fixed w-full h-full top-0 left-0 p-item1"></div>
        <div className="fixed w-full h-full top-0 left-0 p-item2"></div>
        <div className="fixed w-full h-full top-0 left-0 p-item3"></div>
        <div className="fixed w-full h-full top-0 left-0 p-item4"></div>
      </div>
      <div className="container">
        <div className="content-header">
          <h1> Parallax Design</h1>
          <h2> The next Level Parallax Scrolling Web Design</h2>
        </div>

        <div className="content">
          <img src="./assets/contact-image.jpeg" alt="contact" />

          <img src="./assets/brush.png" alt="astro" />
        </div>
      </div> */}
      <div className="w-5/6 mx-auto md:h-full">
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
      </div>
      <LineGradient />
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
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("contact")}
        >
          <Contact />
        </motion.div>
      </div>
      <Footer />
      {/* <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
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
      </div>
      <LineGradient />
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
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
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
  );
}

export default App;
