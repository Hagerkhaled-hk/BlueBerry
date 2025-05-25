import { useAnimate, stagger, motion } from "../../node_modules/framer-motion";
import React, { useRef, useState ,useEffect } from "react";
const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

 export default  function SlideAnimation()
 {
 
 
 
 function useMenuAnimation(isOpen) {
    const [scope, animate] = useAnimate();
  
    useEffect(() => {
        animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

      animate(
        ".slide",
        {
          clipPath: isOpen
            ? "inset(0% 0% 0% 0% round 10px)"
            : "inset(10% 50% 90% 50% round 10px)",
        },
        {
          type: "spring",
          bounce: 0,
          duration: 0.5,
        }
      );
  
      animate(
        ".slide p",
        isOpen
          ? { opacity: 1, scale: 1, filter: "blur(0px)" }
          : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
        {
          duration: 0.2,
          delay: isOpen ? staggerMenuItems : 0,
        }
      );
    }, [isOpen]);
  
    return scope;
  }
 
  return {useMenuAnimation}

}