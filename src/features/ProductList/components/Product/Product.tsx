import React from "react";
import { useDispatch } from "react-redux";

import { Button } from "components/Button";
import { addProduct } from "features/Cart/cartSlice"
import "./Product.scss";

type ProductType = {
  name: string;
  image: string;
  price: number;
  id: string;
};

export const Product = (product: ProductType) => {
  const { name, image, price } = product;
  const dispatch = useDispatch();

  return (
    <section className="product">
      <p className="product__image-wrapper">
        <img className="product__image" src={image} alt={name} />
      </p>
      <h3 className="product__title">{name}</h3>
      <p className="product__bottom">
        <strong className="product__price">{price}$</strong>
        <Button onClick={()=>{dispatch(addProduct(product))}}>Добавить в корзину</Button>
      </p>
    </section>
  );
};
