import React from "react";

const Star = ({ value, digit1, digit2, color }) => {
  return (
    <span>
      <i
        style={{ color }}
        className={`${
          value >= digit1
            ? "fas fa-star"
            : value >= digit2
            ? "fas fa-star-half-alt "
            : "far fa-star"
        }`}
      ></i>
    </span>
  );
};

export default Star;
