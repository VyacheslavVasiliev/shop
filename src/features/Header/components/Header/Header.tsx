import React from "react";
import { NavLink } from "react-router-dom";

import { selectCartTotalAmount } from "features/Cart/cartSlice";
import "./Header.scss";
import { useSelector } from "react-redux";

type HeaderProps = {};

export const Header = (_props: HeaderProps) => {
  const totalAmount = useSelector(selectCartTotalAmount);

  return (
    <header className="header container">
      <nav className="header__content">
        <NavLink
          className="header__link"
          activeClassName="header__link--active"
          exact
          to="/"
        >
          На главную
        </NavLink>
        <span className="header__cart">
          <NavLink
            className="header__link header__link--cart"
            activeClassName="header__link--active"
            to="/cart"
          >
            Корзина
          </NavLink>
          <span className="header__cart-amount">{totalAmount}</span>
        </span>
      </nav>
    </header>
  );
};
