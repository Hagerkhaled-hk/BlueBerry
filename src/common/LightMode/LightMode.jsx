import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { VscSettingsGear } from "react-icons/vsc";
import "./LightMode.css";
import light from "../../assets/images/light.jpg"
import dark from "../../assets/images/dark.jpg"
import { vw } from 'framer-motion';

function LightMode() {
  const [show, setShow] = useState(false);
const  [colorActive,setColorActive]=useState("#6c7fd8");
const [lightMode,setLightMode]=useState("light");
  const arrayColor = ["#6c7fd8","#607d8b","#5e9bb7","#6C94D8","#a195f9","#1c1f3b"];

const changeMainColor =(color)=>{

document.documentElement.style.setProperty('--main_color', color);   
    setColorActive(color);
    localStorage.setItem("colorActive",color);

}

const changeBackGround =(x)=>{
console.log(x);

    if(x=="dark")
    {
document.documentElement.style.backgroundColor = "#1C1C1D";
document.body.style.backgroundColor = "#1C1C1D";
document.documentElement.style.setProperty('--sec-bg',"#252728");   
document.documentElement.style.setProperty('--main_color', "#7D8EE8");   
document.documentElement.style.setProperty('--body-color', "#252728");   
document.documentElement.style.setProperty('--body-bg', "#1C1C1D");   
 document.documentElement.style.setProperty('--color-text', "#B0B3B8");   
 document.documentElement.style.setProperty('--lightColor', "#252728");   
  document.documentElement.style.setProperty('--darkColor', "white");   
  document.documentElement.style.setProperty('--bs-border-color',"rgba(222, 226, 230, 0.19)");   
  

    }
    else
    {

document.documentElement.style.backgroundColor = "white";
document.body.style.backgroundColor = "white";
document.documentElement.style.setProperty('--sec-bg',"#f8f8fb");   
document.documentElement.style.setProperty('--body-color', "#3d4750");   
document.documentElement.style.setProperty('--body-bg', "#fff");   
 document.documentElement.style.setProperty('--color-text', "#48525a");   
 document.documentElement.style.setProperty('--lightColor', "white");   
  document.documentElement.style.setProperty('--darkColor', "black");   
    document.documentElement.style.setProperty('--bs-border-color',"#dee2e6");   

  

    }
    setLightMode(x)
    localStorage.setItem("lightMode",x);
    
}


useEffect(()=>{
if(localStorage.getItem("lightMode")!=null && localStorage.getItem("lightMode")!=undefined )
{
  let x=localStorage.getItem("lightMode");
  changeBackGround(x)
  setLightMode(x);
}
if(localStorage.getItem("lightMode")!=null && localStorage.getItem("lightMode")!=undefined )
{
  let y=localStorage.getItem("colorActive");
  changeMainColor(y)
  setColorActive(y);
}

},[])

  return (
    <div className='LightMode'>
      <Button variant="primary"  style={{background:"#3d4750" ,borderColor:"#3d4750" , boxShadow:"var(--bs-box-shadow)"}}  className="d-xxl-none" onClick={ ()=> setShow(!show)}>
        <div>
<VscSettingsGear/>
</div>  
      </Button>


      <Offcanvas show={show} style={{zIndex:"99" , background:"var(--sec-bg)"}}  placement='end' responsive="xxl">
        <Offcanvas.Header  >
          <Offcanvas.Title style={{color:"var(--main_color)"}}>Tools</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
            <div className="colorContainer">

                <p>Select a main color : </p>

                <div className="colors">
{
    arrayColor.map((item,index)=>{
return(
<div className={`color ${colorActive==item?"activeColor":""}`} key={index} onClick={()=>{changeMainColor(item)}}></div>
)
    })
}
</div>
            </div>
<div className="mode">

<p>Mode</p>

<div className="images">
    <div className={`light ${lightMode=="light"?"activeImage":""}`}>
    <button className='btn'  onClick={()=>{changeBackGround("light")}} > 
<img src={light} alt=''/>
    </button>
</div>
<div className={`dark ${lightMode=="dark"?"activeImage":""}`}>
    <button  onClick={()=>{changeBackGround("dark")}} className='btn' > 
        <img src={dark} alt=''/>
        

    </button>
</div>


</div>
</div>

        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default LightMode;