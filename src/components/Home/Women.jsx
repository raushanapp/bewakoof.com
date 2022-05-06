import React, { useEffect, useState } from "react";
import SimpleAccordion from "./SimpleAccordion";
import "./Women.css"
import { Product } from "./Product"
export const Women=()=>{
    
    const [womens ,setWomens] = useState([])

    let getData = async()=>{
        let response = await fetch("https://bewakoof-projects.herokuapp.com/women")
        let data = await response.json();
        setWomens(data.women)
    }
     
    useEffect(()=>{
        getData();
    })

    return (
        <div>
        <h1 className="Womenshead">Women Clothing</h1>
        <div className="Womensmain">
        <div className="Womensright">
        <SimpleAccordion/>
        </div>
        <div className="Womensleft">
        
        {womens.map((el,id)=>{
            return(
                <Product key={id} productimage_url={el.image}
                productname={el.name}
                productprice={el.price}
                productcancelprice={el.canceledprice}
                producttribe={el.tribe}/>
            )
        })}
        

        </div>
        </div>
        </div>
    )
    
}
