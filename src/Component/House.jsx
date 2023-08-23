import React from 'react';
import{Link, Outlet}from "react-router-dom";
import "./House.css";

function House()
{
    return (
        <nav>
      <div class="header">
        <div class="Dash">
        <Link id="dash"to="/dashboard/house/housesformlist">HousesDetail</Link>
        </div>
        <div class="own">
        <Link id="own"to="/dashboard/house/housesform">+HousesForm</Link>
        </div>
        <Outlet/>
      </div>
      
      </nav>
    );
  }


export default House;