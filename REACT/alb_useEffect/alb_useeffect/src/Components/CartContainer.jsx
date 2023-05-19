import React, { useState } from "react";
import CartItem from "./CartItem";
import Total from "./Total";

const intialData = [
  {
    id: 1,
    product_name: "Noodles",
    price: 30,
    qty: 1,
  },
  {
    id: 2,
    product_name: "Briyani",
    price: 90,
    qty: 2,
  },
  {
    id: 3,
    product_name: "Chips",
    price: 10,
    qty: 3,
  },
];

const CartContainer = () => {
  const [data, setData] = useState(intialData);

  //console.log(data);

  function CalculateTotal(products){
  return   products.reduce((acc,cur)=> acc +  (cur.price*cur.qty),0)
  }

 const handleChangeQty=(id,amount)=>{
    let updatedData=data.map(item=>{
        if(item.id===id){
              return {
                ...item,
                qty: item.qty+ amount
              }
        }else{
            return item
        }
    })
    setData(updatedData)
 }


  return (
    <div style={{border: "1px solid tomato"}}>
      {data.map((item) => (
        <CartItem
        key={item.id}
          id={item.id}
          label={item.product_name}
          price={item.price}
          qty={item.qty}
          handleChangeQty={handleChangeQty}
        />
      ))}

      <Total total={CalculateTotal(data)}/>
    </div>
  );
};

export default CartContainer;
