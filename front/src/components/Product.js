import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating.js";
const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${product._id}`} className="text-decoration-none">
        <Card.Img src={product.image} variant="top" />
      </a>
      <Card.Body>
        <a href={`/product/${product._id}`} className="text-decoration-none">
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
          <Card.Text as="div">
            <Rating product={product} />
          </Card.Text>
          <Card.Text as="h3">${product.price}</Card.Text>
        </a>
      </Card.Body>
    </Card>
  );
};

export default Product;
