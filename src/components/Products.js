import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";
import "./Products.css";
import formatCurrency from "../utities";

const Products = ({ products, addToCart, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, []);

  return products.loading ? (
    <h2>loading...</h2>
  ) : products.error ? (
    <h2>{products.error}</h2>
  ) : (
    <div>
      <ul className="products">
        {products?.items?.map((item) => (
          <li key={item._id}>
            <div className="product">
              <a href={`#${item._id}`}>
                <img src={item.image} alt={item.title} />
                <p>{item.title}</p>
              </a>
              <div className="product-price">
                <div>{formatCurrency(item.price)}</div>
                <button
                  className="button primary"
                  onClick={() => addToCart(item)}
                >
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

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => {
    dispatch(fetchProducts());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
