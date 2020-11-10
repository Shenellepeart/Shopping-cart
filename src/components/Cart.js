import React from "react";

const Cart = ({ cartItems }) => {
  return (
    <div>
      {cartItems.length === 0 ? (
        <div className="cart cart-header">Cart is Empty</div>
      ) : (
        <div className="cart cart-header">
          You have {cartItems.length} in the cart
        </div>
      )}
    </div>
  );
};

export default Cart;
