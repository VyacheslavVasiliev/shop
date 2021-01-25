import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Product } from "../Product";
import { Loader } from "components/Loader";
import {
  selectProductsList,
  selectLoadingStatus,
  productInit,
} from "../../productListSlice";
import "./ProductList.scss";

export const ProductList = () => {
  const productList = useSelector(selectProductsList);
  const isLoading = useSelector(selectLoadingStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productInit());
  }, [dispatch]);

  return isLoading ? (
    <Loader />
  ) : (
    <ul className="product-list">
      {productList.map((product) => {
        return (
          <li key={product.id}>
            <Product {...product} />
          </li>
        );
      })}
    </ul>
  );
};
