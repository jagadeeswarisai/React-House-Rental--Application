import React from "react";
import Buildinglist from "./Buildinglist";
import { Link } from "react-router-dom";
import"./BuildingOwners.css";


const Owners=[

 
    {  img: require("./images/Owner.jpg"), Name:"Name:Arunesh", PhoneNo:"PhoneNo:1234545", Mail:"Mail:arun@gmail.com",Status:"Status:Active" },
    {img: require("./images/owner1.png"),Name:"Name:Ruthresh",  PhoneNo:"PhoneNo:123459", Mail:"Mail:ruthu@gmail.com" ,Status:"Status:Active"},
    {  img: require("./images/owner3.png"), Name:"Name:Ravi",  PhoneNo:"PhoneNo:123452", Mail:"Mail:ravi@gmail.com" ,Status:"Status:Active"},
    {   img: require("./images/owner4.png"), Name:"Name:Anitha",  PhoneNo:"PhoneNo:123454", Mail:"Mail:ani@gmail.com" ,Status:"Status:InActive"},
    {  img: require("./images/owner5.jpg"), Name:"Name:Ariesh", PhoneNo:"PhoneNo:1234545", Mail:"Mail:ariesh@gmail.com",Status:"Status:Active" },
    {  img: require("./images/owner6.jpg"), Name:"Name:Sridhar", PhoneNo:"PhoneNo:1234545", Mail:"Mail:sri@gmail.com" ,Status:"Status:Active" },
];


function BuildingOwners()
    {
        return(
<div>
    <div className="Container">
        <div className="display-1"></div>
        {Owners.map((Owner) => (
               <Link key={Owner.Name} to={`/dashboard/building/owner/${Owner.Name}`}>
                  <Buildinglist Key img={Owner.img} Name={Owner.Name} PhoneNo={Owner.PhoneNo} Mail={Owner.Mail} Status={Owner.Status}/>
               </Link>
            ))}
            </div>
         <Buildinglist/>
            </div>

        );
    }
export default BuildingOwners;