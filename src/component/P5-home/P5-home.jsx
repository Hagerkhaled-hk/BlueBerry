import React from "react";
import "./P5-home.css"
import garden from "../../assets/images/garden.jpg"


export default function P5Home()
{
    return (
<div className="P5Home">

<img src={garden}/>

<div className="pop">
    <small>25% off</small>
    <p>Fresh & Organic <br/> vegetables</p>
    <button>Shop Now</button>
</div>
</div>

    )
}
 
