import React from "react";
import arrowDown from "../icons/down-arrow.png";
import { animateScroll as scroll, scroller } from "react-scroll";

const ArrowBounce = ({ direction, pageId, text }) => {


  const scroll = () => {
    scroller.scrollTo(pageId, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
  };

  return (
    <div
      className={`flex flex-col justify-center items-center w-full animate-bounce cursor-pointer`}
      onClick={scroll}
    >
      <h1
        className={`rounded-xl text-white  mx-auto flex text-center h-full `}
      >
        {" "}
        {text}
      </h1>
      <img src={arrowDown} className={`w-[48px] ${direction === 'up' && 'rotate-180'}`} />
    </div>
  );
};

export default ArrowBounce;
