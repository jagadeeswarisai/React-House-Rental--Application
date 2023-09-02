
import { Routes,Route } from 'react-router-dom';
import './App.css';
import LoginPage from './Component/LoginPage';
import Dashboard from './Component/Dashboard';
import Building from './Component/Building';
import BuildingOwners from './Component/BuildingOwners';
import Buildinglist from './Component/Buildinglist';
import NewBuilding from './Component/NewBuilding';
import NewBuildingOwners from './Component/NewBuildingOwners';
import NewBuildingOwnerslist from './Component/NewBuildingOwnerslist';
import Unit from './Component/Unit';
import UnitForm from './Component/UnitForm1';
import UnitFormList from './Component/UnitFormList';
import House from './Component/House';
import HousesForm from './Component/HousesForm';
import HousesDetail from './Component/HousesDetail';
import Tenat from './Component/Tenat';
import Tenats from './Component/TenatsForm';
import TenantsDetail from './Component/TenantsDetail';
import Billing from './Component/Billing';
import NewInvoice from './Component/NewInvoice';
import NewInvoiceDetail from './Component/NewInvoiceDetail';




function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/dashboard" element={<Dashboard/>}>
          <Route path="building" element={<Building/>}>
          <Route path="buildingowners" element={<BuildingOwners/>}/>
         <Route path="buildinglist"element={<Buildinglist/>}/>
            </Route>
            <Route path="NewBuilding" element={<NewBuilding/>}>
              <Route path="newbuildingowners" element={<NewBuildingOwners/>}/>
              <Route  path="newbuildingownerslist" element={<NewBuildingOwnerslist/>}/>
            </Route>
            <Route path="unit"element={<Unit/>}>
              <Route path="unitform" element={<UnitForm/>}/>
              <Route path="unitformlist" element={<UnitFormList/>}/>
            </Route>
            <Route path="House" element={<House/>}>
              <Route path="housesform"element={<HousesForm/>}/>
              <Route path="housesdetail" element={<HousesDetail/>}/>
            </Route>
            <Route path="tenat"element={<Tenat/>}>
              <Route path="tenats" element={<Tenats/>}/>
              <Route path="tenantsdetail"element={<TenantsDetail/>}/>
            </Route>
            <Route path="billing"element={<Billing/>}>
     <Route path="newinvoice"element={<NewInvoice/>}/>
     <Route path="newinvoicedetail"element={<NewInvoiceDetail/>}/>  
            </Route>
      </Route>
      </Routes>

      
    </div>
  );
}

export default App;
