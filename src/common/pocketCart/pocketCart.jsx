import React, { useContext, useEffect,useState } from "react";
import "./PocketCart.css"
import img from "../../assets/images/img-3.jpg"
import { CartContext } from "../../context/CartContext/CartContext";
import { ProductsContext } from "../../context/PoductsContext/PoductsContext";
import { useNavigate } from "react-router-dom";
import { SiGhostery } from "react-icons/si";
import Cartcarbon from "../Cartcarbon/Cartcarbon";



export default function PocketCart({cartActive,setCartActive})
{
  




    
    return (
<div className={`PocketCart  ${cartActive?'active':''}`}>

    
<SiGhostery className="ghost"  onClick={()=>{setCartActive(false)}}/>

    <div className="main">
        <Cartcarbon/>
    </div>





</div>

    )
}
 
