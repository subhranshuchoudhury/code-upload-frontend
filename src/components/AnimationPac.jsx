import React from "react";
import "../styles/animation.scss";
import { HiCodeBracket } from "react-icons/hi2";
import { GiNightSleep } from "react-icons/gi";
import { BsArrowRepeat } from "react-icons/bs";
import { IoFastFood } from "react-icons/io5";

const AnimationPac = () => {
  return (
    <>
      <div className="container">
        <div className="pacman"></div>
        <div className="path">
          <div className="dot">
            Eat&nbsp;
            <IoFastFood />
          </div>
          <div className="dot">
            Sleep&nbsp;
            <GiNightSleep />
          </div>
          <div className="dot">
            Code&nbsp;
            <HiCodeBracket />
          </div>
          <div className="dot">
            Repeat&nbsp;
            <BsArrowRepeat />
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimationPac;
