import Birds from "./scenes/Birds";
import DotGroup from "./scenes/DotGroup";
import MySkills from "./scenes/MySkills";
import LineGradient from "./components/LineGradient";
import Projects from "./scenes/Projects";
import Projects2 from "./scenes/projects2";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import { useEffect, useState } from "react";
import Testimonials from "./scenes/Testimonials";
import { motion } from "framer-motion";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

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
    }

    if (z_forest <= 7 && z_forest > 4) {
      //start scaling after forest finishes scaling
      document.getElementsByClassName(
        "temple"
      )[0].style = `transform: translate3d(${skip_to_deer}px,0,0) scale(${z_6})`;
      document.getElementsByClassName(
        "deer"
      )[0].style = `transform: translate3d(${hr_3}px,0,0) scale(${z_7})`;
    }

    if (z_forest > 7) {
      //start scaling fast after forest content finishes
      document.getElementsByClassName(
        "deer"
      )[0].style = `transform: translate3d(${-hr}px,0,0) scale(${z_5})`;
    }

    if (z_forest > 8.3) {
      document.getElementsByClassName(
        "deer"
      )[0].style = `transform: translate3d(${hr_3}px,0,0) scale(${z_1})`;
      document.getElementsByClassName(
        "moon"
      )[0].style = `transform: scale(${z_9})`;
    } else {
      document.getElementsByClassName(
        "moon"
      )[0].style = `transform: scale(${z_10})`;
    }

    console.log(z_forest);
  };

  return (
    <div className="paralax scrollbar-hide">
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

      <div className="hidden sm:block fixed w-full h-full top-0 left-0 fog"></div>
      <div className="fixed w-full h-full top-0 left-0 moon"></div>

      {/* ----------- First Content Title/Forest Page -----------  */}
      <div className="fixed w-full h-full top-0 left-0 forest"></div>

      <div className={`forest_container z-91`}>
        <div className="forest-header hover:filter hover:saturate-200 transition duration-500">
          <div className="md:text-8xl text-4xl"> Junyoung Kang</div>
          <div className="md:text-4xl"> Frontend Developer / Web Designer</div>
        </div>
      </div>

      {/* ----------- Second Content /Temple Page ----------- */}
      <div className="fixed w-full h-full top-0 left-0 temple"></div>
      <div className="temple_container">
        <LineGradient />

        <div className="md:h-full ">
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("skills")}
          >
            <MySkills />
          </motion.div>
        </div>
      </div>

      {/* ----------- Third Content /Deer Page ----------- */}
      <div className="fixed w-full h-full top-0 left-0 deer"></div>
      <div className="deer_container">
        <div className="w-5/6 mx-auto md:h-full">
          <div className="w-5/6 mx-auto mb-80">
            <motion.div
              margin="0 0 -200px 0"
              amount="all"
              onViewportEnter={() => setSelectedPage("projects")}
            >
              <Projects2 />
              {/* <Projects /> */}
            </motion.div>
          </div>
          {/* <LineGradient />

          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("contact")}
          >
            <Contact />
          </motion.div> */}
        </div>
      </div>
      <div className="w-5/6 mx-auto md:h-full mt-80">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("testimonials")}
        >
          <Testimonials />
        </motion.div>
      </div>
      <Footer />

      {/* End */}
    </div>
  );
}

export default App;
