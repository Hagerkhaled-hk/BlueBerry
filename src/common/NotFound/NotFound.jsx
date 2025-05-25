import React from "react";
import "./NotFound.css"
import notfound from "../../assets/images/notfound.svg"
import{ Link }from "react-router-dom"

export default function NotFound()
{
    return (
<div  className="NotFound" style={{width:"100%", height:"100%",display:"flex",justifyContent:"center",alignItems:"center" ,marginTop:"5%",flexDirection:"column",gap:"40px"

}}>
<img src={notfound} style={{width:"40%", height:"30%"}} alt=""/>
<p style={{fontWeight:"bold" , color:"var(--main_color)"}} > Page not found. Let’s redirect you to the 
   <Link to={"/"} replace={true} style={{color:"var(--main_color)"}}> right place</Link>.</p>
</div>

    )
}
 
