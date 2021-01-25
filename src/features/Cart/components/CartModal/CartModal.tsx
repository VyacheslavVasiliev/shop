import React from "react";

import "./CartModal.scss";

export const CartModal = () => {
  return (
    <div className="cart-modal">
      <h3 className="cart-modal__title">Ваш заказ успешно формлен!</h3>
      <p className="cart-modal__text">Спасибо за покупку</p>
    </div>
  );
};
