import React from "react";
import { CartItems } from "./CartItems";
import { CartTotal } from "./CartTotal";
import "./Cart.css"
export const Cart = () => {
  return (
    <div className="mainCart">
      <CartItems />
      <CartTotal />
    </div>
  );
};
