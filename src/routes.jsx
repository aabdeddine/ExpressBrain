//import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
 
//history
//import { history } from './helpers/history';
 
//pages
import Home from "./components/home"
import Login from "./components/login"
import Ranking from "./components/ranking"
import CreateUser from "./components/createUser"
//import RouteGuard from "./components/routeGuard";


 
function Routes() {
   return (
       <BrowserRouter >
           <Routes>
               <Route
                   path="/"
                   component={<Home/>}
               />
               <Route
                   path="/login"
                   component={<Login/>}
               />
               <Route
                   path="/ranking"
                   component={<Ranking/>}
               />
               <Route
                   path="/createUser"
                   component={<CreateUser/>}
               />
               
           </Routes>
       </BrowserRouter>
   );
}
 
export default Routes