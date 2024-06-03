import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './Pages/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Foods from './Pages/Foods'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/foods" element={<Foods />} />

      </Routes>
    </div>
  );
}

export default App;
