import React, {  useRef,useState , useContext, useEffect } from "react";
import './Header.css';
import logo from "../../assets/images/logo.png"
import { GoPerson } from "react-icons/go";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GoStar } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import SlideAnimation from "../../hook/slide_animate" 
import {  delay, motion } from "../../../node_modules/framer-motion";
import { FaRegCircle } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import PocketCart from "../pocketCart/pocketCart"
import { ProductsContext } from "../../context/PoductsContext/PoductsContext";
import {allProducts, categoriesInfo} from "../../common/ProductJson"
import axios from "axios";
import { CartContext } from "../../context/CartContext/CartContext";
import { IoMdMenu } from "react-icons/io";
import WishList from "../../component/WishList/WishList";
import { WishContext } from "../../context/WishContext/WishContext";


export default function Header()
{
    const{ useMenuAnimation }= SlideAnimation();
    const [isOpen, setIsOpen] = useState(false);
    const scope = useMenuAnimation(isOpen);
    const [cartActive,setCartActive]=useState(false);
    const { api_Json_ProductsSaving,categories} =useContext(ProductsContext);
    const [searchResutlt,setSearchResult]=useState([]);
    const [active,setActive]=useState(0);
const [message, setMessage] = useState(0);
const inputRef = useRef();
const [categoryId,setCategorId]=useState(["All","All categories"]);
const {cartLenght} =useContext(CartContext);
    const {setWishActive,wishLength}=useContext(WishContext);
    


const handleProducts = async () => {
  let foundElements = [];
  
  if (categoryId[0] == "All") {
    
    await Promise.all(categories.map(async (item) => {
      const { data } = await axios.get(item.url);
      foundElements.push(...data.products);
    }));
    
    foundElements.push(...allProducts);
    setSearchResult(foundElements);
  } else {
    foundElements = api_Json_ProductsSaving.filter(item => item.category == categoryId[0]);

    if (foundElements.length == 0) {
      const { data } = await axios.get(categoryId[0]);
      foundElements = data.products;
    }
    setSearchResult(foundElements);
  }
}

const handleSearchresult=()=>{
    console.log(inputRef.current?.value);
    

const currentValues=inputRef.current?.value;
if(currentValues!="" && currentValues!=" ")
{
                handleProducts();

    
    const Filtered = searchResutlt.filter((item)=>{
        console.log("lllll",item.title.toLowerCase().trim().includes(currentValues.toLowerCase().trim()));

return item.title.toLowerCase().trim().includes(currentValues.toLowerCase().trim());
    })
    setSearchResult(Filtered);
    console.log(Filtered.length);
    
    if(Filtered.length==0)
    {
      setMessage(true);
    

    }
      else
      {
        setMessage(false);
        console.log(message);
      }
}
else
{
    handleProducts();
        setMessage(false);
    

}



}
    

useEffect(()=>{

handleProducts();
},[categoryId]);





    return (
<div className="Header container-fluid  p-0 " ref={scope}>

<section className="top">
    <div className="first">
<p>Flat 50% off On Grocery shop.</p>

<p>
    <span>help ? </span>
    <span>language</span>
</p>

    </div>
    <div className="second"></div>
    </section> 
<section className="in-between">
    
    <div className="first">
    <div className="logo">

<img src={logo}></img>
    </div>
    <div className="search " style={
    {
        position:"relative"
    }
    }>
<motion.div onClick={() => setIsOpen(!isOpen)} className="search-cat">
    
  
      <p>{categoryId[1]}</p>
      <IoMdArrowDropdown className="arrow" style={{ transformOrigin: "50% 55%" }}/>

      <div  className="slide" 
          style={{
            pointerEvents: isOpen ? "auto" : "none",
            clipPath: "inset(10% 50% 90% 50% round 10px)",height:"120px" ,overflowY:"auto"
          }}
          >
            <p  onClick={()=>{setCategorId(["All","All categories"]) } } >All categories</p>
            {categoriesInfo.map((item,index)=>{

return(
                <p key={index}   onClick={()=>{setCategorId([item.category,item.category])}} >{item?.category}</p>
)
            })}
            
            {categories.map((item,index)=>{


return(
                <p key={index}   onClick={()=>{setCategorId([item.url,item.name])}} >{item?.name}</p>
)
            })




            }
        </div>
         
      </motion.div>
    
            <input type="text" placeholder="Search on item"   
            onInput={()=>{
                console.log("input ");
                
handleSearchresult()
             
                    setActive(true)
            }}

            onFocus={()=>{
           setActive(true)
            }}

            onBlur={()=>{

                setTimeout(()=>{

                setActive(false)


                },100)
            }}

            ref={inputRef} />
            <div className="search-icon"><IoSearchOutline/></div>

            <div className="inputBlank" style={{
visibility : `${active?"visible":"hidden"}`

            }} >
<p style={{
    padding:"5px",
    display:`${message?"flex":"none"}`,
    color:"var(--color-text)"
}} >No products found </p>


                {  
                
                
                
                !message && (
                
       (inputRef.current?.value=="" || inputRef.current?.value=='')?
              searchResutlt.slice(0,4).map((item ,index)=>{

return(
      <Link key={index} style={{textDecoration:"none" } } 
      
      
      to={`/productDetails/${item.title}`} 
     > 
     
     <IoSearchOutline/>
     {item.title} </Link>
)
                })
                            
                :
                searchResutlt.map((item ,index)=>{

return(
      <Link key={index} style={{textDecoration:"none" } }   to={`/productDetails/${item.title}`} 
     > 
     
     <IoSearchOutline/>
     {item.title} </Link>
)
                })
            
            
            )
                }



            </div>

    </div>
    </div>

    <div className="add-feature second">
<div className="menu"> 
<IoMdMenu   style={{color:"var(--main_color)"}}/>

<div className="meunBlank">
<section >
<ul>
<li><NavLink to="" >home</NavLink></li>
<li><NavLink to="/about">about</NavLink></li>
<li><NavLink to="/categories">categories</NavLink></li>
<li><NavLink to="/Products">products</NavLink></li>
<li  className="pages ">
    
    <Link to={"#"} >pages
<FaRegCircle style={{fontSize:5 ,marginLeft:5}}/>
</Link>

<div className="pagesBlank  menuPagesBlank"  >

    <Link to={"/cart"} >Cart</Link >
    <Link  to={"/compare"}>Compare</Link>
    <a href="#" >Login</a >
    <a href="#" >Register</a >
</div>

</li>


  
<li><NavLink to="/contact">contact</NavLink></li>
{/* <li><NavLink to="/Offers" >

<svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" 
 style={{color:'var(--main_color)',marginRight:2}} strokeLinejoin="round" className="offer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" ></path><path  d="m9 12 2 2 4-4"></path></svg>
offers</NavLink></li>
 */}
</ul>


</section>

</div>


</div>
<Link to="#"><GoPerson  style={{fontSize:'28px'}}/>
<p>Account <span>login</span></p>
</Link>
<Link to="#">
<GoStar  style={{fontSize:'28px'}} onClick={()=>{setWishActive(true)}} />  <p>({ wishLength() }) item/s <span>WishList</span></p></Link>
<WishList/>
<Link to="#" ><BsCart3 style={{fontSize:'28px'}} onClick={()=>{setCartActive(true)}} /><p>({cartLenght()}) item/s <span>Cart</span></p> </Link>
<PocketCart cartActive={cartActive} setCartActive={setCartActive} />
    </div>
    </section> 

<section className="down">
<ul>
<li><NavLink to="" >home</NavLink></li>
<li><NavLink to="/about">about</NavLink></li>
<li><NavLink to="/categories">categories</NavLink></li>
<li><NavLink to="/Products">products</NavLink></li>
<li  className="pages">
    
    <Link to={"#"} >pages
<FaRegCircle style={{fontSize:5 ,marginLeft:5}}/>
</Link>

<div className="pagesBlank"  >

    <Link to={"/cart"} >Cart</Link >
    <Link  to={"/compare"}>Compare</Link>
    <a href="#" >Login</a >
    <a href="#" >Register</a >
</div>

</li>

    {/* 
    <li className="blogs"><NavLink to="/Blogs" >
    blogs

    <FaRegCircle style={{fontSize:5,marginLeft:5}}/>
    </NavLink>


    <div className="blogsBlank" >

        <a href="#">Left SideBar</a>
        <a href="#">Right SideBar</a>
        <a href="#">Full Width</a>
    </div>
    </li> */}
<li><NavLink to="/contact">contact</NavLink></li>
{/* <li><NavLink to="/Offers" >

<svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" 
 style={{color:'var(--main_color)',marginRight:2}} strokeLinejoin="round" className="offer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" ></path><path  d="m9 12 2 2 4-4"></path></svg>
offers</NavLink></li> */}

</ul>


</section>


</div>

    )
}
 
