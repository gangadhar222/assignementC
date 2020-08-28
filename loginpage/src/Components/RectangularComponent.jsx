import React from "react";
import "./Rectangular.css";

export default function RectangularComponent(props) {
  let style = {
    margin: "0px 0px 0px 0px",
    float: "right",
    width: "48px",
    height: "48px",
    background: `transparent url('${props.icon}') 0% 0% no-repeat padding-box`,
    opacity: 1,
  };
  return (
    <div class="rectangle">
      <div className="number">{props.count}</div>
      <div style={style}></div>
      <div className="textBold">{props.status}</div>
      <div className="textMute">{props.statusDetails}</div>
    </div>
  );
}
