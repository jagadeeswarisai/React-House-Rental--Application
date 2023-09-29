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