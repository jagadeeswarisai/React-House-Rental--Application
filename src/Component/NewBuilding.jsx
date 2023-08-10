import React from "react";
import{Link, Outlet}from "react-router-dom";
function NewBuilding()
{
    return(
<nav>
      <div class="header">
        <div class="Dash">
        <Link id="dash"to="/dashboard/newbuilding/newbuildingownerslist"> Building Details</Link>
        </div>
        <div class="own">
        <Link id="own"to="/dashboard/newbuilding/newbuildingowners">Add New Buildings</Link>
        </div>
    <Outlet/>
      </div>
      
      </nav>
    );
}
export default NewBuilding;