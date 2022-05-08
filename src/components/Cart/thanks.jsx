import "./thanks.css"
import React from "react";
import { useNavigate } from "react-router-dom";






function Thanks(){

   const clickho =useNavigate();
   const handlechangeclick=()=>{
       clickho("/")
   }
    return(
        <>
    <div className="forupperspace"></div>
        <div className="thankscont">
            <h1>Thanks you for shoping from our website</h1>

            <button onClick={handlechangeclick} className="tahnksbutton">Home</button>
        </div>
        </>
    )
}

export default Thanks;