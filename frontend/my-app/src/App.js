
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './pages/login'
import Signup from './pages/signup';
import Homepage from './pages/Homepage'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      
        <Route index element={<Login />}/>
        <Route path ="Signup" element = {<Signup/>}></Route>
        <Route path="Homepage" element={<Homepage/>} > </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
