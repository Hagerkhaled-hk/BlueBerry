import React,{useContext, useEffect, useState} from "react";
import "./Compare.css"
import {CompareContext} from "../../context/ComapreContext/ComapreContext";
import "bootstrap/dist/css/bootstrap.min.css"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination ,EffectCreative,Autoplay} from 'swiper/modules';
import { FaAnglesRight } from "react-icons/fa6";
import { TbTrash } from "react-icons/tb";
import nodata from "../../assets/images/nodata.svg"
import { Link } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import toast from "react-hot-toast"


export default function Compare()
{

const {compare,getProducts,deleteItem,showContent, setShowContent} = useContext(CompareContext);
const [active,setActive]=useState(0);
const [product,setProduct] =useState([]);
const [buttonsActive,setButtonsActive]=useState((false))

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(false);
    }, 1000);

    return  () => clearTimeout(timer); 
  }, [showContent]);

async function handleProducts()
{
    
    
    setProduct(await getProducts(active));
    
    
    
}

useEffect(()=>{

handleProducts();

},[active , compare])




return (
<>
{/*    <Toaster  
  position="top-center"
          toastOptions={{
            duration: 2000,      
            }} /> */}
<div className={`Compare ${(product.length==0 && compare.length==0)?"justify-content-center":""}`}>
   

    <div className={`left ${buttonsActive?"active":""}`} style={{visibility:`${(product.length==0&&compare.length==0) ? "hidden" : "visible"}`}}  >

<div className="open"  onClick={()=>{setButtonsActive(!buttonsActive)}}>
  <FaAnglesRight/>
</div>
 <div className="buttons">
   { 
   compare.map((item,index)=>{
    return(

<button key={index} onClick={()=>{setActive(index)}}

className={`btn ${active==index?'active':''}` }>{Object.keys(item)[0]}</button>
    )

   })
}


 </div>

    </div>


{product && 
<div className="right  "  >
 
{

 

 ( (product.length==0 && compare.length==0) )? 
  <section className={`nodata d-flex justify-content-center flex-column align-items-center   gap-4 w-100`}>
  
  <img style={{width:"20%" , height:"20%"}} src={nodata} alt=""/>
  <small style={{fontWeight:"bold" , color:"var(--main_color)", height:"fit-content" ,textAlign:"center"}}>Nothing to compare yet!   <br/>
  <Link to={"/products"} style={{color:"var(--main_color)",padding:"0px 5px " }} >  Add items </Link>to 
  start your comparison. </small>


  </section>



  : 
   
 




 <div className="table"  >

 <Swiper

 
        slidesPerView={product?.length==1?2:3}
breakpoints={{



   200: {
    slidesPerView: 1,
    on: {
      init: () => console.log("Breakpoint 200px active"),
    },
  }, 
  400: {
    slidesPerView: 2,
    on: {
      init: () => console.log("Breakpoint 200px active"),
    },
  },
  831: {
    slidesPerView: 3,
    on: {
      init: () => console.log("Breakpoint 831px active"),
    },
  },
}}
        spaceBetween={6}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
        style={{
          width: `${showContent?"500px":"100%"}`, 
          maxWidth:` ${product.length==1?"500px":"800px"}`,
          borderRadius:"5px",
          position:"relative"
        }}
      >
        <SwiperSlide style={{width:"fit-content" ,border:"none"}}> 
     <div className="heading">
    <p className="image_name " ></p>
    <p className="categ">Category</p>
    <p className="rating">Rating</p>
    <p className="stock">Stock</p>
    <p className="price">Price</p>
    <p className="discount">Discount</p>
    <p className="desc">Description</p>
  </div>
</SwiperSlide>
 

 { 
 showContent?
 
toast.success("Next category will be in few seconds... ", {
  style: {
    border: '1px solid white',
    padding: '16px',
    color: '#713200',
  },
  iconTheme: {
    primary: '#713200',
    secondary: '#FFFAEE',
  },
})

  :
    

   
 
    product.map((item, index) => (
       <SwiperSlide key={index} style={{width:`fit-content ` , border:"none"}}>
          <TbTrash className="trash" onClick={()=>{deleteItem(item?.title,item?.category)}}/>
        <div className="data ">
          <div className="image_name">

<div className="image">
            <img src={item?.img ??item?.thumbnail} alt={item?.title} />
                  </div>
          <p className="name">{item?.title}</p>
          </div>
          <p className="categ">{item?.category}</p>
          <p className="rating">{item?.rating ?? item?.reviews[0]?.rating}</p>
          <p className="stock">{item?.stock ?? item?.count}</p>
          <p  className="price">{item?.price}</p>
          <p  className="discount">20%</p>
          <p  className="desc">{item?.description?.split(" ").splice(0,25).join(" ") ?? item?.discription?.split(" ").splice(0,25).join(" ")}</p>
        </div>

         </SwiperSlide>
 

    ))
}
 </Swiper>
  
 </div>
}
</div>
}
</div>
</>
    )
}
 
