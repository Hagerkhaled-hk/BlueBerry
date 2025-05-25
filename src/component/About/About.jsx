import React from "react";
import "./About.css"
import DynamicIndex from "../../common/DynamicIndex/DynamicIndex"
import about_img from  "../../assets/images/about.png"
import P7Home from "../P7-home/P7-home";
import SectionsTop from "../../common/sections_top/sections_top";

export default function About()
{
    return (
<div className="About">
<DynamicIndex tilte={'About us'} page={['About us']}/>
<main>


    <div className="image">
<div className="imageContainer">
        <img  src={about_img} alt=""/>
        </div>
    </div>
    <div className="text">
        <div className="top">
 <h5>About the <span>BlueBerry</span> </h5>
 <small>Farm-fresh Goodness, just a click Away.</small>
 </div>
 <div className="in-between">
 <p>An e-commerce website for selling all types of products serves as a one-stop digital marketplace, offering a vast range of items from electronics and fashion to groceries and home essentials. Designed for convenience, it features intuitive navigation, advanced search filters, and personalized recommendations to help customers quickly find what they need.</p>
 <p>To further enhance reliability, the website integrates secure payment gateways and multiple delivery options, creating a seamless checkout process. Whether customers are searching for everyday necessities or specialty items, the platform caters to diverse needs with efficiency. </p>
 </div>

 <div className="statistics">
<section>
    <p>200 +</p>
    <span>vendors</span>
</section>
<section>
    <p>654 +</p>
    <span>vendors</span>
</section>
    <section>
     <p>578 +</p>
    <span>vendors</span>
    </section>


 </div>



    </div>
    </main>

<div className="down">
    <SectionsTop text={'Our'} top={'Services'} description={'Customer service should not be a department. It should be the entire company'}/>
    
<P7Home/>

</div>


</div>


    )
}
 
