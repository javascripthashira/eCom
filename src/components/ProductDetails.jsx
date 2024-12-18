import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../Data/data";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="product-details-container">
      <div className="products-image">
        <img src={`/${product.image}`} alt={product.name} style={{ width: "500px", height: "300px" }} />
      </div>

      <div className="product-details">
        <h1 className="product-title">{product.name}</h1>
        <p className="product-description">{product.description}</p>
        <p className="product-rating">⭐ {product.rating} (121 reviews)</p>

        <div className="product-price">
          <h2>${product.price
.toFixed(2)}</h2> <p>or $99.99/month</p> </div>

php
Copy code
    <div className="color-options">
      <h3>Choose a Color:</h3>
      <div className="colors">
        <span className="color-option color-red"></span>
        <span className="color-option color-black"></span>
        <span className="color-option color-gray"></span>
      </div>
    </div>

    <div className="actions">
      <button className="buy-now">Buy Now</button>
      <button className="add-to-cart" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>

    <p className="availability">Only 12 items left! Don’t miss it.</p>
  </div>
</div>
); };

export default ProductDetails;