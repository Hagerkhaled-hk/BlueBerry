import React, { useContext, useEffect, useState } from "react";
import "./ProductCategory.css"
import "../Products/Products.css"

import { CategoryContext } from "../../context/CategoryContext/CategoryContext";
import { useParams } from "react-router-dom";
import DynamicIndex from "../../common/DynamicIndex/DynamicIndex"
import ExploreSlider from "../../common/ExploreSlider/ExploreSlider";
import "bootstrap/dist/css/bootstrap.min.css"
import {ProductsContext} from "../../context/PoductsContext/PoductsContext";
import { HiMiniSquares2X2 } from "react-icons/hi2";
 import ProductDesign from "../../common/product_design/product_design";


export default function ProductCategory()
{
const {products,sortOption,handleSortOption} = useContext(CategoryContext)  ;
const {id} =useParams();

const {viewMode, setViewMode,
}=useContext(ProductsContext)


    return (
<div className="ProductCategory">

    

<DynamicIndex tilte={'All products'} page={['Shop Page',id]}/>
<ExploreSlider/>
<div className="container">
    <div className="right DISPLAYPRODUCTS">
    <div className="top">
        
        <div className="controls">
            <div className="view">
          <button onClick={ ()=> setViewMode('col')} className={`${viewMode=='col'?'active':''}`} >
            <HiMiniSquares2X2  />
    </button>
    <button onClick={ ()=>setViewMode('row')} className={`${viewMode=='row'?'active':''}`}>    
          <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 512 512" height="1em" 
            width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinejoin="round" strokeWidth="48" d="M144 144h320M144 256h320M144 368h320"></path><path fill="none" strokeLinecap="square" strokeLinejoin="round" strokeWidth="32" d="M64 128h32v32H64zm0 112h32v32H64zm0 112h32v32H64z"></path></svg>
           </button>
           </div>
    
    
     <div className="sort">
        <p>Sort By :</p>
        <select className="form-select" aria-label="Default select example"
        
        onChange={(e)=>handleSortOption(e.target.value)}
        >
      <option selected={sortOption=="Default(A-Z)"?true:false} value="Default">Default</option>
      <option selected={sortOption=="Name(A-Z)"?true:false} value="Name(A-Z)">Name(A-Z)</option>
      <option selected={sortOption=="Name(Z-A)"?true:false} value="Name(Z-A)" >Name(Z-A)</option>
      <option selected={sortOption=="Price(low-high)"?true:false} value="Price(low-high)">Price(Low-High)</option>
      <option selected={sortOption=="Price(high-Low)"?true:false} value="Price(high-Low)">Price(High-Low)</option>
    </select>
     </div>
    
        </div>
    
    
    </div>
    
        <div className="bottom">
    
    <ProductDesign Products={products} 
    className={`${viewMode=='row'?'row':''}`} />
    
        </div>
    </div>
</div>

</div>

    )
}
 
