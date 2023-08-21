import React from 'react';
import{Link, Outlet}from "react-router-dom";
import "./Building.css";

function Building()
{
    return (
        <nav>
      <div class="header">
        <div class="Dash">
        <Link id="dash"to="/dashboard/building/buildinglist">List Of Building Owner</Link>
        </div>
        <div class="own">
        <Link id="own"to="/dashboard/building/buildingowners">+Add New Owners</Link>
        </div>
        <Outlet/>
      </div>
      
      </nav>
    );
  }


export default Building;
