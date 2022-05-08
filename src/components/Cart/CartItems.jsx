import "./CartItems.css";
import React,{useState , useEffect} from "react";
import { ProductList } from "./ProductList";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

export const CartItems = () => {
  
  
  
  const [cart ,setCart] = useState([])
  const [actualPrice,setActualPrice]=useState(0)
  const [strikedPrice,setStrikedPrice]=useState(0)
  const [count,setCount]=useState(0)

  const getUser = async () => {
    const response = await fetch("http://localhost:8080/cart");
    const data = await response.json();
    setCart(data);
    console.log("cart", data)
    var sum=0
    var s=0
    var counting=0
    data.map((e)=>{
      counting++
      s=+ (e.productcancelprice)
     console.log("s",s)
     sum+=s
    })
    setCount(count+counting)
    console.log("sum",sum)
    setStrikedPrice(strikedPrice+sum)
    console.log("striked",strikedPrice)
  };
  
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="cartItems">
      <div className="mainDiv">
        <h2>{`My Bag:- ${count} items`}</h2>

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
