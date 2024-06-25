import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './Pages/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Foods from './Pages/Foods'
import Registering from './Pages/Registering';
import RegComplete from './components/RegComplete';
import SignUP from './components/SignUP';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/register" element={<Registering/>}/>
        <Route path='/reg' element={<RegComplete/>}/>
        <Route path='/signup' element={<SignUP/>}/>
       
      </Routes>
    </div>
  );
}

export default App;
