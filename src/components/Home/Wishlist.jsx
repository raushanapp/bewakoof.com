import React ,{useState,useEffect} from "react";
import "./Wishlist.css";
import {WishlistItems} from "../Home/WishlistItems"
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
  
return (
<>
      <div className="whislistContainer">
        <h2 className="wishlisth2">Wishlist</h2>
        <div className="wishnew">
        {wish.map((e,id)=>{
  return(
    <WishlistItems 
    Wish_id={e.product_id}
    Wish_image={e.productimage_url}
    Wish_title={e.productname}
    Wish_price={e.productprice}
    Wish_canclprice={e.productcancelprice}
    Wish_tribemember={e.producttribe}/>
    )
  })}
  </div>
      </div>
    </>
  );
};





