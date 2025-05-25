import React,{createContext, use, useEffect, useState} from "react";
import "./WishContext.css"

export const WishContext = createContext();

export default function WishContextProvider({children})
{


    const [wishActive,setWishActive]= useState(false);

    const [wishCart,setWishCart]=useState([]);



    function addToWish(item)
    {

        setWishCart(()=>{

            if(wishCart.length!=0){
localStorage.setItem("wishCart", JSON.stringify([...wishCart,item]))
            }
            else
            {
                localStorage.setItem("wishCart",JSON.stringify([item]));

            }
return [...wishCart,item]

        })


    }


function remove(title)
{

const filterd = wishCart.filter((item)=>{
    return item.title != title;
})

setWishCart(()=>{

              localStorage.setItem("wishCart",JSON.stringify(filterd));

              return filterd;
})

}

function isWishExist(title)
{

    
    const condition = wishCart.find((item)=>{

        return item.title ==title
    })

console.log(condition?true:false);


return  (condition?true:false) }

function wishLength()
{
    return wishCart?.length
}

useEffect(()=>{

if(localStorage.getItem("wishCart") != null && localStorage.getItem("wishCart") != undefined )
{
    setWishCart(JSON.parse(localStorage.getItem("wishCart")))
}
}
   ,[])

        return (

        <WishContext.Provider value={{wishActive,setWishActive,wishCart,addToWish,remove, wishLength ,isWishExist}}>
{children}
        </WishContext.Provider>

    )
}
 
