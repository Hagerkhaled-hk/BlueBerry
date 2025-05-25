import {allProducts} from "../../common/ProductJson"
import axios from "axios";
import React, { useState,useEffect ,createContext} from "react";


export const CategoryContext=createContext(); 

export default function CategoryContextProvider({children})
{




      const [products,setProducts]=useState([]);
      const [productsSaving,setProductsSaving]=useState([]);
       const [sortOption, setSortOption] = useState('default');
      
    
      async  function handleProducts(path)
        {
                        
     const Filterd=allProducts.filter((item)=> item.category == path)
    
     if(Filterd.length==0)
     {
        console.log(true);
        
        try{
    const {data} = await axios.get(path)
    console.log(data.products);
    setProductsSaving(data.products)
        setProducts(data.products)
    }
    catch(error)
    {
              console.error("Error fetching products:", error);
    
    }
     }
    else
    {        
       setProductsSaving(Filterd)
        setProducts(Filterd);
    }
    


    localStorage.setItem("path",path);
        }
    

        function handleSortOption(state)
        {

            if(state=='Name(Z-A)')
            {

                
                setProducts([...productsSaving].sort((a,b)=>b.title.localeCompare(a.title)));
            }
           else if(state=='Name(A-Z)')
            {

                
                setProducts([...productsSaving].sort((a,b)=>a.title.localeCompare(b.title)));
            }
           else if(state=='Price(high-Low)')
            {

                
                setProducts(  [...productsSaving].sort((a,b)=>b.price - a.price));
            }
           else if(state=='Price(low-high)')
            {

                
                setProducts(  [...productsSaving].sort((a,b)=>a.price - b.price));
                
            }
            else if(state=='Default')
            {
   
            setProducts(productsSaving);
            
        }
        console.log(productsSaving);
        setSortOption(state);

        }
 
    
    
        useEffect(()=>{
    if(    localStorage.getItem("path")!=null || localStorage.getItem("path")!=undefined )
    {
            handleProducts(localStorage.getItem("path"));
    }
        },[])



    return (
<CategoryContext.Provider value={{products,handleProducts,handleSortOption,sortOption}}>
{children}

</CategoryContext.Provider>
    )
}
 
