import React from "react";

import { Title } from "features/Title";
import { Cart } from "features/Cart";

export const CartPage = () => {
  return (
    <section className="container">
      <Title>Корзина</Title>
      <Cart />
    </section>
  );
};
