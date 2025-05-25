import React from "react";
import Header from "../../common/Header/Header";
import Footer from "../../common/footer/footer";
import { Outlet } from "react-router-dom";
import Arrow from "../../common/Arrow/Arrow";
import LightMode from "../../common/LightMode/LightMode";

export default function Layout()
{
    return (
<div className="Layout">


<LightMode/>  
<Header/>
<Outlet/>
<Arrow/>
    <Footer/>
</div>

    )
}
 
