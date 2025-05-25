import React, { useState ,createContext, useEffect} from "react";
import Swal from 'sweetalert2'

export const CartContext = createContext();


export default function CartContextProvider({children})
{
    

    const [cart,setCart]=useState([]);


    function Addtocart(title_id,number)
    {
        

        
        
     let FoundElement = FindingElement(title_id)

        if(FoundElement)
        {
            
            IncrementAmount(FoundElement,title_id,number)
        }
        else
        {

         FoundElement={[title_id]:number};
        setCart(prev=>{
            if(cart.length!=0){
                setLocalStorageCart([...prev,FoundElement])
                
            }
            else
            {                
                setLocalStorageCart([FoundElement])

            }

            return [...prev,FoundElement]
        }

            
 )

}
        


    }


    function isDisabled(title_id,stock)
    {
        
 const condition = ! (stock-parseFloat(FindingElementAmount(title_id))>0)
 return condition
    }


function IsExceed(title_id ,stock,number)
{  const condition = !((stock - parseFloat(FindingElementAmount(title_id))) >=  number )

  return condition ; 
}





function Getproductcart()
{
    if(localStorage.getItem("cart")!=null){
        setCart( JSON.parse(localStorage.getItem("cart")))
 
 
    }

    

}


 function HandleAmount(e,title_id)
{
         let FoundElement=FindingElement(title_id);

FoundElement[title_id]=(e.value) ?? e;
setCart(prev=> {

                    setLocalStorageCart([...cart])

                    return [...prev]
});


}

function IncrementAmount(FoundElement,title_id,number) {

    
      FoundElement[title_id]=   parseFloat((FoundElement[title_id])) + number;
      console.log("Found in INcremnt ", FoundElement[title_id]);  
      
    setCart(prev=> {

                    setLocalStorageCart(cart)

                    return [...prev]
});

    
}

function setLocalStorageCart(x)
{
                          
                       localStorage.setItem("cart",JSON.stringify(x));




}

function DeleteItem(title_id)
{

    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {


  if (result.isConfirmed) {
    const Filteredcart=cart.filter((item)=>{
    

    return  Object.keys(item)[0]!= title_id;
})

setCart(()=>{
    setLocalStorageCart([...Filteredcart]);
    return Filteredcart});


    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success",
      showConfirmButton: false,
  timer: 1500
    });
  }
});



}


function FindingElement(title_id)
{
 const FoundElement= cart.find((item)=>{
        
        return Object.keys(item)[0] == title_id
    });


    return FoundElement;
}
function FindingElementAmount(title_id)
{
 const FoundElement= cart.find((item)=>{
        
        return Object.keys(item)[0] == title_id
    });

    return (FoundElement?FoundElement[title_id]:0);
}

function calcElementStock(title_id,stock)
{
 const FoundElement= cart.find((item)=>{
        
        return Object.keys(item)[0] == title_id
    });

    return (FoundElement?stock-(FoundElement[title_id]):stock);
}




function plusMinus(state,setAmount)
{
switch(state) {
    case 0:{setAmount(prev => prev - 1) }; break;
    case 1: setAmount(prev => prev + 1); break;
}


}



function plusMinusCartPocket(state,title)
{

    const founded = FindingElement(title_id);

switch(state) {
    case 0:{ founded[title]= parseFloat(founded[title])-1}; break;
    case 1:  founded[title]= parseFloat(founded[title])+1; break;
}

setCart([...cart]);


}

function cartLenght()
{
  return cart.length;
}

useEffect(()=>{

    Getproductcart();
    
},[])


    return (
<CartContext.Provider value={{cart,Addtocart,Getproductcart,setCart,HandleAmount,DeleteItem,FindingElement,
    FindingElementAmount,calcElementStock,isDisabled,plusMinus,IsExceed,cartLenght,plusMinusCartPocket
}} >

    {children}
</CartContext.Provider>
    )
}
 
