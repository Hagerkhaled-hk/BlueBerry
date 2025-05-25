import React from "react";
import "./P4-home.css"
import one from "../../assets/images/fast-food/one.png"
import two from "../../assets/images/fast-food/two.png"

export default function P4Home()
{
    return (
<div className="P4Home">
<section className="left">

<div className="content">
    <div className="image">
        <img src={one} alt=""/>
    </div>
    <div className="text">
                <h2>Tasty Snack &  <br/>Fast food</h2>
        
    <p>The flavour of something  <br/>special</p>
    <button>Shop Now</button>
    </div>
</div>

</section>
<section className="right">


<div className="content">
    <div className="image">
        <img src={two} alt=""/>
    </div>
    <div className="text">
        <h2>Tasty Snack & <br/>Fast food</h2>
    <p>The flavour of something<br/> special</p>
    <button>Shop Now</button>
    </div>
</div>
</section>

</div>

    )
}
 
