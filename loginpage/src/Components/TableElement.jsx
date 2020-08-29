import React from "react";

export default function TableElement(props) {
  let float = {
    clear: "both",
    display: "block",
  };
  let name = {
    float: "left",
    margin: "5px 705px 0px 48px",
    padding: "18px 24px 0px 0px",
    width: "85px",
    height: "15px",
    textAlign: "left",
    font: "normal normal normal 12px/15px Proxima Nova",
    letterSpacing: "0px",
    color: " #4b4b4b",
    opacity: 1,
  };
  let marginLeft = {
    marginLeft: "24px",
    paddingTop: "18px",
    paddingLeft: "24px",
  };
  let deld = {
    float: "left",
    margin: "14px 115px 0px 0px",
    padding: "18px 0px 0px 24px",
    width: "auto",
    height: "15px",
    textAlign: "left",
    font: "normal normal normal 12px/15px Proxima Nova",
    letterSpacing: "0px",
    color: " #4b4b4b",
    opacity: 1,
  };
  let percent = {
    float: "left",
    marginTop: "14px",
    padding: "18px 0px 0px 24px",
    width: "auto",
    height: "15px",
    textAlign: "left",
    font: "normal normal normal 12px/15px Proxima Nova",
    letterSpacing: "0px",
    color: " #4b4b4b",
    opacity: 1,
  };
  let bar = {
    float: "left",
    marginTop: "35px",
    marginLeft:"10px",
    width: `${props.percent}px`,
    height: "8px",
    background: "#00a29d 0% 0% no-repeat padding-box",
    borderRadius:"10px",
    opacity:0.3
  };
  return (
    <div style={float}>
      <p style={name}>{props.name}</p>
      <p style={deld}>34</p>
      <p style={deld}>27</p>
      <p style={deld}>0</p>
      <p style={percent}>{props.percent} %</p>
      <p style={bar}></p>
    </div>
  );
}
