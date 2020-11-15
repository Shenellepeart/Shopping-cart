import React from "react";
import { connect } from "react-redux";
import { filterProductsBySize, sortProducts } from "../actions/productActions";
import "./Filter.css";

const Filter = ({
  count,
  sort,
  size,
  sortProducts,
  filterProductsBySize,
  products,
  filteredProducts,
}) => {
  return (
    <div className="filter">
      <div className="filter-result">{count} Products</div>
      <div className="filter-sort">
        Order{" "}
        <select value={sort} onChange={(e)=>sortProducts(filteredProducts, e.target.value)}>
          <option value="">Latest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
      <div className="filter-size">
        Filter{" "}
        <select
          value={size}
          onChange={(e) => filterProductsBySize(products, e.target.value)}
        >
          <option value="ALL">All</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products.items,
    filteredProducts: state.products.filteredItems,
    size: state.products.size,
    sort: state.products.sort,
  };
};

// const mapDispatchToProps = (dispatch) => ({
//   filterBySize: (state) => {
//     dispatch(filterProductsBySize(state));
//   },
// });

export default connect(mapStateToProps, {filterProductsBySize, sortProducts})(Filter);
