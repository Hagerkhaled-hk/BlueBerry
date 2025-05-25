import React, { useState,useEffect ,createContext} from "react";
import {allProducts} from "../../common/ProductJson"
import axios from "axios"



export const ProductsContext=createContext();


export default function PoductsContext({children})
{
    const [api_Json_Products, setApi_Json_Products]=useState([]);
    const[api_Json_ProductsSaving, setapi_Json_ProductsSaving]=useState([])
 const [sortOption, setSortOption] = useState('default');
  const [filterCategory, setFilterCategory] = useState([]);
  const [viewMode, setViewMode] = useState('col');
    const [categories,setcategories]=useState([]);
    
    

        const allProductsApi = async()=>{
            
         try {
      const { data } = await axios.get('https://dummyjson.com/products');
      setApi_Json_Products(allProducts.concat(data.products));
     setapi_Json_ProductsSaving(allProducts.concat(data.products)); 

    } catch (error) {
      console.error("Error fetching products:", error);
      setApi_Json_Products(allProducts);
      setapi_Json_ProductsSaving(allProducts)
    }
    
        }
    
        const allcategoriesNameApi = async()=>{
            
         try {
      const { data } = await axios.get('https://dummyjson.com/products/categories');
setcategories(data)
    } catch (error) {
      console.error("Error fetching products:", error);
    }

        }

        function handelFilterdCategory(state)
        {
            
            console.log(state);
            
            setFilterCategory( 
                prev=>{
            const Filteration=  prev.includes(state) ?
        prev.filter((current)=>{ 
            return current!==state})
        :
        [...prev,state];
       


         const products =  allProducts.filter( (item)=>{
               
               return  ( Filteration.includes(item.category) )   
                })
                

                products.length==0? allProductsApi():setApi_Json_Products(products)
                setapi_Json_ProductsSaving(products);
                     

                
                return Filteration;
            }
            
        )        
        localStorage.setItem("filteration",state);
    
        }


        function handleSortOption(state)
        {

            if(state=='Name(Z-A)')
            {

                
                setApi_Json_Products([...api_Json_ProductsSaving].sort((a,b)=>b.title.localeCompare(a.title)));
            }
           else if(state=='Name(A-Z)')
            {

                
                setApi_Json_Products([...api_Json_ProductsSaving].sort((a,b)=>a.title.localeCompare(b.title)));
            }
           else if(state=='Price(high-Low)')
            {

                
                setApi_Json_Products(  [...api_Json_ProductsSaving].sort((a,b)=>b.price - a.price));
            }
           else if(state=='Price(low-high)')
            {

                
                setApi_Json_Products(  [...api_Json_ProductsSaving].sort((a,b)=>a.price - b.price));
                
            }
            else if(state=='Default')
            {
   
            setApi_Json_Products(api_Json_ProductsSaving);
            
        }
        console.log(api_Json_ProductsSaving);
        setSortOption(
            
            ()=>{
           
                localStorage.setItem("sort" ,state)
                return state
            }
           );

        }

      
 
         
        useEffect(()=>{
        allProductsApi();
        allcategoriesNameApi()


            },[])


    return (
<ProductsContext.Provider  value={{sortOption,filterCategory,viewMode,
    setSortOption,setFilterCategory, setViewMode,
    api_Json_Products,setApi_Json_Products,setapi_Json_ProductsSaving
    ,api_Json_ProductsSaving,categories, handelFilterdCategory,handleSortOption,categories, allProductsApi
}}>
{children}
</ProductsContext.Provider>

    )
}
 

