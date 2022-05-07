import React from "react"
import {Men} from "../Men"
import { Women } from '../Women';
import { MobileCover } from '../MobileCover';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./menslide.css"

export const Menslide=()=>{
    const divnav=useNavigate()
    const hendleclick =()=>{

divnav("./Home/Men")
    }
    return <>
 
    <div onClick={hendleclick} className="slide1">
       < div className="slide1div" >
         <img src="https://images.bewakoof.com/uploads/grid/app/1x1-buy2fr599-m-1651329455.jpg" alt="Non" />
        </div>
        <div className="slide1div" >
            <img src="https://images.bewakoof.com/uploads/grid/app/1x1-sweet-summer-treats-m-1651578693.jpg" alt="non" />

        </div>
        <div className="slide1div" >
            <img src="https://images.bewakoof.com/uploads/grid/app/Static-Banner-1-1-Printed-Tshirts-Men-1651233491.jpg" alt="" />

        </div>
        <div className="slide1div" >
            <img src="https://images.bewakoof.com/uploads/grid/app/Static-Banner-1-1-Summer-Collection-Men-1651642981.gif" alt="" />

        </div>
        
    </div>

    <div  onClick={hendleclick} className="slide2">
        < img src="https://images.bewakoof.com/uploads/grid/app/desktop-strip-2-1651232973.jpg" alt="err" />

    </div>

    <div  onClick={hendleclick} className="slide3">
        <div className="smallgridimage">
            <img src="https://images.bewakoof.com/uploads/grid/app/WhatsApp-Video-2022-01-29-at-14-06-03-1643446784.gif" alt="" />
            <h4>Design Of The Day</h4>
        </div>

        <div className="smallgridimage">
            <img src="https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-best-seller-1637307127.jpg" alt="" />
            <h4>Bestsellers</h4>
        </div>
        <div className="smallgridimage">
            <img src="https://images.bewakoof.com/uploads/grid/app/CUSTOMISE-thumbnail-1644818150.jpg" alt="" />
            <h4>Costomization</h4>
        </div>
        <div className="smallgridimage">

            <img src="https://images.bewakoof.com/uploads/grid/app/vote-for-design-1641715844.jpg" alt="" />
            <h4>Vote for Designs</h4>
        </div>
        <div className="smallgridimage">
            <img src="https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-plus-size-1637307128.jpg" alt="" />
                <h4>Plur Size</h4>
        </div>
        <div className="smallgridimage">
            <img src="https://images.bewakoof.com/uploads/grid/app/PersonalCare-Thumbnail-1647932750.jpg" alt="" />
            <h4>Official Store</h4>
        </div>
        <div className="smallgridimage">
            <img src="https://images.bewakoof.com/uploads/grid/app/coke-x-bwkf-thumbnail--1--1645602489.jpg" alt="" />
            <h4>Coca Cola</h4>
        </div>
        <div className="smallgridimage">
            <img src="https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-new-arrival-1637307130.jpg" alt="" />
            <h4>New Arrivals</h4>
        </div>
        <div className="smallgridimage">
            <img src="https://images.bewakoof.com/uploads/grid/app/PersonalCare-Thumbnail-1647932750.jpg" alt="" />
            <h4>Personal Care</h4>
        </div>

       
    </div>

    <div  onClick={hendleclick} className="slide4">
        <div className="slide4d1">
            EXCLUSIVE FOR YOU
        </div>
        <div className="slide4d2">
            <img src="https://images.bewakoof.com/uploads/grid/app/desktop---strip-1440---x-150---tribe-1634552003.png" alt="" /> </div>
    </div>

    <div  onClick={hendleclick} className="slide5">
        <div className="slide5div"><img src="https://images.bewakoof.com/uploads/grid/app/Winterwear-Men-3x3-homepage-grid-new-1645686265.jpg" alt="" />
        
       </div>
        <div className="slide5div"><img src="https://images.bewakoof.com/uploads/grid/app/3x3-homepage-grid-new-Printed-Shirts-1651234954.jpg" alt="" />

        </div>
        <div className="slide5div"><img src="https://images.bewakoof.com/uploads/grid/app/3x3-homepage-grid-Men-1646310507.jpg" alt="" />

       </div>
        <div className="slide5div"><img src="https://images.bewakoof.com/uploads/grid/app/Joggers-men-1644388220.jpg" alt="" />

        </div>
        <div className="slide5div"><img src="https://images.bewakoof.com/uploads/grid/app/Category-Grid-Pyjamas-Men-1645689559.jpg" alt="" />
        </div>
        <div className="slide5div"><img src="https://images.bewakoof.com/uploads/grid/app/Category-Grid-Vests-1648548691.jpg" alt="" />

        </div>
        <div className="slide5div"><img src="https://images.bewakoof.com/uploads/grid/app/shirts-men-1644388226.jpg" alt="" />

        </div>
        <div className="slide5div"><img src="https://images.bewakoof.com/uploads/grid/app/new-3x3-homepage-grid-0000s-0008-Category-Grid-Mobile-Covers-Women-1645689559.jpg" alt="" />

        </div>
        <div className="slide5div"><img src="https://images.bewakoof.com/uploads/grid/app/Kurtas-men-1644387975.jpg" alt="" />

        </div>
        <div className="slide5div"><img src="https://images.bewakoof.com/uploads/grid/app/3x3-homepage-grid-new-shorts-men-1644990069.jpg" alt="" />

        </div>
        <div className="slide5div"><img src="https://images.bewakoof.com/uploads/grid/app/category-grid-244x330-casual-shoes-1650965428.jpg" alt="" />

       </div>
        <div className="slide5div"><img src="https://images.bewakoof.com/uploads/grid/app/new-3x3-homepage-grid-0000s-0017-Backpacks-1644388153.jpg" alt="" />
       </div>

     
       
    </div>

    <div  onClick={hendleclick} className="slide6">
        <div className="slide6div"><img src="https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-buy2-get1-1651235310.jpg" alt="" /></div>

        <div className="slide6div"><img src="https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-play-1651235311.jpg" alt="" /></div>
    </div>

    <div className="slide7">
        <div className="slide7div"><img src="https://images.bewakoof.com/uploads/grid/app/mid-banner-regional-men-1651164727.jpg" alt="" /></div>
        <div className="slide7divt"><img src="https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-Boxers-Men-AOP-boxers-1651734120.jpg" alt="" /></div>
    </div>

    <div  onClick={hendleclick} className="slide8" >
        <div className="slide8div"><img src="https://images.bewakoof.com/t320/paradise-half-sleeve-t-shirt-495687-1651502605-1.jpg" alt="" />

        <h4>299₹</h4></div>
        <div className="slide8div"><img src="https://images.bewakoof.com/t320/the-force-half-sleeve-t-shirt-495859-1651647807-1.jpg" alt="" />

        <h4>399₹</h4></div>
        <div className="slide8div"><img src="https://images.bewakoof.com/t320/hell-no-monday-half-sleeve-t-shirt-navy-blue-343973-1632151924-5.jpg" alt="" />

        <h4>399₹</h4></div>
        <div className="slide8div"><img src="https://images.bewakoof.com/t320/hogwarts-gshr-half-sleeve-t-shirt-495682-1651472745-1.jpg" alt="" />

        <h4>299₹</h4></div>
        <div className="slide8div"><img src="https://images.bewakoof.com/t320/hogwarts-gshr-half-sleeve-t-shirt-495689-1651472720-1.jpg" alt="" />

        <h4>299₹</h4></div>
        
    </div>

    <div  onClick={hendleclick} className="slide9">
        <div className="slide9div"><img src="https://images.bewakoof.com/uploads/grid/app/Static-Banner-1-1-New-Printed-Tshirts-Men-1651638288.jpg" alt="" /></div>
        <div className="slide9div"><img src="https://images.bewakoof.com/uploads/grid/app/DOTD-Homepage-Men-new-1651479092.jpg" alt="" /></div>
        <div className="slide9div"><img src="https://images.bewakoof.com/uploads/grid/app/1x1Banner-static-OfficialMerch-characters2-1651235308.jpg" alt="" /></div>

    </div>

    <div  onClick={hendleclick} className="slide10">
        <div>THE STOOPID COLLECTION</div>
        <div className="slide10imgdiv">
            <div className="sl10im"><img src="https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-IPL-Men-IPL--1--1651325711.jpg" alt="" /></div>
            <div className="sl10im"><img src="https://images.bewakoof.com/uploads/grid/app/Star-Wars----Men-mid-banner--1651661614.gif" alt="" /></div>
        </div>
    </div>

    <div  onClick={hendleclick} className="slide11">
        <div className="slide11div"><img src="https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-men-solid-joggers-1651549356.jpg" alt="" /></div>
        <div className="slide11divt"><img src="https://images.bewakoof.com/uploads/grid/app/Harry-Potter-Men-mid-banner--1651490977.jpg" alt="" /></div>
    </div>


    <div className="slide12">
        <div className="slide12d1">
            Customize Your T-shirts 
        </div>
        <div className="slide12d2">
            <img src="https://images.bewakoof.com/uploads/grid/app/Byou-men-desk-1651215919.jpg" alt="" /> </div>
    </div>
    
    <div className="slide13">
        <img src="https://images.bewakoof.com/uploads/grid/app/design-survey-desktop-ticker-banner-1646808890.gif" alt="" />
    </div>

    </>
}