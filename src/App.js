// feature-1 change
import React, { useState } from "react";
import data from "./data.json";
import Products from './components/Products';

function App() {
  const [inventoryDetails, setInventoryDetails] = useState({
    products: data.products,
    size: "",
    sort: "",
  });

  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
          <Products inventory={inventoryDetails}/>
          </div>
          <div className="sidebar">Cart Items</div>
        </div>
      </main>
      <footer>All rights reserved.</footer>
    </div>
  );
}

export default App;
