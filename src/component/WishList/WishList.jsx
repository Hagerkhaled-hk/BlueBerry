import React, { useContext, useEffect } from "react";
import "./WishList.css"
import { FaHeart } from "react-icons/fa";
import { WishContext } from "../../context/WishContext/WishContext";
import { SiGhostery } from "react-icons/si";
import { CartContext } from "../../context/CartContext/CartContext";
import Swal from 'sweetalert2'
import { TbTrash } from "react-icons/tb";
import { Link } from "react-router-dom";

import nodata from "../../assets/images/nodata.svg"
import toast from "react-hot-toast";
import { Toaster } from 'react-hot-toast';

export default function WishList()
{


    const {setWishActive,wishActive,wishCart,remove}=useContext(WishContext);

    const {Addtocart,FindingElementAmount,isDisabled } = useContext(CartContext);



    return (
        <>             <Toaster  
      position="top-center"  // Optional: Position (top-right, bottom-left, etc.)
              toastOptions={{
                duration: 3000,      // Auto-close after 3 seconds
                }}
                />
<div className={`WishList ${wishActive?'active' :""}`}>
   
<SiGhostery className="ghost"  onClick={()=>{setWishActive(false)}}/>

<main>
<header  >Wish List  
    <FaHeart  style={{ marginLeft:"10px"}}/>
</header>

{
 wishCart.length==0?
 <section className={`nodata d-flex justify-content-center flex-column align-items-center  gap-4 w-100 mt-5`}>
  
  <img style={{width:"20%" , height:"20%"}} src={nodata} alt=""/>
  <small style={{fontWeight:"bold" ,fontSize:"15px", color:"var(--main_color)", height:"fit-content" ,textAlign:"center"}}>  
  <Link to={"/products"} style={{color:"var(--main_color)",fontSize:"15px",padding:"0px 5px ",textDecoration:"underline" }} >  Add your fav items. </Link> </small>


  </section>

:
 
<table className="content">



    <thead>
        <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Rate</th>
        </tr>
        </thead>
                <tbody>

{
    

    wishCart.map((item,index)=>{
    return(
    <tr key={index}>


<td className="image_name">
    <div className="image">

        <img src={item?.img??item?.thumbnail} alt="" />
    </div>
    <div className="name">
        <p>{item?.title}</p>
    </div>

</td>

    <td className="price">
        <p>{item?.price}</p>
    </td>
    <td className="rate">
        <p>   {item?.rating??item?.reviews}</p>
    </td>

    <td className="addtocart">
        <button className="btn"
        
        style={{
            fontSize:"8px",
            background:"var(--main_color)",
            color:"var(--lightColor)",
            width:"fit-content"
        }}
        
        disabled={isDisabled(item?.title,(item?.count ?? item?.stock))}   onClick={()=>{   
          

toast.success(`Add ${item.title} to cart `)
            
            Addtocart(item.title,1)}}> Add to cart  </button>
    </td>
    <td className="delete">
        <button className="btn" 
        
        style={{
            color:"var(--color-text)",
            width:"fit-content"
        }}
        onClick={()=>{remove(item?.title)}}
        
        ><TbTrash className="trash"/></button>
    </td>
</tr>





    )
})
}
</tbody>

</table>
}
</main>
</div>
</>


    )
}
 
