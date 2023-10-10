import React from "react";
import"./HousesDetail.css";
const HousesDetail =()=>
{
   
    return(
        <div class="row8">
            <div class="row7">New Houses Detail</div>
            <br></br>
            <p id="two">
            UnitNoName:{""}
                {localStorage.getItem("UnitNoName")?
                localStorage.getItem("UnitNoName")
            :"NA"}
            </p>
            <br></br>
            <p id="two">
                UnitType1:{""}
                {localStorage.getItem("UnitType1")?
                localStorage.getItem("UnitType1")
                :"NA"}
            </p>
            <br></br>
            <p id="two">
                Building:{""}
                {localStorage.getItem("Building")?
                localStorage.getItem("Building")
            :"NA"}
            </p>
            <br></br>
            <p id="two">
                Floors1:{""}
                {localStorage.getItem("Floors1")?
                localStorage.getItem("Floors1")
                :"NA"}
            </p>
            <br></br>
            <p id="two">
                MonthlyHouseRent:{""}
                {localStorage.getItem("MonthlyHouseRent")?
                localStorage.getItem("MonthlyHouseRent")
            :"NA"}
            </p>
            <br></br>
            <p id="two">
            FixedElectricityCharge:{""}
            {localStorage.getItem("FixedElectricityCharge")?
             localStorage.getItem("FixedElectricityCharge")
            :"NA"}
            </p>
            <br></br>
            <p id="two">
            FixedWaterCharge:{""}
            {localStorage.getItem("FixedWaterCharge")?
            localStorage.getItem("FixedWaterCharge")
        :"NA"}
            </p>
            <br></br>
            <p id="two">
            Descripation:{""}
            {
                localStorage.getItem("Descripation")?
                localStorage.getItem("Descripation")
           :"NA" }
            </p>

        </div>
    )
}
export default HousesDetail;