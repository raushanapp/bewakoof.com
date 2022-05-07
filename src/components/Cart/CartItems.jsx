import "./CartItems.css";
import React,{useState , useEffect} from "react";
import { ProductList } from "./ProductList";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

export const CartItems = () => {
  
  
  
  const [cart ,setCart] = useState([])

  const getUser = async () => {
    const response = await fetch("http://localhost:8080/cart");
    const data = await response.json();
    setCart(data);
    console.log(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="cartItems">
      <div className="mainDiv">
        <h2>{`My Bag`}</h2>

        <div className="yaydiv">
          <LocalShippingIcon
            sx={{ color: "red", fontSize: 30 }}
            className="text-yaydiv"
          ></LocalShippingIcon>
          <div className="text-yaydiv2">
            Yay! you get Free delivery on this order.
          </div>
        </div>
        {cart.map((e,id)=>{
    return(
      <ProductList 
      cart_id={e.product_id}
      cart_image={e.productimage_url}
      cart_title={e.productname}
      cart_price={e.productprice}
      cart_canclprice={e.productcancelprice}/>
      
      )
    })}
      </div>
    </div>
  );
};
