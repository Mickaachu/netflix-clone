import React from 'react';
import Login from './pages/Login';
import HomeScreen from './pages/HomeScreen';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  
  
 
  return (
    <div className="app">
      <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<HomeScreen />} />
        </Routes>
      </Router>
      

    </div>
  );
}

export default App;
