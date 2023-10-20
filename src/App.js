
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
import TranscationPay from './Component/TranscationPay';
import PaymentForm from './Component/PaymentForm';
import PaymentDetail from './Component/PaymentDetail';
import SignUp from './Component/SignUp';
import Home from './Component/Home';
import BuildingOwnersDetail from "./Component/BuildingOwnersDetail";








function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/dashboard" element={<Dashboard/>}>
          <Route path="home" element={<Home/>}/>
          <Route path="building" element={<Building/>}>
          <Route path="buildingowners" element={<BuildingOwners/>}/>
          <Route path="owner/:Name" element={<BuildingOwnersDetail />} />
         <Route path="buildinglist"element={<Buildinglist/>}/>
            </Route>
            <Route exact path="NewBuilding" element={<NewBuilding/>}>
              <Route exact path="newbuildingowners" element={<NewBuildingOwners/>}/>
              <Route  exact path="newbuildingownerslist" element={<NewBuildingOwnerslist/>}/>
            </Route>
            <Route  exact path="unit"element={<Unit/>}>
              <Route exact path="unitform" element={<UnitForm/>}/>
              <Route exact path="unitformlist" element={<UnitFormList/>}/>
            </Route>
            <Route exact path="House" element={<House/>}>
              <Route exact path="housesform"element={<HousesForm/>}/>
              <Route exact path="housesdetail" element={<HousesDetail/>}/>
            </Route>
            <Route exact path="tenat"element={<Tenat/>}>
              <Route exact path="tenats" element={<Tenats/>}/>
              <Route exact path="tenantsdetail"element={<TenantsDetail/>}/>
            </Route>
            <Route exact path="billing"element={<Billing/>}>
     <Route exact path="newinvoice"element={<NewInvoice/>}/>
     <Route exact path="newinvoicedetail"element={<NewInvoiceDetail/>}/>  
            </Route>
          <Route exact path="transcationpay"element={<TranscationPay/>}>
            <Route exact path="paymentform" element={<PaymentForm/>}/>
            <Route exact path="paymentdetail"element={<PaymentDetail/>}/>
          </Route>
    </Route>
  
      </Routes>
   
      
    </div>
  );
}

export default App;
