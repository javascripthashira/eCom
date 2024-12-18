import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Rating: {product.rating} ⭐</p>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`} className="details-button">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
