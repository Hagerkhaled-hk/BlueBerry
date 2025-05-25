import React from "react";
import "./DynamicIndex.css"
import { FaAnglesRight } from "react-icons/fa6";
export default function DynamicIndex({tilte , page})
{


    return (
<div className="DynamicIndex">
<p>{tilte}</p>

<p>Home <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 9v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-3v-6h3z"></path><path d="M3 9v6"></path><path d="M6 9v6"></path></svg> 

{
    page.map((item ,index)=>
        {
        if(index!=page.length-1){ 
        return (
            < > 
            
                    {item }<svg key={index} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 9v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-3v-6h3z"></path><path d="M3 9v6"></path><path d="M6 9v6"></path></svg> 
        
        
            
                         </>


        )
    }
    })


}




<span>{page[page.length-1]}</span> </p>
</div>

    )
}
 
