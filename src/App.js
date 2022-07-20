import React from "react";
// @import components
import Products from "./components/Products";
// @import styles
import "./App.css";

const App = () => {
  return (
    <>
      <div className="app-container">
        <img
          className="container-logo"
          src="https://innostark.com/wp-content/uploads/2022/02/main-logo.png"
          alt="logoImage"
        />
        <h2 className="container-heading"> Products Listing</h2>
      </div>
      <Products />
    </>
  );
};
export default App;
