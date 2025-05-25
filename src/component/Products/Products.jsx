import React,{useEffect, useState,useContext} from "react";
import "./Products.css"
import DynamicIndex from "../../common/DynamicIndex/DynamicIndex"
import ExploreSlider from "../../common/ExploreSlider/ExploreSlider";
import img_3 from "../../../src/assets/images/img-3.jpg";
import { HiMiniSquares2X2 } from "react-icons/hi2";
 import ProductDesign from "../../common/product_design/product_design";
import {ProductsContext} from "../../context/PoductsContext/PoductsContext";
import "bootstrap/dist/css/bootstrap.min.css"

export default function Products()
{


const {sortOption,filterCategory,viewMode, setViewMode,
api_Json_Products,handelFilterdCategory,handleSortOption}=useContext(ProductsContext)

useEffect(()=>{


},[])
  
    return (
<div className="Products">
<DynamicIndex tilte={'All products'} page={['Products']}/>
<ExploreSlider/>

<main className="container ">
<div className="left">

<div className="categories">
    <h5>Main Categories</h5>
    <div className="container">

        <div className="checkBox">
    <input type="checkbox" id="snacks" value={'snack & spices'} className="form-check-input mt-0 "aria-label="Text input with checkbox"
    
    checked={filterCategory.includes('snack & spices' )}
    onChange={()=>{handelFilterdCategory('snack & spices')}}  />
  <label  htmlFor="snacks" value='snacks' >snacks</label>
</div>
        <div className="checkBox ">

      <input type="checkbox" id="fruits" value={'fruits'} className="form-check-input mt-0 "  
        
    checked={filterCategory.includes('fruits' )} 
    aria-label="Text input with checkbox" onChange={()=>{handelFilterdCategory('fruits')}}/>
  <label htmlFor='fruits' value='fruits'>fruits</label>
</div>

        <div className="checkBox">

    <input type="checkbox" id="vegetables" value={'vegetables'} className="form-check-input mt-0 " 
        checked={filterCategory.includes('vegetables' )}

    aria-label="Text input with checkbox"  onChange={()=>{handelFilterdCategory('vegetables')}}/>
  <label htmlFor='vegetables' value='vegetables'>vegetables</label>
  </div>

</div>

</div>
    <div className="split"></div>
    <div className="image">
        <img src={img_3} alt=""/>
    </div>

</div>
<div className="right  DISPLAYPRODUCTS" >
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

<ProductDesign Products={api_Json_Products}  
className={`${viewMode=='row'?'row':''}`} />

    </div>
</div>
</main>


</div>


    )
}
 
