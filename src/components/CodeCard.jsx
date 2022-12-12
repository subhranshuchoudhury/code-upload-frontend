import React from "react";
import Highlight from "react-highlight";
import "../../node_modules/react-highlight/node_modules/highlight.js/styles/dracula.css";
const CodeCard = (props) => {
  return (
    <>
      <hr />
      <div className="codeContainer">
        <span className="q_details">Assignment: {props.assignment_no}</span>
        <span className="q_details">Question: {props.q_no}</span>
        <span className="q_details">UPLOAD ON: {props.timestamp}</span>
        <br />
        <br />
        <div className="codeViewer">
          <Highlight className={props.language}>{props.code}</Highlight>
        </div>
      </div>
      <hr />
    </>
  );
};

export default CodeCard;
