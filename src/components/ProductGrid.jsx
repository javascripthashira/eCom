// ProductGrid.js
import React from 'react';
import { products } from '../Data/data';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
