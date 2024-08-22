import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './Pages/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodsPage from './Pages/FoodsPage'
import Registering from './Pages/Registering';
import RegComplete from './components/RegComplete';
import SignUP from './components/SignUP';
import Confirming from './components/Confirming';
import Login from './Pages/Login';
import Materials from './components/Materials';
import PersianCalendar from './components/PersianCalendar';
import Comments from './components/Comments';
import Pay from './components/Pay';
import ChoooseAddressPart from './components/ChoooseAddressPart';
import FillAddress from "./components/FillAddress"
import Reg from "./components/Reg"
import Order from "./components/Order.js"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/foodpage" element={<FoodsPage />} />
        <Route path="/register" element={<Registering/>}/>
        <Route path='/reg' element={<RegComplete/>}/>
        <Route path='/signup' element={<SignUP/>}/>
        <Route path='/conforming' element={<Confirming/>}/>
        <Route path='/login' element={<Login/>}/>  
        <Route path='/foods/:id'  element={<Materials/>} />
        <Route path='/calendar' element={<PersianCalendar/>}/>
        <Route path='/comments' element={<Comments/>}/>
        <Route path='/pay' element={<Pay/>}/>
        <Route path='/add' element={<ChoooseAddressPart/>}/>
        <Route path='/map' element={<FillAddress/>}/>
        <Route path ='/buyaccount' element={<Reg/>}/>
        <Route path='/order' element={<Order/>}/>
      </Routes>
    </div>
  );
}

export default App;
