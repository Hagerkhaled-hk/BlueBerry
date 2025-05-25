import React from "react";
import "./Footer.css"
import logo from "../../assets/images/logo.png"
import android from "../../assets/images/android.png"
import apple from "../../assets/images/apple.png"
import payment from "../../assets/images/payment.png"
import "bootstrap/dist/css/bootstrap.min.css"
import { MdLocationPin } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";


export default function Footer()
{
    return (
<footer className="Footer container-fluid">

<div className="top">
<div className="left">
<div>
    <div className="image">
<img src={logo}/>
</div>
<p>BlueBerry is the biggest market of grocery products. Get your daily needs from our store.</p>
</div>
<div className="os-image"> 

<img src={android}/>
<img src={apple}/>

</div>

</div>
<div className="right">

<div>

    <p>Category</p>

    <ul>

<li>
<a>Dairy & Milk</a>
</li>
<li>
<a>Snack & Spice </a>
</li>
<li>
<a>Fast Food</a>
</li>
<li>
<a>Juice & Drinks</a>
</li>
<li>
<a>Bakery</a>
</li>
<li>
<a>Seafood</a>
</li>

    </ul>
</div>
<div>

    <p>Company</p>

    <ul>

<li>
<a>About us</a>
</li>
<li>
<a>Delivery</a>
</li>
<li>
<a>Legal Notice</a>
</li>
<li>
<a>Terms & Conditions</a>
</li>
<li>
<a>Secure payment</a>
</li>
<li>
<a>Contact us</a>
</li>

    </ul>
</div>
<div>

    <p>Account</p>

    <ul>

<li>
<a>Sign in</a>
</li>
<li>
<a>View Cart</a>
</li>
<li>
<a>Return policy</a>
</li>
<li>
<a>Become a vendor</a>
</li>
<li>
<a>Affilate program</a>
</li>
<li>
<a>Payments</a>
</li>

    </ul>
</div>
<div className="contact">

    <p>
        Contact</p>

    <ul>

<li>
<a>
            <MdLocationPin className="details-icon" />

    Bravo Company</a>
</li>
<li>
<a>
    <FaWhatsapp className="details-icon"/>
    01064031614</a>
</li>
<li>
<a>
    <MdOutlineMailOutline className="details-icon"/>
    bravovoding.com</a> 
</li>

<li className="apps">

<div >

    < FaFacebookSquare  className="app"/>
</div>
<div>
    <FaTwitter className="app"/>
</div>
<div>
    < FaLinkedinIn className="app"/>
</div>
<div>
    <FiInstagram className="app"/>
</div>
    
</li>

    </ul>




</div>

</div>
</div>


<div className="bottom">
    <div className="left">

        <p>Copyright © 2025</p>
        <p>( Bravo Company )</p>
        <p>all right reserved</p>
    </div>

    <div className="right">
        <img src={payment}/>
    </div>
</div>
</footer>


    )
}
 
