import  { useEffect, useState } from "react";
import "./P2.5-Home.css"
import SectionsTop from "../../common/sections_top/sections_top";
import ProductDesign from "../../common/product_design/product_design";
import {allProducts} from "../../common/ProductJson"
import Clock from "../Clock/Clock";

export default function P25Home()
{

    
   


 

 
    return (
<div className="P25Home">
    <SectionsTop text={'Day of the '} top={'Deal'} description={"Don't Wait. The time will never be just right."} >

                 <Clock/>
        </SectionsTop>

<section className="product_section">
    <ProductDesign Products={[]}  />
{/* allProducts.slice(0,4)
 */}  </section>
</div>

    )
}
 
