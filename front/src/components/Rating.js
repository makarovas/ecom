import React from "react";
import Star from "./Star";
const Rating = ({ product, color }) => {
  const { rating: value, numReviews } = product;
  return (
    <div className="my-3">
      <div className="rating">
        <Star value={value} digit1={1} digit2={0.5} color={color} />
        <Star value={value} digit1={2} digit2={1.5} color={color} />
        <Star value={value} digit1={3} digit2={2.5} color={color} />
        <Star value={value} digit1={4} digit2={3.5} color={color} />
        <Star value={value} digit1={5} digit2={4.5} color={color} />
      </div>
      <span>{`${numReviews && numReviews} reviews`}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: "#f8e825",
};

export default Rating;
