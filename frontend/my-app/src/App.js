
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './pages/login'
import Signup from './pages/signup';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      
        <Route index element={<Login />}/>
        <Route path ="Signup" element = {<Signup/>}></Route>
        <Route path="login" element={<Login/>} > </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
