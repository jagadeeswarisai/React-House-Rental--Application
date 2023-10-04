
import { useState } from "react";
import"./NewBuildingOwners.css";
function NewBuildingOwners()
{
    const[BuildingName ,setBuildingName]=useState("");
    const[Floor ,setFloor]=useState("");
    const[Owner ,setOwner]=useState("");
    const[Location ,setLocation]=useState("");
    const handleSubmit =()=>
    {
        if(BuildingName==="")
        {
            alert("BuildingName is required");
        }
        else if(Floor==="")
        {
            alert("Floor is required");
        }
        else if(Owner==="")
        {
            alert("Owner is required");
        }
        else if(Location==="")
        {
            alert("Location is required");
        }
        else{
            localStorage.setItem("BuildingName",BuildingName);
            localStorage.setItem("Floor",Floor);
            localStorage.setItem("Owner",Owner)
            localStorage.setItem("Location",Location);
    
    }
}
    return(
       
      <div>
        <img src={require("./images/building.jpg")} width="487.625px" height="365.75px" alt="cam" id="img1"/>
        <div  id="p2" >
        <from>
          
            <div>
                <label id="p3">BuildingName:</label>
                <input type="text" id="BuildingName" onChange={(e)=>setBuildingName(e.target.value)}></input>
            </div>
            <br></br>
            <div>
                <label id="p3">Floor:</label>
                <select id="Floor" onChange={(e)=>setFloor(e.target.value)}>
                <option value="Please Select Here">Please Select Here..</option>
                <option value="1st Floor">1st Floor</option>
                <option value="2nd Floor">2nd Floor</option>
                <option value="3rdFloor">3rdf Floor</option>
                <option value="4th Floor">4th Floor</option>
                  <option value="5th Floor">5th Floor</option>
                </select>
            </div>
            <br></br>
            <div>
                <label id="p3">Owner:</label>
                <select id="Owner" onChange={(e)=>setOwner(e.target.value)}>
                <option value="Please Select Here">Please Select Here..</option>
                <option value="Arun">Arun</option>
                <option value="Ruthresh">Ruthresh</option>
                <option vaue="Sridhar">Sridhar</option>
                </select>
            </div>
            <br></br>
            <div>
                <label id="p3">Location:</label>
                <select id="Location" onChange={(e)=>setLocation(e.target.value)}>
                <option value="Please Select Here">Please Select Here..</option>
                <option value="RedHills">RedHills</option>
                <option Value="Aavadi">Aavadi</option>
                <option value="Guduvancheery">Guduvancheery</option>
                </select>
            </div>
            <br>
            </br>
            <br></br>
            <button type="submit" onClick={()=>handleSubmit()} id="b">Submit</button>
            
        </from>
        </div>
        </div>
    );
}

export default NewBuildingOwners;