import React from "react";
import { Card } from "react-bootstrap";
import Rating from "../components/Rating";
export const Product = (props) => {
  return (
    <Card className="my-3 p-3 rounder">
      <a href={`/product/${props.product._id}`}></a>
      <Card.Img src={props.product.image} variant="top" />
      <Card.Body>
        <a href={`/product/${props.product._id}`}>
          <Card.Title as="div">
            <div className="my-3">
              {props.product.rating} from {props.product.numReviews} reviews
            </div>
          </Card.Title>
        </a>
        <Card.Text as="div">
          <Rating
            value={props.product.rating}
            text={`${props.product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as="h3">{props.product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
