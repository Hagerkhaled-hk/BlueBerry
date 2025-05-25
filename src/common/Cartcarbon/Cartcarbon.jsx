import "./Cartcarbon.css"
import React, { useState ,useContext, useEffect} from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import { motion,useAnimation,AnimatePresence } from "framer-motion"
import { CartContext } from "../../context/CartContext/CartContext";
import { ProductsContext } from "../../context/PoductsContext/PoductsContext";
import { TbTrash } from "react-icons/tb";
import { Link } from "react-router-dom";
import empty_cart from "../../assets/images/empty_cart.png"
export default function Cartcarbon()
{
    const [showCoupounState,setShowCoupounState] =useState(false)
const {cart,HandleAmount,DeleteItem} = useContext(CartContext);
const [product,setProduct]=useState([]);
const{api_Json_ProductsSaving}=useContext(ProductsContext)



 const handleProduct = async ()=>
{

  const Finded_products=   await Promise.all(cart.map(async(el)=>{
  let Finded = api_Json_ProductsSaving.find((item)=>
  {
    
   return item.title==Object.keys(el)[0]
     
  }

)

if(!Finded)
{
let x =Object.keys(el)[0];


const {data} = await axios.get(`https://dummyjson.com/products/search?q=${x}`);
Finded=data.products[0];

}

  return {...Finded,amount:Object.values(el)[0] };

  
}
))




setProduct(Finded_products)




}


const animate = useAnimation();
const intialAnimation = useAnimation();
    const ShowCoupoun=()=>
    {
        setShowCoupounState(!showCoupounState);
        
    }




useEffect(()=>{

  
  handleProduct();
  
  
},[cart,api_Json_ProductsSaving])
    return (
<div className={`Cartcarbon ${product.length==0?"emptyImage":""}`}>
<div className={`container-fluid Container ${product.length==0?'empty':''}`}  >
<div className="left">

<div className="top">
    <p>Sub-totall: $500</p>
    <p>Discount: 3% </p>
    <p>Delivery Charges :$10</p>
    <div className="coupon">

      <div className="coupon_text">  
    <p>Discount coupon</p>
    <button className="btn text-danger"  onClick={()=>ShowCoupoun()} >Click</button>
    </div>

      <AnimatePresence>
{ showCoupounState &&

<motion.div
 initial={{ height: 0, opacity: 0}}
            animate={{
              height: "50px", // Expands to content height
              opacity: 1,
              transitionEnd: { height: "50px" } // Prevents flicker
            }}
            exit={{ 
              height: 0,    // Collapses from bottom to top
              transition: { 
                height: { duration: 0.3 },
                opacity: { duration: 0.2 }
              }
            }}
            transition={{ type: "tween", ease: "easeIn" }}
            style={{ overflow: "hidden" }}
className="input_background">

  <div

  class="input-group mb-3">
  <input 

  type="text" class="form-control" placeholder="Enter your coupon" aria-label="Recipient’s username" aria-describedby="button-addon2" />
  <button
 
  class="btn btn-outline-secondary" type="button" id="button-addon2" 
   

  >Apply</button>
</div>

</motion.div>
}
</AnimatePresence>
    </div>
<hr style={{margin:'0' ,marginTop:"10px" }}/>

    <div style={{display:"flex", justifyContent:"space-between" ,alignItems:"center"}} className="totall">
        <p > Totall</p>
        <p>$
          {
            product.reduce((a,b)=>{return a +(b.price *b.amount)},0)
          }
        </p>
    </div>
</div>

</div>

{product.length==0?

<div  className="emptyImage"><Link to="/Products" style={{ textDecoration:"none",color:"var(--main_color)",fontWeight:"bold",display:"flex",flexDirection:"column",alignItems:"center"}}>

<div className="image " style={{width:"60%" , objectFit:"cover", overflow:"none"}}><img   style={{width:"100%"}} src={empty_cart} alt=""/></div>
 <p>🛒 Start shopping now </p> </Link></div>
:
<div className="right">
    <table className="table">
  <thead>
    <tr>
      <th scope="col"> Product</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Totall</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {
       product.map((item, index)=>{
        

        return( <tr key={index}>
      <th scope="row" className="image_title" >
        <div className="image">
          <img  src={item?.img??item?.thumbnail} alt=""/>
          </div>
          <p className="title">{item?.title?.split(" ").splice(0,2).join(" ")}</p>

        </th>
      <td className=" " >${item?.price}</td>
      <td>

 <select className="form-select "
 
 style={{width:"50px", padding:"2px 5px"}}
 value={(item?.amount)}
 
 onChange={(e)=>HandleAmount(e.target,item.title)}
 >
  {
    
([...Array(item?.count ?? item?.stock)]).map((_,index)=>{
  return(

  <option key={index}  value={index+1}>{index+1}</option>
  )
})    
  }
 </select>

      </td>
      <td>{(item?.price*item?.amount).toFixed(2)}</td>
      <td       
 >

        <TbTrash 
        className="trash"   style={{fontSize:"16px",cursor:"pointer"}}
        onClick={()=>{
          
          
          DeleteItem(item.title)}}/>
      </td>
    </tr>)
      })
    
}
  </tbody>
</table>

</div>
}



   </div>
</div>

    )
}
 
