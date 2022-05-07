import React from "react";
import "./Wishlist.css";
export const Wishlist = () => {
  return (
    <>
      <div className="whislistContainer">
        <h2 className="wishlisth2">Wishlist</h2>
        <div className="whislistbox">
          <div className="wishlistdiv1">
            
            <div style={{ display: "flex" }}>
              <img
                className="wishlistImage"
                src="https://images.bewakoof.com/t320/1000-jutsu-475599-1647932997-1.jpg"
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
            <p className="whislistTitle">
              Men's Grey 1000 Jutsu Hoodie T-shirt
            </p>
            <div className="allPrice">
              <p className="wishlistprice">₹ 309</p>
              <p className="wishlistcutoffPrice">₹ 1099</p>
              <p className="wishlistdiscount">60% OFF</p>
            </div>
            <div className="tribe">
              <p className="tribeMemberPrice">₹ 309</p>
              <p className="tribeMemberText">For TriBe Members</p>
            </div>
            <button className="wishlistButton">MOVE TO BAG</button>
          </div>

          <div className="wishlistdiv2">
          <div style={{ display: "flex" }}>
            <img
              className="wishlistImage"
              src="https://images.bewakoof.com/t320/coca-cola-wave-461549-1645165548-1.jpg"
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
            <p className="whislistTitle">
              Coca Cola Wave Doctor Sleeve T-shirt
            </p>
            <div className="allPrice">
              <p className="wishlistprice">₹ 329</p>
              <p className="wishlistcutoffPrice">₹ 63% OFF</p>
              <p className="wishlistdiscount">63% OFF</p>
            </div>
            <div className="tribe">
              <p className="tribeMemberPrice">₹ 309</p>
              <p className="tribeMemberText">For TriBe Members</p>
            </div>
            <button className="wishlistButton">MOVE TO BAG</button>
          </div>
          <div className="wishlistdiv3">
          <div style={{ display: "flex" }}>
            <img
              className="wishlistImage"
              src="https://images.bewakoof.com/t320/3-spiders-480289-1648150837-1.jpg"
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
            <p className="whislistTitle">
              Men's Grey 1000 Jutsu Hoodie T-shirt
            </p>
            <div className="allPrice">
              <p className="wishlistprice">₹ 275</p>
              <p className="wishlistcutoffPrice">₹ 999</p>
              <p className="wishlistdiscount">72% OFF</p>
            </div>
            <div className="tribe">
              <p className="tribeMemberPrice">₹ 309</p>
              <p className="tribeMemberText">For TriBe Members</p>
            </div>
            <button className="wishlistButton">MOVE TO BAG</button>
          </div>
          <div className="wishlistdiv4">
          <div style={{ display: "flex" }}>
            <img
              className="wishlistImage"
              src="https://images.bewakoof.com/t320/1000-jutsu-475599-1647932997-1.jpg"
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
            <p className="whislistTitle">
              Men's Grey 1000 Jutsu Hoodie T-shirt
            </p>
            <div className="allPrice">
              <p className="wishlistprice">₹309</p>
              <p className="wishlistcutoffPrice">₹ 1099</p>
              <p className="wishlistdiscount">60% OFF</p>
            </div>
            <div className="tribe">
              <p className="tribeMemberPrice">₹ 309</p>
              <p className="tribeMemberText">For TriBe Members</p>
            </div>
            <button className="wishlistButton">MOVE TO BAG</button>
         
          </div>
        </div>
      </div>
    </>
  );
};










// let data =[{
// img:"https://images.bewakoof.com/t320/1000-jutsu-475599-1647932997-1.jpg",
// title:"Men's Grey 1000 Jutsu Hoodie T-shirt",
// price:"₹429",
// wishlistcutoffPrice:"₹ 1099",
// discount:"60% OFF",
// priceMember:"₹399"
// },
// {
//     img:"https://images.bewakoof.com/t320/coca-cola-wave-461549-1645165548-1.jpg",
// title:"Coca Cola Wave Doctor Sleeve T-shirt",
// price:"₹ 329",
// cutoffPrice:" ₹ 899",
// discount:"63% OFF",
// priceMember:"₹309"
// },
// {
//     img:"https://images.bewakoof.com/t320/3-spiders-480289-1648150837-1.jpg",
// title:"Coca Cola Wave Doctor Sleeve T-shirt",
// price:"₹ 275",
// cutoffPrice:"₹ 999",
// discount:"72% OFF",
// priceMember:"₹259"
// }
// ]
