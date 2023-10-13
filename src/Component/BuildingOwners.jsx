import React from "react";
import Buildinglist from "./Buildinglist";


const Owners=[

 
    {  img: require("./images/Owner.jpg"),id:"Id:1", Name:"Name:Arunesh", PhoneNo:"PhoneNo:1234545", Mail:"Mail:arun@gmail.com" },
    {img: require("./images/owner1.png"),id:"Id:2", Name:"Name:Ruthresh",  PhoneNo:"PhoneNo:123459", Mail:"Mail:ruthu@gmail.com"},
    {   img: require("./images/Owner2.jpg"),id:"Id:3", Name:"Name:Teju",  PhoneNo:"PhoneNo:123456", Mail:"Mail:teju@gmail.com" },
    {  img: require("./images/owner3.png"),id:"Id:4", Name:"Name:Ravi",  PhoneNo:"PhoneNo:123452", Mail:"Mail:ravi@gmail.com"},
    {   img: require("./images/owner4.png"),id:"Id:5", Name:"Name:Anitha",  PhoneNo:"PhoneNo:123454", Mail:"Mail:ani@gmail.com"},
];


function BuildingOwners()
    {
        return(
<div>
    <div className="Container">
        <div className="display-1"></div>
            <h1>Building Owner Information</h1>
            {Owners.map((Owner)=> <Buildinglist Key ={Owner.id} img={Owner.img}  id={Owner.id} Name={Owner.Name} PhoneNo={Owner.PhoneNo}
             Mail={Owner.Mail}/>
            
             )};
            </div>
         <Buildinglist/>
            </div>

        );
    }
export default BuildingOwners;