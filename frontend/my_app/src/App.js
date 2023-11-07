
import './App.css';

import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './pages/login'
import Signup from './pages/signup';
import Homepage from './pages/Homepage';

//add <Route index element={<Login />}/> at line 15 to view server test page
function App() {
  return (
    <BrowserRouter>
    <Routes>
        
        <Route index element={<Login />}/>
        <Route path ="Signup" element = {<Signup/>} />
        <Route path="Homepage" element={<Homepage/>} />
        <Route path = "Homepage/:username" element={<Homepage/>}/> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;
