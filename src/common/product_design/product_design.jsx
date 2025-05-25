import React, { useEffect, useRef, useState,useContext } from "react";
import "./product_design.css"
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import ProductDesignList from "../product_design_list/product_design_list"
import {motion,useInView,useAnimation} from "framer-motion"
import { CartContext } from "../../context/CartContext/CartContext";
import MyLoader from "../skelton/skelton";
import { Toaster } from 'react-hot-toast';


export default function ProductDesign({Products,className})
{


const div_ref =useRef(null);
const div_animate=useAnimation();
const isInView=useInView(div_ref,{ once:true});
const [AnimateProductsId,setAnimateProductsId]=useState(new Set())
const {calcElementStock}=useContext(CartContext);



useEffect(()=>{
    
div_animate.set({ opacity: 0, y: '80px' });
setAnimateProductsId(new Set())
if(isInView  )
{
    div_animate.start({opacity:1, y:'0px'});
    
}


},[isInView,Products])
 

    return (
<div 

ref={div_ref}

className={`ProductDesign ${className?className:''}`}   >

{Products.length==0 ? 
<div   className="skelton" style={{display:"grid" , gap:"20px" , justifyContent:"center",alignItems:"center" ,
    width:"fit-content"
}}>
        <Toaster  
position="top-center"  // Optional: Position (top-right, bottom-left, etc.)
        toastOptions={{
          duration: 3000,      // Auto-close after 3 seconds
          }}
/>


  
        {
 Array.from({ length: 3}).map((_, index) => (
        <MyLoader key={index} />
      ))
    }
      </div>

:
Products.map((item,index)=>{
    
   
    
    return(< motion.div


    initial={{opacity:0, y:'80px'}}
animate={   !AnimateProductsId.has(index) &&
    div_animate
}

onViewportEnter={()=>{ 
    if(!AnimateProductsId.has(index)){
    setAnimateProductsId(prev => new Set(prev).add(index))
    
}
}
    }
     viewport={{once:true}}
 
transition={{

    duration:0.5,
 delay:(index*0.3)
 }}
    
 className="card" key={index}>



<div className="image">
    <img src={item.img?? item.thumbnail}/>
    <div className="list">
    <ProductDesignList className="list"   item={item}/>
</div>
</div>
<div className="text">
<p className="catg">( {item.category} )  <span><FaStar/><FaStar/><FaStar/><FaStar/>

<FaRegStar/>
</span>  </p>
<p className="name">{item?.title?.split(' ').splice(0,3).join(' ')}</p>

{className&&
<p className="description" >{item?.description?.split(" ").splice(0,20).join(" ") ??item.discription?.split(" ").splice(0,20).join(" ")} </p>}
<small className="quntity">{`You can add ${item?.count ?? item?.stock}`} 
    
    <small>({
  item?.title && (
      calcElementStock(item.title, (item?.count ?? item?.stock ))
 
  )
}) Left</small> </small>
<p className="price">Price:<span>${item.price}</span></p>
</div>

</ motion.div>)
    
    
    
    })

}

</div>

    )
}
 
