import React from "react";
import"./TenatsDetail.css";
const TenantsDetail=()=>
{
    return(
        <div class="row12">
        <div class="row11">TenatsDetail</div>
        <p id="two">
            TenantsName:{""}
            {localStorage.getItem("TenantsName")?
            localStorage.getItem("TenantsName")
        :"NA"}
        </p>
        <br>
        </br>
        <p id="two">
        MobileNumber:{""}
            {localStorage.getItem("MobileNumber")?
            localStorage.getItem("MobileNumber")
        :"NA"}
        </p>
        <br></br>
        <p id="two"> 
            IdNumber:{""}
            {localStorage.getItem("IdNumber")?
            localStorage.getItem("IdNumber")
        :"NA"}
        </p>
        <br></br>
        <p id="two">
            HouseUnit:{""}
            {localStorage.getItem("Houseunit")?
             localStorage.getItem("Houseunit")
            :"NA"}
        </p>
        <br></br>
        <p id="two">
        DateOccupied:{""}
        {localStorage.getItem("DateOccupied")?
        localStorage.getItem("DateOccupied")
    :"NA"}
        </p>
        <br></br>
        <p id="two">
        HouserentDeposit:{""}
        {localStorage.getItem("HouserentDeposit")?
        localStorage.getItem("HouserentDeposit")
    :"NA"}
     </p>
    <br></br>
    <p id="two">
    ElectricityDeposit:{""}
    {localStorage.getItem("ElectricityDeposit")?
    localStorage.getItem("ElectricityDeposit")
:"NA"}
    </p>
    <br></br>
    <p id="two">
    WaterDeposit:{""}
    {localStorage.getItem("WaterDeposit")?
    localStorage.getItem("WaterDeposit")
:"NA"}
    </p>
    <br></br>
    <p id="two">
    descripation:{""}
    {localStorage.getItem("descripation")?
    localStorage.getItem("descripation")
:"NA"}
    </p>
       
        </div>
    );
}
export default TenantsDetail;