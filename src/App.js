
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
              
            </Route>
      </Route>
      </Routes>

      
    </div>
  );
}

export default App;
