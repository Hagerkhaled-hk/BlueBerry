import React from "react";
import "./P7-home.css"
import serv1 from "../../assets/images/services/1.png"
import serv2 from "../../assets/images/services/2.png"
import serv3 from "../../assets/images/services/3.png"
import serv4 from "../../assets/images/services/4.png"


export default function P7Home()
{
    return (
<div className="P7Home">

<section>
<img src={serv1}alt=""/>
<h3>Free Shipping</h3>
<p>
Free shipping on all Us order or above $200</p>
</section>
<section>
<img src={serv2}alt=""/>
<h3>24x7 Support</h3>
<p>
Contact us 24 hours a day, 7 days a week</p>
</section>
<section>
<img src={serv3}alt=""/>
<h3>30 Days Return</h3>
<p>
Simply return it within 30 days for an exchange</p>
</section>
<section>
<img src={serv4}alt=""/>
<h3>Payment Secure</h3>
<p>
Contact us 24 hours a day, 7 days a week</p>
</section>

</div>

    )
}
 
