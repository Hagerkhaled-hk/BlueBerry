import React ,{createContext, useContext, useEffect, useState}from "react";
import { ProductsContext } from "../PoductsContext/PoductsContext";
import axios from "axios";



export const CompareContext = createContext();

export default function ComapreContextProvider({children})
{


const [compare,setCompare] = useState([]);
const {api_Json_ProductsSaving,allProductsApi}=useContext(ProductsContext)
const [showContent, setShowContent] = useState(false);

function addToCompare(title_id,category_id)
{
    const foundedElement=findingElement(category_id)

    if(foundedElement)
    {

    if(!isExist( foundedElement[category_id],title_id) )
    {
        console.log(("added "));
        
        foundedElement[category_id].push(title_id)
    }
    }
    else
    {
        setCompare(
            ()=>{

    localStorage.setItem("compare",JSON.stringify( [...compare,{[category_id]:[title_id]}]));


  return  [...compare,{[category_id]:[title_id]}] ;
            }
        )
    }

    


}

function isExist(array,title_id)
{
  
    
  const condition =  array.some((item)=>{
 
        return item==title_id;
    })


    return condition ;

}



function isExistCompare(title_id ,categ_id)
{
    const FoundCateg=findingElement(categ_id);
    let foundElement;
console.log(FoundCateg);


    if(FoundCateg)
    {

        const key =((Object.keys(FoundCateg))[0])
        const array=FoundCateg[key]
        
  foundElement= array.find((item)=>{

    
return item==title_id
  })
  
  console.log( foundElement?true:false);
    }


    
    return foundElement?true:false;

}

 async function getProducts(index)
{
    console.log(index);
    
     if(compare.length>index){
 const obj =compare[index];
 const name = Object.keys(obj)[0];
const array = obj[name];

console.log("enterd");

    
    const foundedElements =await Promise.all(array.map(async(title)=>{        
        
let ele =  api_Json_ProductsSaving.find((item) => { 
    
    return item.title === title; 
  });
   if(!ele)
    {
        
const {data} = await axios.get(`https://dummyjson.com/products/search?q=${title}`)
 ele=data.products[0];
 console.log(`https://dummyjson.com/products/search?q=${title}`);
 

    }
    return ele
}))
    

    return foundedElements;
}
else return []
}


function deleteItem(title_id ,category_id )
{   const foundElement =findingElement(category_id);


console.log(foundElement);
console.log(category_id, title_id);



if( (foundElement[category_id]).length == 1 )
{
    console.log("just one");
    
   const deletedArray= compare.filter((item)=>{
return Object.keys(item)[0] != category_id;
    })

     
    console.log([...deletedArray]);
    
    setCompare(
        ()=>{

console.log(typeof(deletedArray));

                localStorage.setItem("compare",JSON.stringify(deletedArray))

               return deletedArray
            
        }
    )

    if(deletedArray.length!=0)
        {
            setShowContent(true);
            
    }

   
    
}
else
{
    const array =  foundElement[category_id];
foundElement[category_id]=array.filter((item)=>{
    return item!= title_id;
})
    setCompare(()=>{

 console.log(typeof(compare));

        localStorage.setItem("compare",JSON.stringify([...compare]))
        return [...compare]
    });
    
    console.log([...compare]);
    
}


}


function findingElement(category_id)
{
     const foundedElement=compare.find((item)=>{


        return Object.keys(item)[0] == category_id
    })

    return foundedElement
}

useEffect(()=>{


if(localStorage.getItem("compare")!=null && localStorage.getItem("compare")!=undefined)
{
    
    setCompare(JSON.parse((localStorage).getItem("compare")))
}

},[api_Json_ProductsSaving])

useEffect(()=>{
allProductsApi();


},[])


    return (
<CompareContext.Provider value={{addToCompare,compare,getProducts,deleteItem,showContent, setShowContent,isExistCompare}}>

    {children}
</CompareContext.Provider>

    )
}
 
