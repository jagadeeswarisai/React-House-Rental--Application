import React from "react";

function  BuildingOwners(){
    return(
      <div>
        <h1> Building Owners Information</h1>
        <Owner img={require("./images/Owner.jpg")} width="50" height="50" 
         Name="Arun" PhoneNo="9159538453" IdNo="14578925" mail="arunmech@gmail.com" Aggrementdate="14.12.2023" Status="Active"/>
          <Owner img={require("./images/Owner.jpg")} width="50" height="50" 
         Name="Arun" PhoneNo="9159538453" IdNo="14578925" mail="arunmech@gmail.com" Aggrementdate="14.12.2023" Status="Active"/>
        <Owner/>
      
        </div>
      
    );
}
 const Owner=(props)=>
 {
    return(
 <div id="r1">
  <img src={props.img} />
  <h1>{props.Name}</h1>
  <h1>{props.PhoneNo}</h1>
  <h1>{ props.IdNo}</h1>
  <h1>{props.mail}</h1>
  <h1>{props.Aggrementdate}</h1>
  <h1>{props.Status}</h1>
 </div>
   );
 }
export default BuildingOwners;