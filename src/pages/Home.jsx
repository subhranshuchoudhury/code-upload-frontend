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
        <br />
        <br />
        <div>1️⃣ No Personal Information Is Needed.</div>
        <div>2️⃣ Upload Anywhere Anytime.</div>
        <div>3️⃣ Why Use: No Need Of Pen Drive & Google SignUp. </div>
        <div>4️⃣ Unlimited Account & Unlimited Storage. </div>
      </div>
      <div className="secondSection">
        <AnimationPac />
      </div>
    </div>
  );
};

export default Home;
