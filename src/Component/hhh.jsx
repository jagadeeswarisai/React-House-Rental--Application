import React from "react";
import"./BuildingOwners.css";

function BuildingOwners()
{
    
    return (

   
      <div>
   
    
   <img src={require("./images/buildingowner.png")} width="200" height="200" alt="cam" id="img2"/>
   <p id="p1">BuildingOwner</p>
    <div id="para4">
        <div class="para3">BuildingOwnerInfromation</div>
        <br></br>
    <from >
        <div>
            <label id="para5">Name:</label>
            <input type="text" id="Name"></input>
        </div>
        
        <div>
            <label id="para5">PhoneNo:</label>
            <input type="text" id="PhoneNo"></input>
        </div>
        
        <div>
            <label id="para5">IdNo:</label>
            <input type="text" id="IdNo"></input>
        </div>
        
        <div>
            <label id="para5">E-Mail</label>
            <input type="text" id="E-Mail"></input>
        </div>
       
        <div>
            <label id="para5">AggrementDate:</label>
            <input type="text" id="AggrementDate"></input>
        </div>
      
        <div>
            <label id="para5">Status:</label>
            <select id="Status">
                <option value="Please Select Here">Please Select Here..</option>
                <option vlaue="Active">Active</option>
                <option value="InActive">InActive</option>
            </select>
        </div>
        <br></br>
        <br></br>
        <button type="submit" id="bt">Submit</button>
    </from>
    </div>
        </div>
      
    );
    }

export default BuildingOwners;
import React from 'react'
import"./Buildinglist.css";

const Buildinglist=()=>{
  return (
    <div class="building">
        <h3 id="row1">Buliding Owners Detail</h3>
        <p>
            Name:{""}
            {localStorage.getItem("Name")
        ?localStorage.getItem("Name")
    :"NA"}
        </p>
        <br></br>
        <p>
            Address:{""}
            {localStorage.getItem("Address")
            ?localStorage.getItem("Address"):"NA"}
    
        </p>
        <br></br>
        <p>
        Percentage:{""}
            {localStorage.getItem("Percentage")
            ?localStorage.getItem("Percentage"):"NA"}
        </p>
        <br></br>
        <p>
            Email:{""}
            {localStorage.getItem("Email")
            ?localStorage.getItem("Email"):"NA"}
        </p>
        <br></br>
        <p>
            AdharNo:{""}
            {localStorage.getItem("AdharNo")
            ?localStorage.getItem("AdharNo"):"NA"}
        </p>
        <br></br>
        <p>
            PanNo:{""}
            {localStorage.getItem("PanNo")
            ?localStorage.getItem("PanNo"):"NA"}
        </p>
        <br></br>
        <p>
            Aggrement:{""}
            {localStorage.getItem("Aggrement")
            ?localStorage.getItem("Aggrement"):"NA"}
        </p>
        <br></br>
        <p>
           Status:{""}
            {localStorage.getItem("Status")
            ?localStorage.getItem("Status"):"NA"}
        </p>
    </div>
    
  );
}

export default Buildinglist;