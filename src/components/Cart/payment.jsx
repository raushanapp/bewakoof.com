import "./payment.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Payment(){
    const[getcard,setcard]=useState({
        card_no:"",
        card_name:"",
        card_expiry:"",
        card_CVV:"",
    })
    const navigarttootp =useNavigate();
    const Handleclick=()=>{
        console.log(getcard)
         
        if(getcard.card_no && getcard.card_name && getcard.card_expiry && getcard.card_CVV ){
            //navigate
            navigarttootp("/Cart/otp")

            console.log("navigare to next")
        }
        else{
            alert("Input box should not empty")
        }
    }

    const handleInput = (e) => {
       

        setcard({ ...getcard, [e.target.name]: e.target.value });
        // console.log(getcard);
      };
    return(
        <div className="paymentcont">


      
         
{/*     
         <div className="middle_box">
            <span> <strong> Payment </strong> </span> 
            <strong><span className="pay">  pay </span></strong> 
        </div> */}


        <div className="lower_box" >
            <div className="lower_box_left">
                <div className="active">&nbsp; DEBIT/CREDIT CARD </div>
                <hr />
                <div className="inactive"> WALLET </div>
                <hr />
                <div className="inactive"> UPI </div>
                <hr />
                <div className="inactive"> NET BANKING </div>
                <hr />
                <div className="inactive"> CASH ON DELIVERY </div>
                <p>Use online payment for safety and to avail <br /> attractive cashback offers.</p>
                <hr />
           </div>


            <div>
                <div className="lower_right_box">
                <div>
                   
                        <img width={"20px"} src="https://images.bewakoof.com/web/Add-card-icon-1600332484.png" alt="" />
                 
                    <span   style= {{marginLeft:"13px", fontSize:"12px", textAlign:"center", position:"relative"}}>Add New Card</span>
                </div>

                <div>
                    <div className="card_num">
                        <input type="number " value={getcard.card_no} autocomplete="new-password" name="card_no" onChange={handleInput} placeholder="XXXX XXXX XXXX XXXX"/>
                         <img style={{width: "24px", height: "17px"}} src="https://images.bewakoof.com/web/credit-card-1600689323.png" alt=""/>
                    </div>
                    
                    <div className="card_name">
                        <input type="text" value={getcard.card_name} name="card_name" onChange={handleInput} placeholder="Name On Card"/>
                    </div>

                    <div className="card_expiry_cvv">
                        <input type="date" value={getcard.card_expiry} name="card_expiry" onChange={handleInput} placeholder="Expiry(MM/YY)"/>
                        <input style={{marginLeft: "10px"}}type="password" value={getcard.card_CVV} onChange={handleInput} name="card_CVV" placeholder="CVV"/>
                    </div>

                    <div className="card_check_box">
                        <input type="checkbox" name="card_check"/>
                        <label for="card_check"> <strong> Securely save this card for faster payments. </strong> </label>
                    </div>
                </div>

                <div style={{fontSize: "10px", textAlign: "justify", opacity: "0.7", marginTop: "8px", marginBottom: "25px",letterSpacing: "0.7px"}}>
                    This transaction you make is totally secure. We don't save <br/> your CVV number.
                </div>

                <div>
                     < button className="payment" onClick={Handleclick} >PAY NOW</button>
                </div>


            </div>
        
        </div>

        </div>
    


        </div>

    
    )
}




export default Payment;