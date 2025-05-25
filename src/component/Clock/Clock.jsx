import "./Clock.css"
import { useEffect, useState } from "react";


export default function Clock()
{
 const lastDate= new Date('dec 31 , 2025 23:59:59').getTime(); //ms 
    const [Timing,setTiming]=useState({})    



 
useEffect(()=>{


   const Time =setInterval(()=>{
        
        const currentData= new Date().getTime(); 
        const Diff=lastDate-currentData;
       setTiming(
         { RemainingDays:Math.floor(Diff / (1000*60*60*24)), 
        RemainingDayHours: Math.floor((Diff % (1000*60*60*24))/(1000 *60*60)),

        RemainingDaymin:  Math.floor((Diff % (1000*60*60))/(1000*60)),
   RemainingDaysec: Math.floor((Diff % (1000*60))/1000)
}       ) 
     

},1000)




    return ()=>clearInterval(Time)
},[lastDate])
    



    return (

 <div className="clock">
            <span>{Timing?.RemainingDays} </span> Days Left 
              (
                <span>{Timing?.RemainingDayHours} </span>:
                <span>{Timing?.RemainingDaymin}</span>:
                <span>{Timing?.RemainingDaysec}</span>
                
                )</div>

    )
}
 
