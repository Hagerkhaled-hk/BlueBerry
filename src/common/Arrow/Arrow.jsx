import React, { useEffect, useRef, useState } from "react";
import "./Arrow.css"
import { TiArrowUpOutline } from "react-icons/ti";export default function Arrow()
{
const arrowRef = useRef();    

    function toTop(){
        window.scrollTo({top:"0px",behavior:"smooth"});
 console.log((window.self.pageYOffset)/100);
 
    }
       useEffect(() => {
  const handleScroll = () => {
    const y = window.scrollY / 100; 
    const maxY = 100; 
    
    
    arrowRef.current.style.background = `conic-gradient(
      var(--main_color) 0% ${y}%, 
      var(--sec-bg) ${y}% 100%
    )`;
  };

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);

  // Cleanup
  return () => window.removeEventListener('scroll', handleScroll);
}, []); //

useEffect(() => {
  const handleScroll = () => {
    const y = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const maxScroll = documentHeight - windowHeight;
    const scrollPercentage = (y/maxScroll)*100
    arrowRef.current.style.background = `conic-gradient(
      var(--main_color) ${scrollPercentage}%,
      var(--sec-bg) ${scrollPercentage}% 
    )`;
  };

  handleScroll();
  
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

    return (
<div className="Arrow"  onClick={()=>{toTop()}}  ref={arrowRef}>

<div className="background">
<TiArrowUpOutline   className="up"/>
</div>
</div>

    )
}
 
