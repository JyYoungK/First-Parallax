import "./App.css";
import React, { useRef } from "react";

function App() {
  const trackRef = useRef(null);

  const handleMouseClick = (e) => {
    trackRef.current.setAttribute("data-mouse-down-at", e.clientX.toString());
  };

  const handleMouseMove = (e) => {
    // Creating a function to handle the mouse movement anywhere on the screen
    if (trackRef.current.getAttribute("data-mouse-down-at") === "0") return;
    const mouseDelta =
        parseFloat(trackRef.current.getAttribute("data-mouse-down-at")) -
        e.clientX,
      maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100,
      nextPercentage =
        parseFloat(trackRef.current.getAttribute("data-prev-percentage")) +
        percentage;
    // nextPercentageUnconstrained =
    //   parseFloat(trackRef.current.dataset.prevPercentage) + percentage,
    // nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    trackRef.current.setAttribute("data-percentage", nextPercentage.toString());

    trackRef.current.style.animation = "transform 1200ms forwards";
    trackRef.current.style.transform = `translate(${percentage / 2}%, -50%)`;
  };

  const handleMouseRelease = () => {
    trackRef.current.setAttribute("data-mouse-down-at", "0");
    trackRef.current.setAttribute("data-prev-percentage", "data-percentage"); //This will remember the slide position and start from there instead of resetting to 0
  };

  // const handleOnDown = (e) => {
  //   console.log(track.dataset.mouseDownAt);
  //   track.dataset.mouseDownAt = e.clientX;
  // };
  // const handleOnUp = () => {
  //   track.dataset.mouseDownAt = "0";
  //   track.dataset.prevPercentage = track.dataset.percentage;
  // };

  // const handleOnMove = (e) => {
  //   if (track.dataset.mouseDownAt === "0") return;

  //   const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
  //     maxDelta = window.innerWidth / 2;

  //   const percentage = (mouseDelta / maxDelta) * -100,
  //     nextPercentageUnconstrained =
  //       parseFloat(track.dataset.prevPercentage) + percentage,
  //     nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

  //   track.dataset.percentage = nextPercentage;

  //   track.animate(
  //     {
  //       transform: `translate(${nextPercentage}%, -50%)`,
  //     },
  //     { duration: 1200, fill: "forwards" }
  //   );

  //   for (const image of track.getElementsByClassName("image")) {
  //     image.animate(
  //       {
  //         objectPosition: `${100 + nextPercentage}% center`,
  //       },
  //       { duration: 1200, fill: "forwards" }
  //     );
  //   }
  // };

  // /* -- Had to add extra lines for touch events -- */

  window.onmousedown = (e) => handleMouseClick(e);

  // window.ontouchstart = (e) => handleOnDown(e.touches[0]);

  window.onmouseup = (e) => handleMouseMove(e);

  // window.ontouchend = (e) => handleOnUp(e.touches[0]);

  window.onmousemove = (e) => handleMouseRelease(e);

  // window.ontouchmove = (e) => handleOnMove(e.touches[0]);

  return (
    <div
      className="image-track"
      ref={trackRef}
      data-mouse-down-at="0"
      data-percentage="0"
      data-prev-percentage="0"
    >
      <img
        className="image"
        alt="portfolio"
        src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        draggable="false"
      />
      <img
        className="image"
        alt="portfolio"
        src="https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
        draggable="false"
      />
      <img
        className="image"
        alt="portfolio"
        src="https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        draggable="false"
      />
      <img
        className="image"
        alt="portfolio"
        src="https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        draggable="false"
      />
      <img
        className="image"
        alt="portfolio"
        src="https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        draggable="false"
      />
      <img
        className="image"
        alt="portfolio"
        src="https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80"
        draggable="false"
      />
      <img
        className="image"
        alt="portfolio"
        src="https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80"
        draggable="false"
      />
      <img
        className="image"
        alt="portfolio"
        src="https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        draggable="false"
      />
    </div>
  );
}

export default App;
