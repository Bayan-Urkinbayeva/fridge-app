import './App.css'
import {React} from "react"
import Home from "./pages/Home"
import { Routes , Route } from "react-router-dom"
import Orders from "./pages/Orders"
import Profile from "./pages/Profile"
import Order from './pages/Order'
import Registration from "./pages/Registration"
import Login from "./pages/Login"
import ScanMe from './pages/ScanMe'
function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path='/orders/:id' element={<Order/>}/>
        <Route exact  path="/orders" element={<Orders/>} />
        <Route exact path ="/profile" element={<Profile/>}/>
        <Route exact path="/registration" element={<Registration/>}  />
        <Route exact path="/login" element={<Login/>}  />
        <Route exact path="/scanme" element={<ScanMe/>}  />
      </Routes>
     
    </div>
  );
}

export default App;
