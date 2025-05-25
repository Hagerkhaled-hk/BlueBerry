import React,{useContext, useEffect, useState} from "react";
import "./Categories.css"
import { ProductsContext } from "../../context/PoductsContext/PoductsContext";
import {categoriesInfo} from "../../common/ProductJson"
import { Link } from "react-router-dom";
import { CategoryContext } from "../../context/CategoryContext/CategoryContext";
import one from "../../assets/images/one.jpg"
import two from "../../assets/images/two.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination ,EffectCreative,Autoplay} from 'swiper/modules';



export default function Categories()
{
 const {categories}= useContext(ProductsContext)
const{handleProducts}=useContext(CategoryContext)


const swiperData = [
    {
        title:"Fresh  Vegetables",
        image:one,
        percent:"50%"
    },
    {
        title:"Fresh & Healty Fruits",
        image:two,
        percent:"30%"
    }
     ,
    {
        title:"Fresh  Vegetables",
        image:one,
        percent:"50%"
    },
    {
        title:"Fresh & Healty Fruits",
        image:two,
        percent:"30%"
    }
 
  
]


 

 
 
    return (
<div className="Categories">





<div className="top">

<Swiper className=" mySwiper " 

 slidesPerView={2}
 spaceBetween={20}

    autoplay={{delay:1500}}
    speed={1000}
  modules={[Autoplay]}
  
  > 

    {
        swiperData.map((item ,index)=>{
            
            return(
             <SwiperSlide className="slide"  id="swiper-slide"
         key={index} > 
                <div className="slide" >
                    <div className="image">

                        <img src={item.image} alt=""/>
                    </div>
<p className="title">{item.title}</p>
<p className="percent">{item.percent}</p>
</div>

</SwiperSlide>
            )
        })
    }





   </Swiper>
 
</div>


<main className="down">
    <h4 >.. All Categories ..</h4>

<div className="container">


{ 
categoriesInfo.map((item,index)=>{

return(
<Link to={`/category/${item.category}`} className="card" key={index} onClick={()=>{handleProducts(item.category)}} >

    <p>{item.category}</p>
</Link>
)

})
}
{

categories.map((item,index)=>{

return(
<Link to={`/category/${item.name}`} className="card" key={index}
onClick={()=>{handleProducts(item.url)}} 
>

    <p>{item.name}</p>
</Link>
)
})
}




</div>

</main>
</div>

    )
}
 
