import React from "react";
import"./BuildingOwnersDetail.css";

function BuildingOwnersDetail()
{
  return(
    <div>
  
    <img src={require("./images/Owner.jpg")} width="100" height="100" alt="cam" id="max1"/>

    
    <div>
      <div class="max3">
      <h2>Name:Arunesh.K</h2>
      <h3>PhoneNumber:9345234213</h3>
      <h3>Mail:aruneshk@gmail.com</h3>
      <h3>Status:Active</h3>
      <h3>Address:No41,KkNagar,RedHills,Chennai</h3>
      <img src={require("./images/house1.png")} width="300" height="300" alt="cam" id="max5"/>
      </div>
      <div class="max4">
      <h3>Residentail Appartment</h3>
      <li>Flat</li>
      <li>AppartMent</li>
      <li>Independent/BuilderFloor</li>
      <li>FormHouses</li>
      <h3>Commerical</h3>
      <li>IndependantHouses/Villa</li>
      <li>Plot</li>
      <li>Land</li>
      <li>ServiceApartment</li>
      <h3>RentHouse Availablerate:</h3>
      <p>10000 starting,50000 ..</p>
      <h3>ApartMentRates:</h3>
      <p>Starting 12 laks to 70laks..</p>
      <h3>Agent Commession:</h3>
      <p>10%</p>
      <h3>Contact Numbers</h3>
      <li>0414124351</li>
      <li>0258694581</li>
      </div>

    </div>
      </div>
  );
  }
  export default BuildingOwnersDetail;
  
