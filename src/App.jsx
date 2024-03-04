//import { useState } from 'react'
import Header from './components/header'
//import Login from './components/login'
import './App.css'
import { setAuthToken } from './components/setAuthTocken'
//import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
 

 
//pages
import Home from "./components/home"
import Login from "./components/login"
import Ranking from "./components/ranking"
import CreateUser from "./components/createUser"
import Teams from './components/teams';
//import RouteGuard from "./components/routeGuard";

function App() {
 //check jwt token
 const token = localStorage.getItem("token");
 if (token) {
     setAuthToken(token);
 } 

  return (
    <>
        <Header/>

      <BrowserRouter >
           <Routes>
               <Route
                   path="/"
                   element={<Home/>}
               />
               <Route
                   path="/login"
                   element={<Login/>}
               />
               <Route
                   path="/ranking"
                   element={<Ranking/>}
               />
               <Route
                   path="/createUser"
                   element={<CreateUser/>}
               />
               <Route
                   path="/teams"
                   element={<Teams/>}
               />
               
           </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
