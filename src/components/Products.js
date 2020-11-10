import React from "react";
import "./Products.css";
import formatCurrency from "../utities";

const Products = ({ inventory, addToCart }) => {
  return (
    <div>
      <ul className="products">
        {console.log(inventory.products)}
        {inventory?.products?.map((product) => (
          <li key={product._id}>
            <div className="product">
              <a href={`#${product._id}`}>
                <img src={product.image} alt={product.title} />
                <p>{product.title}</p>
              </a>
              <div className="product-price">
                <div>{formatCurrency(product.price)}</div>
                <button className="button primary" onClick={()=>addToCart(product)}>
                  Add To Cart
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
