import React from "react";
import { useDispatch } from "react-redux";

import { CartCounter } from "../CartCounter";
import { incrementProductAmountById, decrementProductAmountById, deleteProductById, CartProductType } from "../../cartSlice"
import "./CartProduct.scss";
import { shallowCompare } from "utils";


export const CartProduct = React.memo(({name, amount, price, id, image}: CartProductType) => {
  const dispatch = useDispatch();

  return (
    <section className="cart-product">
      <button className="cart-product__delete" onClick={()=>dispatch(deleteProductById(id))}>Удалить</button>
      <p className="cart-product__image-wrapper">
        <img className="cart-product__image" src={image} alt={name} />
      </p>
      <div className="cart-product__content">
        <h3 className="cart-product__title">{name}</h3>
        <div className="cart-product__bottom">
          <strong className="cart-product__price">Цена: {price}$</strong>
          <div className="cart-product__counter">
            <CartCounter 
              amount={amount}
              increase={()=>{
                dispatch( incrementProductAmountById(id) )
              }}
              decrease={()=>{
                dispatch( decrementProductAmountById(id) )
              }}/>
          </div>
        </div>
      </div>
    </section>
  );
}, shallowCompare);
