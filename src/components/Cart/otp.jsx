
import React from "react";
import { useState } from "react";
import "./otp.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


function Otp(){
    const [getotp, usesetopt]=useState({
        opt_inp:"",
    })

    const handleotp =(e)=>{
        usesetopt({ ...getotp, [e.target.name]: e.target.value})
        console.log(getotp)
    }
const navigatetothanks= useNavigate()
    const handleclick =()=>{
        let x="123456"
        console.log(getotp.opt_inp)
        if(getotp.opt_inp === x){
            console.log("navigate");
            navigatetothanks("/Cart/thanks")

        }
        else{
            alert("Invalid Otp")
        }
    }

   
    return (
        <div className="otpcont">
            <div className="mainchildcont">
<input type="text"  value={getotp.opt_inp}    name="opt_inp"  onChange={handleotp} placeholder="Enter 6 digit opt"  className="otpbox" />
<button className="otpbutton" onClick={handleclick}>ENTER</button>


</div>
        </div>
    )
}

export default Otp;