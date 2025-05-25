import React, { useState } from "react";
import "./P6-home.css"
import SectionsTop from "../../common/sections_top/sections_top";
import ProductDesign from "../../common/product_design/product_design";
import {allProducts,spacificCategory} from "../../common/ProductJson"
export default function P6Home()
{
    const [Product_array,setProduct_array]=useState(allProducts);
    const [Active,setActive]=useState('all')

    function handleProduct_array(state,array)
    {
setProduct_array(array);
setActive(state)
    }

    
    return (
<div className="P6Home" >
<SectionsTop  text={'New'} top={'Arrivals'} description={'Shop online for new arrivals and get free shipping!'} >
<div className="catg_nav"> 

<button onClick={()=> handleProduct_array('all',allProducts)} className={Active=='all'?'active':''} >All</button>
{spacificCategory.map((catg,index)=>{
    return(

<button key={index} onClick={()=>handleProduct_array(catg.category,catg.products)} 
    className={Active==catg.category?'active':''}
    ><span>/</span>{catg.category}</button>
    )
})
}
</div>
    </SectionsTop>

<div className="products">

    <ProductDesign Products={Product_array}   />

</div>


</div>


    )
}
 
