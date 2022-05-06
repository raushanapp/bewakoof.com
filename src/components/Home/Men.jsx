import "./Men.css";
import React, { useEffect, useState } from "react";
import SimpleAccordion from "./SimpleAccordion";
import { Product } from "./Product";
export const Men = () => {
  
  const [mens, setMens] = useState([]);
  
  // const [cartItems,setCartItems] = useState([]);

  const getUser = async () => {
    const response = await fetch("https://bewakoof-projects.herokuapp.com/men");
    const data = await response.json();
    setMens(data.product);
    // console.log(data.product);
  };

  useEffect(() => {
    getUser();
  });

  
  
  // const onAdd =(mens) =>{

  //   const exist = cartItems.find((x)=> x.id === mens.id);

  //   if(exist){
  //     setCartItems(
  //       cartItems.map((x)=>
  //         x.id === mens.id ? {...exist , qty:exist.qty+1}:x
  //       )
  //     );
  //   }else{
  //     setCartItems([...cartItems,{...mens,qty:1}])
  //   }
  // }
  


  return (
    <div>
      <h1 className="Menshead">Men Clothing</h1>
      <span></span>
      <div className="Mensmain">
        <div className="Mensright">
          <SimpleAccordion />
        </div>
        <div className="Mensleft">
          {mens.map((el, id) => {
            return (
              <Product key={id}
                productimage_url={el.image}
                productname={el.name}
                productprice={el.price}
                productcancelprice={el.canceledprice}
                producttribe={el.tribe}
              />
              
            );
          })}
         
        </div>
        
      </div>
    </div>
  );
};