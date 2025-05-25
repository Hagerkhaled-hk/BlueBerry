import React, { useEffect, useContext, useState } from "react";
import "./ProductDetails.css"
import DynamicIndex from "../DynamicIndex/DynamicIndex";
import {useParams} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios";
import {allProducts} from "../../common/ProductJson"
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaHandPointRight } from "react-icons/fa";
import { CartContext } from "../../context/CartContext/CartContext";

import { Toaster } from 'react-hot-toast';
import toast from "react-hot-toast"
import {CompareContext} from "../../context/ComapreContext/ComapreContext";
import { WishContext } from "../../context/WishContext/WishContext";




export default function ProductDetails()
{
const {id} =useParams();
const [amount, setAmount] = useState(1);

const [product,setProduct]=useState({});
const [altImage ,setAltImage]=useState(0);
    const {plusMinus,Addtocart,isDisabled,IsExceed,FindingElementAmount} = useContext(CartContext);
    const {addToCompare,isExistCompare}=useContext(CompareContext);
        const {addToWish,isWishExist} =useContext(WishContext);
    



const handleProduct = async()=>
{

 const Filterd=allProducts.filter((item)=> item.title == id)
 console.log(Filterd);
     console.log(id);


     console.log(`https://dummyjson.com/products/search?q=${id}`);
 if(Filterd.length==0)
 {
    

    try{
const {data} = await axios.get(`https://dummyjson.com/products/search?q=${id}`)
    setProduct(data.products)
    console.log(data);
    
    

    

}
catch(error)
{
          console.error("Error fetching products:", error);

}
 }
else
{
    setProduct(Filterd);
}








}


const handleZoom =(e)=>{

    const offsetX = e.nativeEvent.offsetX;
  const offsetY = e.nativeEvent.offsetY;
  
  e.target.style.transformOrigin = `${offsetX}px ${offsetY}px`;




 }


useEffect(()=>{
handleProduct();


},[id])

    return (

<div className="ProductDetails">
{/*     <Toaster  
position="top-center"  // Optional: Position (top-right, bottom-left, etc.)
        toastOptions={{
          duration: 3000,      // Auto-close after 3 seconds
          }}
/> */}
<DynamicIndex tilte={"Shop Page"} page={["Shop Page","Category",id]}/>

<div className="container-fluid Container   ">
<div className="card mb-3">
  <div className="row g-5">
    <div className="col-md-6  image-col ">
        <div className="Images">
        <div className="mainImage">
       <img src={product[0]?.images[altImage]??product[0]?.img??product[0]?.thumbinal} 
       
       onMouseMove={(e)=>handleZoom(e)}
       className="img-fluid rounded-start" alt="..."/></div>
       <div className="altImages">
        {
            product[0]?.images.map((item,index)=>{
                return (
                    <div key={index} onClick={()=>setAltImage(index)} >
 <img src={item} alt=""/>
 </div>
                )
            })
        }
       </div>
     </div>
     </div>
    <div className="col-md-6 text-col " style={{ padding:"0px "}}>
        <div className="text">
        <div className="catg">
        <h5>( {product[0]?.category} )</h5></div>
      <div className="card-body">
        <div>
        <h5 className="card-title">{product[0]?.title}</h5>
        <p className="card-text rating">  
            
             <span><FaStar/><FaStar/><FaStar/><FaStar/>
            
            <FaRegStar/>
            </span>
            <span style={{opacity:"0.5"}}>|</span>
            
            {product[0]?.rating??product[0]?.reviews[0].rating} Rating</p>
            </div>
        <p className="card-text description">{product[0]?.description??product[0]?.discription}</p>
        <p className="card-text price" >Price: <span>${product[0]?.price}</span> 
        </p>

        <div className="buttons">
            <div className="top">
            <button className="Compare   btn btn-warning" 
            onClick={()=>{
                
                
                   if(!isExistCompare(product[0]?.title,product[0]?.category))
                            {
      
                addToCompare(product[0]?.title,product[0]?.category)
                
                toast.success(`Successfully Added ${product[0]?.title} to compare`)

                            }
                
                            else
                            {
                          toast.error("It's already exists in compare")

                          
                            
          }}
            
        }>Compare</button>
            <button  
            
            onClick={()=>{
                
               if (!isWishExist(product[0]?.title))
               {
addToWish(product[0])
toast.success(`Successfully Added ${product[0]?.title} to wishlist`)
               }
               else
               {
                       toast.error("It's already exists in wishlist")


               }

            } }
            className="Wish List btn btn-danger">Wish list</button>
            </div>
                            <div className="btn d-flex justify-content-center align-items-center gap-2" >

            <div className="in-between ">
                <button   disabled={amount==(product[0]?.count ?? product[0]?.stock )}  onClick={()=>plusMinus(1,setAmount)} className="plus bg btn "  >+</button>
                <p>{amount}</p>
                <button disabled={amount==1}  onClick={()=>plusMinus(0,setAmount)} className="minus btn ">-</button>
           
            </div>
         <small style={{fontSize:"11px", color:"var(--color-text)"}}>
          ({(product[0]?.count ?? product[0]?.stock )-FindingElementAmount(product[0]?.title)}) left
         </small>
</div>

            <div className="bottom">

<button className="btn "   onClick={()=>{ 
        
   if(  IsExceed(product[0]?.title,(product[0]?.count ?? product[0]?.stock),amount))
   {
       toast.error("You have reached the max order")

   }
   else if(isDisabled(product[0]?.title,(product[0]?.count ?? product[0]?.stock)))
   {
           toast.error("You have reached the max order")

   }
    
else
{
     (Addtocart(product[0]?.title,amount) , toast.success(`Successfully Added ${amount} of ${product[0]?.title}`))

}    

} 
    
    
    }>Add to cart
</button>
            </div>
        </div>

        <Link  to={"/cart"} style={{textDecorationLine:"none"}}>
        <FaHandPointRight/>
        <span style={{marginLeft:"10px"}}>
        Go to cart page</span></Link>



      </div>
      </div>


    </div>
  </div>
</div>
</div>





</div>


    )
}
 
