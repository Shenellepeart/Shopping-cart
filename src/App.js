// feature-1 change
import React, { useState } from "react";
import data from "./data.json";
import Products from "./components/Products";
import Filter from "./components/Filter";

function App() {
  const [inventoryDetails, setInventoryDetails] = useState({
    products: data.products,
    size: "",
    sort: "",
  });

  const sortProducts = (event) => {
    // console.log(event.target.value);
  };

  const filterProducts = (event) => {
    if (event.target.value === "") {
      setInventoryDetails({
        size: event.target.value,
        product: data.products,
      });
    } else {
      setInventoryDetails({
        size: event.target.value,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(event.target.value) >= 0
        ),
      });
    }
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
            <Products inventory={inventoryDetails} />
          </div>
          <div className="sidebar">Cart Items</div>
        </div>
      </main>
      <footer>All rights reserved.</footer>
    </div>
  );
}

export default App;
