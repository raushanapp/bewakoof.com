import React ,{useState} from "react";
import "./Product.css";
import { AiOutlineHeart } from "react-icons/ai";

export const Product = ({
  productimage_url,
  productname,
  productprice,
  productcancelprice,
  producttribe,
}) => {
  
  return (
    <div className="ProductMain ">
      <div className="ProducImage">
        <img src={productimage_url} alt="img"/>
        <span className="productwishicon">
          <AiOutlineHeart />
        </span>
      </div>
      <div className="ProductDescription">
        <div className="Producttitle">{productname} </div>
        <div className="ProductPrice">
          {productprice}{" "}
          <span className="cancelprice">{productcancelprice}</span>
        </div>
        <div className="pricetribe">
          {producttribe}
          <div><span className="ProductCartButton">
          <button>Add to Cart</button>
         </span></div>
        </div>
      </div>
    </div>
  );
};
