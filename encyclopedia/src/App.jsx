import { useState } from 'react';
import Navbar from "./Components/Navbar.jsx"
import {Outlet, RouterProvider} from 'react-router-dom';
import Layout from "./Pages/Layout.jsx";
import AdminLayout from './Common/AdminLayout.jsx';
import ManagePlants from './Pages/ManagePlants.jsx';
import Home from "./Pages/Home.jsx"
import PlantDetails from "./Pages/PlantDetails.jsx"
import Plants from "./Pages/Plants.jsx";
import Login from './Pages/Login.jsx';
import Registration from './Pages/Registration.jsx';
import  Router  from "./Pages/Router.jsx"
import './App.css'

function App() {

  return (
    
    <RouterProvider router={Router} />
  )
}

export default App
