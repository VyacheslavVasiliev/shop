import React from "react";

import "./CartCounter.scss";

type CartCounterType = {
  amount: number,
  increase: () => void,
  decrease: () => void,
}

export const CartCounter = ({amount, increase, decrease}:CartCounterType) => {
  return (
    <div className="cart-counter">
      <button className="cart-counter__button" onClick={decrease}>-</button>
      <span className="cart-counter__number">{amount}</span>
      <button className="cart-counter__button" onClick={increase}>+</button>
    </div>
  );
};
