import React from "react";
import"./NewBuildingOwnerslist.css";
const NewBuildingOwnerslist =()=>
{
    return(
        <div class="buildingname">
         <h1 id="row1">New BuildingDetail List</h1>
         <br></br>
         <p id="two">
         BuildingName:{""}
             {localStorage.getItem("BuildingName")
        ?localStorage.getItem("BuildingName")
    :"NA"}
    </p>
   <br></br>
    <p id="two"> 
    Floor:{""}
             {localStorage.getItem("Floor")
        ?localStorage.getItem("Floor")
    :"NA"}
    </p>
   <br></br>
    <p id="two">
    Owner:{""}
             {localStorage.getItem("Owner")
        ?localStorage.getItem("Owner")
    :"NA"}
     
    </p>
    <br></br>
    <p id="two">
            Location:{""}
             {localStorage.getItem("Location")
        ?localStorage.getItem("Location")
    :"NA"}
    </p>
    <br></br>
    </div>  
    );
       
}
export default NewBuildingOwnerslist;