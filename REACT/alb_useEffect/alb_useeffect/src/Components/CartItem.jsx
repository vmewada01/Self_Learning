import React from "react";
import LabelPrice from "./LabelPrice";
import Quantity from "./Quantity";

const CartItem = ({ label, price, qty,handleChangeQty,id}) => {
  return (
    <div style={{display:"flex" , gap:"1rem" , padding: "2rem", justifyContent:"center", alignItems: "center" , border: "1px solid tomato"}}>
      <LabelPrice label={label} price={price} />
      <Quantity id={id} qty={qty} chngCount={handleChangeQty} />
    </div>
  );
};

export default CartItem;
