import React, { useEffect, useRef, useState } from 'react';
import img2 from "../../assets/images/img-2.jpg"
import"./P2-home.css"
import svg1 from "../../assets/images/svg/1.svg";
import svg2 from "../../assets/images/svg/2.svg";
import svg3 from "../../assets/images/svg/3.svg";
import svg4 from "../../assets/images/svg/4.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import {  motion , useInView,useAnimation } from "framer-motion";


export default function ExploreCateg()
{

const slideRef = useRef(null);
const Isinview = useInView(slideRef , {once :true});
const animateSlide = useAnimation()
const Categories=[
    {
    CatgName:"Fruits",
    image:svg2
},
    {
    CatgName:"Vegetables",
    image:svg1
},
{
    CatgName:"Cold Drinks",
    image:svg3
},
{
    CatgName:"Bakery",
    image:svg4
},
{
    CatgName:"Fruits",
    image:svg2
},
    {
    CatgName:"Vegetables",
    image:svg1
},
{
    CatgName:"Cold Drinks",
    image:svg3
},
{
    CatgName:"Bakery",
    image:svg4
}
]


useEffect(()=>{

    if(Isinview)
    {

        animateSlide.start("visible")
    }
},[Isinview])


    return (
<div className="P2-home" ref={slideRef}>
    <div className="container">

<div className=" exploreImage">
    <img src={img2}/>
</div>
<div className="text">
    <h2>Explore Categories</h2>
</div>

<Swiper 
 slidesPerView={4}
 spaceBetween={20}
 autoplay={true}
  modules={[Autoplay]}

   breakpoints= { {
200:{
    slidesPerView: 2,
spaceBetween:20

},
    420:{
              slidesPerView: 3,
               spaceBetween:20


    }
,

      557:{
slidesPerView: 2,
spaceBetween:15
     } 
,
    1020: {
      slidesPerView: 4,
   }


   

}} 


className="slide mySwiper " >

{Categories.map((item,index)=>{
    return(

<SwiperSlide 
key={index}
>
<motion.div  
variants={
    {
    hidden:{rotateY :180},
    visible:{rotateY:0},

}}
className={`catgCard  ${item.CatgName} `  }
initial='hidden'
animate={animateSlide}
transition={{duration:0.5,delay:1 }}

>



<section className="image"><img src={item.image} /> </section>
<section className="text">
    <p>{item.CatgName}</p>
    <small>300 items</small>
</section>


</motion.div>
</SwiperSlide>


);
})
}
</Swiper>
</div>



</div>

    )
}
 
