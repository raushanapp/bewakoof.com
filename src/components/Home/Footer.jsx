import "./Footer.css";
import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="row1">
                <div className="col1">
                  <h2>CUSTOMER SERVICE</h2>
                  <ul>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Track Order</a>
                    </li>
                    <li>
                      <a href="#">Return Order</a>
                    </li>
                    <li>
                      <a href="#">Cancel Order</a>
                    </li>
                  </ul>
                </div>
                <div className="col1">
                  <h2>COMPANY</h2>
                  <ul>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">We're Hiring</a>
                    </li>
                    <li>
                      <a href="#">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                  </ul>
                </div>
                <div className="col1">
                  <h2>CONNECT WITH US</h2>
                  <ul>
                    <li>
                      
                    <a href="https://www.facebook.com/">
                      <img   style={{width:"20px", height:"20px"}} className="footer-img" src="https://assets.website-files.com/5fa91ebb6639f6b5e05b166f/5fb791d3c13b62f314f18c64_FB.svg" alt=""/>
                      4.7M People Like this</a>
                    </li>
                    <li><a href="https://www.instagram.com/">
                      <img className="footer-img" style={{width:"15px", height:"15px"}} src="https://assets.website-files.com/5fa91ebb6639f6b5e05b166f/5fb791d3db3f05e2947fad61_IG.svg" alt="" />
                      1M Followers</a>
                    </li>
                    {/* <i className="icon_twitter"></i> */}

                    {/* <img className="twitter_icon" src="https://mozilla.github.io/foundation-icons/svgs/twitter.svg" alt="" /> */}
                   <a href="https://twitter.com/home"><img className="footer-img" style={{width:"15px", height:"15px", margin:"0 20px 0 -60px"}} src="https://assets.website-files.com/5fa91ebb6639f6b5e05b166f/5fdb801e97944726cc2e25df_Twitter.png" alt="" />
                    </a>
                    <a href="https://in.pinterest.com/"><img className="footer-img" style={{width:"15px", height:"15px"}} src="data:image/png;base64,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" alt="" /></a>
                    <a href=""><img className="footer-img" style={{width:"16px", height:"17px", margin:"0 20px 0 0"}} src="https://assets.website-files.com/5fa91ebb6639f6b5e05b166f/5fc8c229aa17df199e197c5d_Linkedin.png" alt="" /></a>
                    <a href="https://www.apple.com/"><img className="footer-img" style={{width:"16px", height:"17px", margin:"0 20px 0 0"}} src="data:image/png;base64,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" alt="" /></a>
                  </ul>
                </div>
                <div className="col1">
                  <h2>KEEP UP TO DATE</h2>
                  <input
                    className="email"
                    placeholder="Enter Email Id"
                    type="Email"
                  />
                  <button className="subscribe">SUBSCRIBE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row2">
          <div className="col2">
            <ul>
              <li>
                <a href="#">15 Days return policy*</a>
                <li>
                  <a href="">Cash on delivery*</a>
                </li>
              </li>
            </ul>
          </div>
          <div className="abc">
            <ul>
              <li>DOWNLOAD THE APP</li>
            </ul>
          </div>

          <div className="abcd">
            <ul>
              <li>100% SECURE PAYMENT</li>
            </ul>
            <img
               style={{margin:"0 0 0 40px"}} src="https://images.bewakoof.com/web/secure-payments-image.png"
              alt=""
            />
          
          </div>
          <div className="empty1"></div>
        </div>
        <hr />
        <div className="hrbelow">
          <div className="hrbelow1">
            <p className="footer-p">MEN'S CLOTHING</p>
            <ul>
              <li>
                <a href="#">Top Wear</a>
              </li>
              <li>
                <a href="#">Top Wear</a>
              </li>
              <li>
                <a href="#">Men's New Arrivals</a>
              </li>
              <li>
                <a href="#">Men's Half Sleeve T-Shirts</a>
              </li>
              <li>
                <a href="#">Men's Vests</a>
              </li>
              <li>
                <a href="#">Men's Printed T-shirts</a>
              </li>
              <li>
                <a href="#">Men's Plain T-shirts</a>
              </li>
              <li>
                <a href="#">Men's Polo T-Shirts</a>
              </li>
              <li>
                <a href="#">Men's Kurtas</a>
              </li>
              <li>
                <a href="#">Men's Combo T-Shirts</a>
              </li>
              <li>
                <a href="#">Men's Shirts</a>
              </li>
              <li>
                <a href="#">Men's Nightwear</a>
              </li>
              <li>
                <a href="#">Men's Plus Size Store</a>
              </li>
              <li>
                <a href="#">Bottom Wear</a>
              </li>
              <li>
                <a href="#">Men's Pajamas</a>
              </li>
              <li>
                <a href="#">Men's Boxer Shorts</a>
              </li>
              <li>
                <a href="#">Men's Shorts</a>
              </li>
              <li>
                <a href="#">Men's Track Pants</a>
              </li>
              <li>
                <a href="#">Men's Pants</a>
              </li>
              <li>
                <a href="#">Featured</a>
              </li>
              <li>
                <a href="#">Men's Flip Flops Men's Sliders</a>
              </li>
              <li>
                <a href="#">Marvel T-Shirts</a>
              </li>
              <li>
                <a href="#">Disney T-Shirts</a>
              </li>
              <li>
                <a href="#">Marvel T-Shirts</a>
              </li>
              <li>
                <a href="#">Avengers T-Shirts</a>
              </li>
              <li>
                <a href="#">Star Wars T-Shirts</a>
              </li>
              <li>
                <a href="#">Batman T-Shirts</a>
              </li>
              <li>
                <a href="#">Superman T-Shirts</a>
              </li>
              <li>
                <a href="#">Joker T-Shirts</a>
              </li>
            </ul>
          </div>
          <div className="hrbelow2">
            <p className="footer-p">WOMEN'S CLOTHING</p>
            <ul>
              <li>
                <a href="#">Women's Top Wear</a>
              </li>
              <li>
                <a href="#">Women's New Arrivals</a>
              </li>
              <li>
                <a href="#">Women's T-Shirts</a>
              </li>
              <li>
                <a href="#">Women's Hoodies & Sweatshirts</a>
              </li>
              <li>
                <a href="#">Women's Dresses</a>
              </li>
              <li>
                <a href="#">Women's 3/4 Sleeve T-Shirts</a>
              </li>
              <li>
                <a href="#">Women's Kurtis</a>
              </li>
              <li>
                <a href="#">Women's Combo T-Shirts</a>
              </li>
              <li>
                <a href="#">Women's Nightwear</a>
              </li>
              <li>
                <a href="#">Women's Plus Size Store</a>
              </li>
              <li>
                <a href="#">Women's Bottom Wear</a>
              </li>
              <li>
                <a href="#">Women's Pajamas</a>
              </li>
              <li>
                <a href="#">Women's Boxer Shorts</a>
              </li>
              <li>
                <a href="#">Women's Jeans</a>
              </li>
              <li>
                <a href="#">Women's Joggers</a>
              </li>
              <li>
                <a href="#">Women's Shorts</a>
              </li>
              <li>
                <a href="#">BAGS</a>
              </li>
              <li>
                <a href="#">Laptop Bags</a>
              </li>
              <li>
                <a href="#">Small Backpacks</a>
              </li>
              <li>
                <a href="#">Featured</a>
              </li>
              <li>
                <a href="#">Women's Slides</a>
              </li>
              <li>
                <a href="#">Women's Flip Flops</a>
              </li>
            </ul>
          </div>
          <div className="hrbelow3">
            <p className="footer-p">CUSTOMER SERVICE</p>
            <ul>
              <li>
                <a href="#">Brands</a>
              </li>
              <li>
                <a href="#">Apple</a>
              </li>
              <li>
                <a href="#">Realme</a>
              </li>
              <li>
                <a href="#">Samsung</a>
              </li>
              <li>
                <a href="#">Xiaomi</a>
              </li>
              <li>
                <a href="#">Oneplus</a>
              </li>
              <li>
                <a href="#">Vivo</a>
              </li>
              <li>
                <a href="#">Oppo</a>
              </li>
            </ul>
          </div>
          <div className="rightText">

          </div>
        </div>
      </footer>
    </>
  );
};
