import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
const CodeCard = (props) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <div className="codeContainer">
        <span className="q_details">Assignment: {props.assignment_no}</span>
        <span className="q_details">Question: {props.q_no}</span>
        <span className="q_details">UPLOAD ON: 1{props.timestamp}</span>
        <br />
        <div className="codeSource">
          <pre className={"language-java"}>
            <code>{`${props.code}`}</code>
          </pre>
        </div>
      </div>
    </>
  );
};

export default CodeCard;
