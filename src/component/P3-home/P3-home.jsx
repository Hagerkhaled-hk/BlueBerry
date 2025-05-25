import React, {  useRef, useState } from "react";
import SectionsTop from "../../common/sections_top/sections_top";
import "./P3-Home.css"
import  img2 from  "../../assets/images/vendors/3.jpg"
import  img3 from  "../../assets/images/vendors/img-2.jpg"
import  img1 from  "../../assets/images/vendors/img-1.png"
import  img_3 from  "../../assets/images/vendors/img-3.jpg"
import vendor1 from "../../assets/images/vendors/vendor-1.jpg"
import vendor2 from "../../assets/images/vendors/vendor-2.jpg"
import vendor3 from "../../assets/images/vendors/vendor-3.jpg"
import vendor4 from "../../assets/images/vendors/vendor-4.jpg"
import { motion} from 'framer-motion'



export default function P3Home()
{


    
const [Photo ,setPhoto]=useState([img2,vendor1]);
const [ChoiceActive ,setChoiceActive]=useState(0);
  const img_ref = useRef();
 

 const handleChangeImage=(i,v,index)=>{

    setPhoto([i,v])
    setChoiceActive(index);
    


    
}

const ChoicesArray=[
    {
        name:"  Mario ",
        image:img2,
        vendor:vendor1

    }

    ,
    {
        name:"  Ali ",
        image:img3
        ,vendor:vendor2


    }
    ,
    {
        name:"  Mark ",
        image:img1,
        vendor:vendor3
    }
    ,
    {
        name:"  Mikel ",
        image:img_3,
        vendor:vendor4
    }



]


    return (
<div className="P3Home conatiner">
<SectionsTop text={'Top'} top={'vendors'} description={'Discover our trusted partners:excllence & reliability in every choice'}/>


<section className="choices">
<motion.div
key={Photo[0]}
initial={{opacity:0,transform:'scale(0.5)'
}}
animate={{opacity:1,transform:'scale(1)'

}}
transition={{
    duration:0.5,
     repeatType: 'alternate-reverse',
     delay:0.1
    
}}

className='image left' ref={img_ref}>
    
    <img src={Photo[1]}  />
    <div  className="vendor"> 
    <img src={Photo[0]}/>
</div>
    
</motion.div>

<div className="right">
{ChoicesArray.map((item,index)=>{
    return(

<div className={`choice ${ChoiceActive==index? 'active':''}`} key={index}  onClick={()=>{handleChangeImage(item.image,item.vendor,index)}}>

    <p>
        ${item.name} fashion pvt. ltd. 
        <small>sales-587</small>
    </p>

    <small>Fruits (5) | Vegetables (30) | Snakes (09)</small>
</div>

    )
})}

</div>




</section>


</div>

    )
}
 
