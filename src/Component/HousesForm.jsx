import React, { useState } from "react";
function HousesForm()
{
    return(
        <form class="box3">
        <div id="box2">HousesUnitForm</div>
        <div>
            <label>UnitNo.Name:</label>
            <input type="text" id="UnitNo.Name"/>
        </div>
        <div>
            <label>Unittype:</label>
            <select id="Unittype1">
                <option value="Please Select here">Please Select here..</option>
                <option value="DoubleBedRoom">DoubleBedRoom</option>
                <option value="SingleBedRoom">SingleBedRoom</option>
                <option value="Bedseeter">Bedseeter</option>
            </select>
        </div>
        <div>
            <label>Buildings:</label>
            <select id="Buildings">
                <option vlaue="Please select Here">Please Select here..</option>
                <option vlaue="kkkplaza">kkkplaza</option>
                <option value="MMMplaza">kkkplaza</option>
                <option value="plotno">plotno</option>
            </select>
        </div>
        <div>
            <label>Floors:</label>
            <select id="Floors">
                <option vlaue="Please select Here">Please Select here..</option>
                <option vlaue="GroundFloor">GroundFloor</option>
                <option value="FirstFloor">FirstFloor</option>
                <option value="SecondFloor">SecondFloor</option>
                <option vlaue="ThirdFloor">ThirdFloor</option>
            </select>
        </div>
        <div>
            <label>MonthlyHouserent:</label>
            <input type="text" id="MonthlyHouserent"/>
        </div>

        <div>
            <label>FixedElectricityCharge:</label>
            <input type="text" id="FixedElectricityCharge"/>
        </div>

        <div>
            <label>FixedWaterCharge:</label>
            <input type="text" id="FixedWaterCharge"/>
        </div>

        <div>
            <label>FixedGarbageCharge:</label>
            <input type="text" id="FixedGarbageCharge"/>
        </div>
        <div>
            <label>Descripation:</label>
            <input type="text" id="Descripation"/>
        </div>
        </form>
    );
}
export default HousesForm;