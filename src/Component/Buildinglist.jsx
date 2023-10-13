import React from "react";

const Buildinglist=(props)=>{
console.log(props);
    return(
<div>
<img src={props.img} alt="Building Owner" width="100" height="100"/>
        <h1 className="StudentMark">{props.id}</h1>
        <h2 className="StudentMark">{props.Name}</h2>
        <h1 className="StudentMark">{props.PhoneNo}</h1> 
        <h1 className="StudentMark">{props.Mail}</h1>      
        </div>
    
    );
}
export default Buildinglist;