

import {Link} from "react-router-dom"
import {React} from "react";
import { useState } from "react";
import{Route,Routes,Router} from "react-router-dom";
import{Menslide} from "./homeslide/menslide";
import { Womenslide } from "./homeslide/womenslide";
import{Coverslide} from "./homeslide/movilecover";
import "./home.css"
import "./homeslide/menslide.css"

export const Home=()=>{
let [mensl,usemenslide]=useState(true)
let[women,usewomen]=useState(false)
let[asso, useasso]=useState(false)

const changemen=()=>{
    usemenslide(mensl=true);
    usewomen(women=false);
    useasso(asso =false);
}

const changwo=()=>{
    usemenslide(mensl=false);
    usewomen(women=true);
    useasso(asso =false);
}

const changas=()=>{
    usemenslide(mensl=false);
    usewomen(women=false);
    useasso(asso =true);
}
let val =""
if(mensl){
val =<Menslide/>
}
else if(women===true){
    val =<Womenslide/>
}
else if(asso ===true){
    val =<Coverslide/>
}

    return <>

   
   <div className="forgap"></div>
    <div className="homecompnavcss">
        <div  onClick={()=>changemen()} className="homecomplink">MEN</div>
        <div onClick={()=>changwo()} className="homecomplink">WOMEN</div>
        <div onClick={()=>changas()} className="homecomplink">ACCESSORIES</div>
  
       </div>

       
       <div>{val}</div>
    </>
}