import React, { useEffect, useState } from "react";
import SimpleAccordion from "./SimpleAccordion";
import "./Women.css"
import axios from "axios";
import { Product } from "./Product"
import { AiOutlineHeart } from "react-icons/ai";
export const Women=()=>{
    
    const [womens ,setWomens] = useState([])

    let getData = async()=>{
        let response = await fetch("http://localhost:8080/womens")
        let data = await response.json();
        setWomens(data)
        // console.log(data)
    }
     
    useEffect(()=>{
        getData();
    },[])


    const add= (e)=>{
     
        const cartData={
          product_id:e.id,
          productimage_url:e.image,
          productprice:e.price,
          productname:e.name,
        
          productcancelprice:e.canceledprice
        }
        axios.post(`http://localhost:8080/cart`,cartData);
        // alert("id")
        console.log(cartData);
      }

      const Whislist= (e)=>{
     
        const WhislistData={
          product_id:e.id,
          productimage_url:e.image,
          productprice:e.price,
          productname:e.name,
          productcancelprice:e.canceledprice
        }
        axios.post(`http://localhost:8080/whishlist`,WhislistData);
        // alert("id")
        console.log(WhislistData);
      }




    return (
        <div>
          <div className="toaddmarginintop"></div>
        <h1 className="Womenshead">Women Clothing</h1>
        <div className="Womensmain">
        <div className="Womensright">
        <SimpleAccordion/>
        </div>
        <div className="Womensleft">
        
        {womens.map((e,id)=>{
             return (
                <div className="MensDiv" key={id}>
                 <Product 
                   product_id={e.id}
                   productimage_url={e.image}
                   productname={e.name}
                   productprice={e.price}
                   productcancelprice={e.canceledprice}
                   producttribe={e.tribe}
   
                   />
               <div className="Mens_cart_whish_div">
                  <div className="mens_cart_btn">
                    <button
                      onClick={() => {
                        add(e);
                      }}
                    >
                      Add
                    </button>
                  </div>

                  <div >
                    <AiOutlineHeart className="mens_whishlist_btn"
                      onClick={() => {
                        Whislist(e);
                      }}
                    />
                  </div>
                </div>
                
                </div>
               );
             })}
        

        </div>
        </div>
        </div>
    )
    
}



// https://bewakoof-projects.herokuapp.com/women