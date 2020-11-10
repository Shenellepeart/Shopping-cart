// feature-1 change
import React, { useState } from "react";
import data from "./data.json";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Cart from "./components/Cart";

function App() {
  const [inventoryDetails, setInventoryDetails] = useState({
    products: data.products,
    cartItems: [],
    size: "",
    sort: "",
  });

  const sortProducts = (event) => {
    const sort = event.target.value;
    setInventoryDetails((inventoryDetails) => ({
      ...inventoryDetails,
      sort: sort,
      products: [...inventoryDetails.products]
        .sort((a, b) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "highest"
            ? a.price < b.price
              ? 1
              : -1
            : a._id > b._id
            ? 1
            : -1
        ),
    }));
  };

  const filterProducts = (event) => {
    if (event.target.value === "") {
      setInventoryDetails({
        ...inventoryDetails,
        size: event.target.value,
        product: data.products,
      });
    } else {
      setInventoryDetails({
        ...inventoryDetails,
        size: event.target.value,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(event.target.value) >= 0
        ),
      });
    }
  };

  const addToCart = (product) => {
    let notInCart = true;
    const cartItems = inventoryDetails.cartItems.map((item) => {
      if (item._id === product._id) {
        notInCart = false;
        return {
          ...item, 
          count: item.count +1
        }
      }
      return item;
    });
    if (notInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    setInventoryDetails({...inventoryDetails, cartItems})
  };

  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter
              count={inventoryDetails.products.length}
              size={inventoryDetails.size}
              sort={inventoryDetails.sort}
              filterProducts={filterProducts}
              sortProducts={sortProducts}
            />
            <Products inventory={inventoryDetails} addToCart={addToCart}/>
          </div>
          <div className="sidebar">
            <Cart cartItems={inventoryDetails.cartItems}/>

          </div>
        </div>
      </main>
      <footer>All rights reserved.</footer>
    </div>
  );
}

export default App;
