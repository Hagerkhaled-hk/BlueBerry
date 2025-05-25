import React,{useContext} from "react";
import "./product_design_list.css"
import { IoMdHeartEmpty } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { GoGitCompare } from "react-icons/go";
import { FiShoppingBag } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext/CartContext";
import Swal from 'sweetalert2'
import {CompareContext} from "../../context/ComapreContext/ComapreContext";
import { WishContext } from "../../context/WishContext/WishContext";



export default function ProductDesignList({item})
{
    const Navigate = useNavigate();
    const {Addtocart,FindingElementAmount,isDisabled} = useContext(CartContext);
    const {addToCompare,isExistCompare}=useContext(CompareContext);
    const {addToWish,isWishExist} =useContext(WishContext);

    
    return (
<div className="ProductDesignList">


    <button  onClick={()=>{
                
               if (!isWishExist(item.title))
               {
addToWish(item)
                  Swal.fire({
  icon: "success",
  title: `Successfully add product to wish list`,
  text:item.title,
  showConfirmButton: false,
  timer: 1500});
          
               }
               else
               {
                              Swal.fire({
  icon: "info",
  title: `it's already exists in wishlist`,
  text:item.title,
  showConfirmButton: false,
  timer: 1500});
          


               }

            }
        }>
            <IoMdHeartEmpty  
                
                className="wish"/>
<p>Wish list</p>
        </button>
        <button  onClick={()=>Navigate(`/productDetails/${item?.title}`)} >
            <FaRegEye/>
            <p>More details</p>

        </button>
        <button onClick={ ()=>{
            
            
            if(!isExistCompare(item.title,item.category))
            {
               addToCompare(item?.title,item?.category) 
                               Swal.fire({
  icon: "success",
  title: `Successfully add product to compare`,
  text:item.title,
  showConfirmButton: false,
  timer: 1500});
            }

            else
            {
                           Swal.fire({
  icon: "info",
  title: `it's already exists in compare`,
  text:item.title,
  showConfirmButton: false,
  timer: 1500});
          
            }
            }} >
            <GoGitCompare/>
                        <p>Compare</p>

        </button>
        <button  className="btn " disabled={isDisabled(item?.title,(item?.count ?? item?.stock))}   onClick={()=>{  
            
            
            if(FindingElementAmount(item?.title)==0)
            {
                Swal.fire({
  icon: "success",
  title: `Successfully add product`,
  text:item.title,
  showConfirmButton: false,
  timer: 1500});
        
    
            }
            
            Addtocart(item.title,1)



        }
    
    
    }  >
            <FiShoppingBag/>
            <p>Add to cart</p>
        </button></div>

    )
}
 
