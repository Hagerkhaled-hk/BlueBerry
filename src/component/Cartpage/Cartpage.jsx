import React, { useState ,useContext, useEffect} from "react";
import "./Cartpage.css"
import axios from "axios";
import DynamicIndex from "../../common/DynamicIndex/DynamicIndex";
import "bootstrap/dist/css/bootstrap.min.css"
import { motion,useAnimation,AnimatePresence } from "framer-motion"
import { CartContext } from "../../context/CartContext/CartContext";
import { ProductsContext } from "../../context/PoductsContext/PoductsContext";
import { TbTrash } from "react-icons/tb";import { Link } from "react-router-dom";
import empty_cart from "../../assets/images/empty_cart.png"
import Cartcarbon from "../../common/Cartcarbon/Cartcarbon";
export default function Cartpage()
{
   

    return (
<div className="Cartpage">

   <DynamicIndex tilte={'Cart'} page={['Cart']}/> 
   <Cartcarbon/>



</div>

    )
}
 
