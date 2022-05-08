import React ,{useState,useEffect} from "react";
import "./Wishlist.css";
import axios from "axios";
import { Product } from "./Product";
import { AiFillDelete } from "react-icons/ai";
export const Wishlist = () => {
  
  const [wish ,setWish] = useState([])

  const getUser = async () => {
    const response = await fetch("http://localhost:8080/whishlist");
    const data = await response.json();
    setWish(data);
    console.log(data);
  };

  useEffect(() => {
    getUser();
  }, []);


  const add = (e,id) => {
    const cartData = {
      productimage_url: e.image,
      productprice: e.price,
      productname: e.name,
      productcancelprice:e.canceledprice
    };
    axios.post(`http://localhost:8080/cart/${id}`, cartData);
    alert("id");
    console.log(cartData);
  };

  function remove(id){
    fetch(`http://localhost:8080/whishlist/${id}`,{
        method:'DELETE'
    })
    .then((res)=>{
         res.json().then((ress)=>{
          //  console.log(ress)
            getUser();
         })
    })
    .catch((error)=>{
      console.log(error);
    })

  }





  
return (
<>
      <div className="whislistContainer">
        <h2 className="wishlisth2">Wishlist</h2>
        <div className="wishnew">
        {wish.map((e,id)=>{
  return(
    <div className="MensDiv" key={id}>
                <Product
                 productimage_url={e.productimage_url}
                 productname={e.productname}
                 productprice={e.productprice}
                 productcancelprice={e.productcancelprice}
                 producttribe={e.producttribe}/>
                
                <div className="Mens_cart_whish_div">
                  <div className="mens_cart_btn">
                    <button
                      onClick={() => {
                        add(e.id);
                      }}
                    >
                      Move to cart
                    </button>
                  </div>

                  <div >
                    <AiFillDelete className="mens_whishlist_btn"
                      onClick={() => {
                        remove(e.id);
                      }}
                    />
                  </div>
                </div>
              </div>
            );
  })}
  </div>
      </div>
    </>
  );
};





