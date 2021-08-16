import React from "react";

export const Button = (props) => {
  return (
    <div>
      <button
        className="btn"
        style={{ backgroundColor: props.color, color: "black" }}
        onClick={props.onClick}
      >
        {props.text}
      </button>
    </div>
  );
};
