import "./Men.css";
import React, { useEffect, useState } from "react";
import SimpleAccordion from "./SimpleAccordion";
import { Product } from "./Product";
import axios from "axios";
import { AiOutlineHeart } from "react-icons/ai";
export const Men = () => {
  const [mens, setMens] = useState([]);

  // const [cartItems, setCartItems] = useState([]);

  const getUser = async () => {
    const response = await fetch("http://localhost:8080/Mens");
    const data = await response.json();
    setMens(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  const add = (e) => {
    const cartData = {
      productimage_url: e.image,
      productprice: e.price,
      productname: e.name,
      productcancelprice:e.canceledprice
    };
    axios.post(`http://localhost:8080/cart`, cartData);
    // alert("id");
    console.log(cartData);
  };

  const Whislist = (e) => {
    const WhislistData = {
      productimage_url: e.image,
      productprice: e.price,
      productname: e.name,
      productcancelprice:e.canceledprice,
      producttribe:e.tribe

    };
    axios.post(`http://localhost:8080/whishlist`, WhislistData);
    // alert("id");
    console.log(WhislistData);
  };

  return (
    <div>
      <h1 className="Menshead">Men Clothing</h1>
      <div className="Mensmain">
        <div className="Mensright">
          <SimpleAccordion />
        </div>
        <div className="Mensleft">
          {mens.map((e, id) => {
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
  );
};

// https://bewakoof-projects.herokuapp.com/men
