import React from "react";
import "./Cart.css";
import formatCurrency from "../utities";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      {cartItems.length === 0 ? (
        <div className="cart cart-header">Cart is Empty</div>
      ) : (
        <div className="cart cart-header">
          You have {cartItems.length} in the cart
        </div>
      )}
      <div>
        <div className="cart">
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item._id}>
                <div className="cart-wrapper">
                  <div className="image-wrapper">
                    <img src={item.image} alt={item.title} />
                  </div>

                  <div className="item-info">
                    <div className="title">{item.title}</div>
                    <div className="price">
                      {formatCurrency(item.price)} X {item.count}
                      <button
                        className="button"
                        onClick={() => removeFromCart(item)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {cartItems.length !== 0 ? (
          <div className="cart">
            <div className="total">
              <div>
                Total:{" "}
                {formatCurrency(
                  cartItems.reduce((a, c) => a + c.price * c.count, 0)
                )}
              </div>
            </div>
            <button className="button primary">Proceed</button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Cart;
