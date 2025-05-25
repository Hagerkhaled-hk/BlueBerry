import React from "react";
import "./Loading.css"
import loading from "../../assets/images/spinning-dots .svg"

export default function Loading()
{
    console.log("loading");
    return (
<div className="Loading" style={{width:"100%", height:"100%",display:"flex",justifyContent:"center",alignItems:"center" ,marginTop:"10%"

}}>

<img src={loading} style={{width:"15%", height:"15%"}} alt=""/>
</div>

    )
}
 
