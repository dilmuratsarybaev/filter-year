import React from "react";
import "./Button.css";
export const Button = (props) => {
  return (
    <div className={props.className}>
      <button className="AddBtn" onClick={props.onClick}>
        {props.title}
      </button>
    </div>
  );
};
