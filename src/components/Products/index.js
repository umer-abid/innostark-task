import React from "react";
// @import dependencies
import { Button } from "antd";
// @import styles
import "./Products.css";

const Products = () => {
  return (
    <>
      <div className="products-container">
        <div className="products-container-add-button">
          <Button type="primary">Add More</Button>
        </div>
        <div>
          <p>List of Products</p>
        </div>
      </div>
    </>
  );
};
export default Products;
