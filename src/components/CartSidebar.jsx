import React from 'react';

const CartSidebar = ({ cart, removeItem, onBuy, toggleCartSidebar }) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-sidebar">
      <div className="cart-header">
        <h2>Your Cart</h2>
        {/* Close Cart Button */}
        <button className="close-cart-button" onClick={toggleCartSidebar}>
          ✖
        </button>
      </div>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          <ul className="cart-items">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
                <button onClick={() => removeItem(index)} className="remove-item-button">
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-footer">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button onClick={onBuy} className="buy-now-button">
              Buy Now
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartSidebar;
