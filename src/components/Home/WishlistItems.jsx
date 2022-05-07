import React from "react"
import "./Wishlist.css";
 export const WishlistItems = ({
    Wish_id,
    Wish_image,
    Wish_title,
    Wish_price,
    Wish_canclprice,
    Wish_tribemember,
 })=>{
return (
        <div>
        <div className="whislistbox">
          <div className="wishlistdiv1">
            
            <div style={{ display: "flex" }}>
              <img
                className="wishlistImage"
                src={Wish_image}
                alt=""
              />

              <button className="delete_btn">
                <img
                  className="deleteImage"
                  src="https://www.pngfind.com/pngs/m/60-609333_x-cross-png-close-icon-svg-transparent-png.png"
                  alt=""
                />
              </button>
            </div>
            <h3 className="whislistTitle">
             {Wish_title}
            </h3>
            <div className="allPrice">
              <p className="wishlistprice">{Wish_price}</p>
              <p className="wishlistcutoffPrice">{Wish_canclprice}</p>
              <p className="wishlistdiscount">60% OFF</p>
            </div>
            <div className="tribe">
              <p className="tribeMemberPrice">{Wish_tribemember}</p>
            </div>
            <button className="wishlistButton">MOVE TO BAG</button>
          </div>
        </div>
        </div>
    )
}