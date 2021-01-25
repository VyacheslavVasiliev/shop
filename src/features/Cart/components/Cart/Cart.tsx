import React, { useState } from "react";
import { useSelector } from "react-redux";

import { CartProduct } from "../CartProduct/";
import { Button } from "components/Button";
import { Modal } from "components/Modal";
import { CartModal } from "../CartModal";
import { selectCartProducts, selectCartTotalSum } from "../../cartSlice";
import "./Cart.scss";

type CartPropType = {};

export const Cart = (props: CartPropType) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const products = useSelector(selectCartProducts);
  const totalSum = useSelector(selectCartTotalSum);

  return (
    <section className="cart">
      {products.length === 0 ? (
        <p className="cart__empty">Ваша корзина пуста.</p>
      ) : (
        <>
          <ul className="cart__list">
            {products.map((product) => {
              return (
                <li key={product.id} className="cart__item">
                  <CartProduct {...product}/>
                </li>
              );
            })}
          </ul>
          <hr className="cart__line" />
          <div className="cart__bottom-wrapper">
            <div className="cart__bottom">
              <strong className="cart__total">Итого: {totalSum}$</strong>
              <Button
                className="cart__button"
                onClick={() => setOpenModal(true)}
              >
                Оформить заказ
              </Button>
            </div>
          </div>
          <Modal isOpen={openModal} closeModal={() => setOpenModal(false)}>
            <CartModal />
          </Modal>
        </>
      )}
    </section>
  );
};
