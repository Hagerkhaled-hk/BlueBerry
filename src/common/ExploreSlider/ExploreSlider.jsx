import React from "react";
import "./ExploreSlider.css"
import svg1 from "../../assets/images/svg/1.svg";
import svg2 from "../../assets/images/svg/2.svg";
import svg3 from "../../assets/images/svg/3.svg";
import svg4 from "../../assets/images/svg/4.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import {  motion , useInView,useAnimation } from "framer-motion";


export default function ExploreSlider()
{
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
    return (
<div className="ExploreSlider">
<Swiper 
 slidesPerView={6}
 spaceBetween={20}
 autoplay={true}
  modules={[Autoplay]}

  breakpoints={

{

0:
{
    slidesPerView:1,
}
,

377:
{
slidesPerView:2

}
,

    566:{
slidesPerView:3

    }

,
    740:{
slidesPerView:4
    }
,

    1024:{
        slidesPerView:6
    }

}
  }
 


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
animate='visible'
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

    )
}
 
