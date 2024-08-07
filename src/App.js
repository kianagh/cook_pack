import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './Pages/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Foods from './Pages/Foods'
import Registering from './Pages/Registering';
import RegComplete from './components/RegComplete';
import SignUP from './components/SignUP';
import Confirming from './components/Confirming';
import Login from './Pages/Login';
import Materials from './components/Materials';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/register" element={<Registering/>}/>
        <Route path='/reg' element={<RegComplete/>}/>
        <Route path='/signup' element={<SignUP/>}/>
        <Route path='/conforming' element={<Confirming/>}/>
        <Route path='/login' element={<Login/>}/>  
        <Route path="/foods/:id" element={<Materials/>} />
        {/* <Route path="/" element={<Menu />} />
        <Route path="/foods/:category" element={<FoodsItems />} /> */}
      </Routes>
    </div>
  );
}

export default App;
