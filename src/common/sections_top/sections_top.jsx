import React from "react";
import "./sections_top.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
export default function SectionsTop({text,top,description ,children})
{
    return (
        <div  className={`Top ${children?'d-flex justify-content-between align-items-center ':''}`}>
<div className={`SectionsTop ${children?'parent':''} `}>
<h2>{text}  <span>{top}</span></h2>
<p className={`description ${children?'withchild':''}`}>{description}</p>
</div>

{
    children&&
    children

    }
</div>

    )
}
 
