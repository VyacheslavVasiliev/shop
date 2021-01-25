import React from "react";

import { Title } from "features/Title";
import { ProductList } from "features/ProductList"

export const HomePage = () => {
  return (
    <section className="container">
      <Title>Магазин отличных товаров!</Title>
      <ProductList />
    </section>
  );
};
