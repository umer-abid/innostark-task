import React, { useEffect, useState } from "react";
// @import dependencies
import { Button, Drawer, Input } from "antd";
// @import actions and redux dependencies
import { addProducts, getProducts, updateProducts } from "./Store";
import { useDispatch, useSelector } from "react-redux";
// @import custom components
import { AddNewProducts } from "./Components/AddNewProducts";
import { ProductListing } from "./Components/ProductListing";
// @import styles
import "./Products.css";

const Products = () => {
  const dispatch = useDispatch();
  const store = useSelector(state => state.products);
  const [productsData, setProductsData] = useState(null);
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState(null);
  const [editProductData, setEditProductData] = useState(null);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  useEffect(() => {
    setProductsData(store?.products);
  }, [store?.products]);

  const handleDrawer = () => {
    setVisible(!visible);
    if (edit) {
      setEdit(false);
      setEditProductData(null);
    }
  };
  const onUpdateProductClick = data => {
    if (data) {
      setEdit(true);
      data && setEditProductData(data);
      setVisible(true);
    }
  };
  const onAddProduct = data => {
    if (edit && data?.id) {
      dispatch(updateProducts(data));
    } else dispatch(addProducts(data));
    handleDrawer();
  };
  const handleSearchChange = e => {
    const { value } = e.target;
    setSearch(value);
  };

  return (
    <>
      <div className="products-container">
        <div className="products-container-add-button">
          <Input onClick={handleSearchChange} placeholder="Search Products" />
          <Button onClick={handleDrawer} type="primary">
            Add More
          </Button>
        </div>
        <div>
          <ProductListing
            productsData={productsData}
            loading={store?.products?.loadingStatus}
            updateProduct={onUpdateProductClick}
          />
        </div>
      </div>
      <Drawer
        className="lead-form"
        placement="right"
        width={480}
        onClose={handleDrawer}
        visible={visible}
        destroyOnClose={true}
        title={!edit ? "Add New Product" : "Update Product"}
      >
        <AddNewProducts
          isEdit={edit}
          editData={editProductData}
          addProduct={onAddProduct}
        />
      </Drawer>
    </>
  );
};
export default Products;
