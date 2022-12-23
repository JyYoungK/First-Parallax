import React, { useRef, useState, useEffect } from "react";
import News from "../assets/news2.png";

const Projects = () => {
  const trackRef = useRef(null);
  const [scrollCount, setScrollCount] = useState(0);

  useEffect(() => {
    function handleScroll() {
      if (!trackRef.current) return;

      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 6200 && scrollTop < 7200) {
        setScrollCount(scrollCount + 1);
      } else {
        setScrollCount(0);
      }

      // trackRef.current.style.transform = `translate(${-(
      //   scrollCount * 4
      // )}%, -50%)`;

      for (const image of trackRef.current.getElementsByClassName("image")) {
        image.animate(
          {
            objectPosition: `${100 + -(scrollCount * 7)}% center`,
          },
          { duration: 1200, fill: "forwards" }
        );
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollCount]);

  const circleRef = useRef(null);

  useEffect(() => {
    const circle = circleRef.current;
    const text = circle.dataset.text;
    const characters = text.split("");

    const deltaAngle = 360 / characters.length;
    const distanceFromCenter = 256;

    characters.forEach((character, index) => {
      console.log(index);
      const span = document.createElement("span");
      span.innerText = character;

      const rotateY = `rotateY(${index * deltaAngle}deg)`;
      const translateZ = `translateZ(${distanceFromCenter}px)`;
      span.style.transform = `${rotateY} ${translateZ}`;

      circle.appendChild(span);
    });
  }, []);

  function openSpy() {
    window.open("http://spyproject.netlify.com/", "_blank");
  }
  function openNews() {
    window.open("https://newsproject-jyyoungk.vercel.app/", "_blank");
  }
  // function openAI() {
  //   window.location.href = 'https://www.example.com';
  // }
  // const handleMouseClick = (e) => {
  //   //Creating a function that saves the mouse position when clicked
  //   trackRef.current.setAttribute("data-mouse-down-at", e.clientX.toString());
  // };

  // const handleMouseMove = (e) => {
  //   // Creating a function to handle the mouse movement anywhere on the screen
  //   if (trackRef.current.getAttribute("data-mouse-down-at") === "0") return;
  //   const mouseDelta =
  //       parseFloat(trackRef.current.getAttribute("data-mouse-down-at")) -
  //       e.clientX,
  //     maxDelta = window.innerWidth / 2;

  //   const percentage = (mouseDelta / maxDelta) * -100,
  //     nextPercentageUnconstrained =
  //       parseFloat(trackRef.current.getAttribute("data-prev-percentage")) +
  //       percentage, //sets the limit to the screen
  //     nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -400); //max value 0 and min value -100

  //   trackRef.current.setAttribute("data-percentage", nextPercentage.toString());
  //   trackRef.current.style.animation = "transform 1200ms forwards";
  //   trackRef.current.style.transform = `translate(${
  //     nextPercentage / 2
  //   }%, -50%)`;

  //   for (const image of trackRef.current.getElementsByClassName("image")) {
  //     image.animate(
  //       {
  //         objectPosition: `${100 + nextPercentage / 2}% center`,
  //       },
  //       { duration: 1200, fill: "forwards" }
  //     );
  //   }
  // };

  // const handleMouseRelease = () => {
  //   //Creating a function to reset the mouse position when released
  //   trackRef.current.setAttribute("data-mouse-down-at", "0");
  //   trackRef.current.setAttribute(
  //     "data-prev-percentage",
  //     trackRef.current.getAttribute("data-percentage")
  //   ); //This will remember the slide position and start from there instead of resetting to 0
  // };

  // window.onmousedown = (e) => handleMouseClick(e);

  // window.ontouchstart = (e) => handleMouseClick(e.touches[0]); //This will allow users that uses touch on screen devices

  // window.onmouseup = (e) => handleMouseRelease(e);

  // window.ontouchend = (e) => handleMouseRelease(e.touches[0]); //This will allow users that uses touch on screen devices

  // window.onmousemove = (e) => handleMouseMove(e);

  // window.ontouchmove = (e) => handleMouseMove(e.touches[0]); //This will allow users that uses touch on screen devices

  return (
    <div className="flex flex-col">
      <div
        className="image-track content-end"
        ref={trackRef}
        data-mouse-down-at="0"
        data-percentage="0"
        data-prev-percentage="0"
      >
        <img
          className="image"
          alt="portfolio"
          src="https://i.ibb.co/kMw3GxM/318079798-707876150953305-3898617955148906755-n.png"
          draggable="false"
          onClick={() => openSpy()}
        />
        <img
          className="image"
          alt="portfolio"
          src={News}
          draggable="false"
          onClick={() => openNews()}
        />
        <img
          className="image"
          alt="portfolio"
          src="https://i.ibb.co/mhgtvPQ/AI-HERO-58306268c6f4b659459f5b7b2dd3e8a5.jpg"
          draggable="false"
        />
      </div>

      <div
        className="projectDesc md:text-8xl font-black  text-4xl text-[#80b0ce] "
        ref={circleRef}
        data-text="2023 PROJECTS"
      ></div>
    </div>
  );
};

export default Projects;
