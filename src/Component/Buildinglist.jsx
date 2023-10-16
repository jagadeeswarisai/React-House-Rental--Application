import React from "react";

const Buildinglist=(props)=>{
console.log(props);
    return(
<div>
<div className="Buildinglist">
<img src={props.img} alt="BuildingOwner" class="BuildingImage" />
<br></br>
<br></br>
<hr></hr>
<div className="Buildinglist-content">
        <h1 className="StudentMark">{props.id}</h1>
        <h2 className="StudentMark">{props.Name}</h2>
        <h1 className="StudentMark">{props.PhoneNo}</h1> 
        <h1 className="StudentMark">{props.Mail}</h1>  
        <h1 className="StudentMark">{props.Status}</h1>    
        </div>
        </div>
        </div>
    
    );
}
export default Buildinglist;