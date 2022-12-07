import React from "react";
import Highlight from "react-highlight";

const CodeCard = (props) => {
  return (
    <>
      <hr />
      <div className="codeContainer">
        <span className="q_details">Assignment: {props.assignment_no}</span>
        <span className="q_details">Question: {props.q_no}</span>
        <span className="q_details">UPLOAD ON: 1{props.timestamp}</span>

        <br />
        <br />
        <Highlight language="java">{props.code}</Highlight>
      </div>
      <hr />
    </>
  );
};

export default CodeCard;
