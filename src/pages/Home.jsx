import React from "react";
import AnimationPac from "../components/AnimationPac";
import "../styles/home.scss";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="firstSection">
        <p>
          UPLOAD YOUR <span>CODE</span> EASILY!
          <hr />
        </p>
        <br />
        <br />
        <div>No Personal Information Is Needed! </div>
        <div>Upload Anywhere Anytime!</div>
        <div>Why Use: No Need Of Pendrive & Google SignUp </div>
      </div>
      <div className="secondSection">
        <AnimationPac />
      </div>
    </div>
  );
};

export default Home;
