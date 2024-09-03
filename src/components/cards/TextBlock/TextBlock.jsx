import React from "react";
import "./TextBlock.scss";
export default function TextBlock({ title, text }) {
  return (
    <div className="text_back">
      <p>0-100 км/ч</p>
      <div
        style={{
          marginLeft: "30px",
          width: "20px",
          height: "4px",
          borderRadius: "2px",
          background: "#36DA82",
        }}
      ></div>
      <h4>13.6 сек</h4>
    </div>
  );
}
