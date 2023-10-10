import React from "react";
import { Link } from 'react-router-dom';

function  BuildingOwners(){
    return(
      <div>
        
        <Owner img={require("./images/Owner.jpg")} width="50" height="50" 
         Name="Arun" PhoneNo="9159538453" IdNo="14578925" mail="arunmech@gmail.com" Aggrementdate="14.12.2023" Status="Active"/>
          
        
      
        </div>
      
    );
}
 const Owner=(props)=>
 {
  const ownerStyle = {
    width: '30%', // Make the container width 100% for centering
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center items horizontally
    textAlign: 'center', // Center text horizontally
    padding: '10px',
    margin: '90px',
   
  };
  const imageStyle = {
    width: '150px',
    height: '150px',
    border: '1px solid gray',
    borderRadius: '50%', // Optional: If you want a circular image
    display: 'block', // To center the image within its container
    margin: 'auto', // To center the image horizontally
  
    
  };
    return(
 <div>
  <div style={ownerStyle} className="r1">
  <Link to="/Buildinglist">
        <img src={props.img} alt="Owner" id="im" style={imageStyle} />
        <h1>{props.Name}</h1>
      </Link>
  <p>{props.PhoneNo}</p>
  <p>{ props.IdNo}</p>
  <p>{props.mail}</p>
  <p>{props.Aggrementdate}</p>
  <p>{props.Status}</p>
  </div>
  </div>
 
   );
 }
export default BuildingOwners;