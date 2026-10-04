import { createBrowserRouter } from 'react-router-dom';
import Layout from "../Pages/Layout.jsx";
import Home from "../Pages/Home.jsx"
import PlantDetails from "../Pages/PlantDetails.jsx"
import Plants from "../Pages/Plants.jsx";
import Login from "../Pages/Login.jsx"
import Registration from '../Pages/Registration.jsx';
import UserDashboard from "../Common/UserDashboard.jsx";
import AdminDashboard from "../Common/AdminDashboard.jsx";
import ManageUsers from "../Pages/ManageUsers.jsx";
import AdminLayout from "../Common/AdminLayout.jsx";
import ProtectedRoute from "../Common/ProtectedRoute.jsx";
import ManagePlants from "../Pages/ManagePlants.jsx";
import ManageData from './ManageData.jsx';
import UserNavbar from "../Common/UserNavbar.jsx";
import UserLayout from '../Common/UserLayout.jsx';
import PlantCare from '../Pages/PlantCare.jsx';
import Feedback from '../Pages/Feedback.jsx';
import ManageFeedback from '../Pages/ManageFeedback.jsx';
import PlantMarket from '../Pages/PlantMarket.jsx';
import Tracking from "../Pages/Tracking";
import ManagePlantCare from "../Pages/ManagePlantCare.jsx";
import ManagePlantMarket from "../Pages/ManagePlantMarket.jsx";


const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element:<Home />,
      },
      {
        path: 'plants',
        element: <Plants />,
       
      },
      {
        path:"plants/:id",
        element:<PlantDetails />
      },
      {
        path:"plants-details",
        element:<PlantDetails />
      },
      {
        path: "plantcare", 
        element: <PlantCare /> 
      },
        {
         path: "plantmarket",
         element: <PlantMarket />,
       },
        {
         path: "tracking",
         element: <Tracking />,
       },
       {
         path: "feedback", 
         element: <Feedback /> 
        },
       { 
         path: "login", 
         element: <Login /> 
        },
       
       { 
         path: "registration", 
         element: <Registration /> 
        },
         {
        path: "user-dashboard",
        element: (
          <ProtectedRoute role="user">
            <UserDashboard />
          </ProtectedRoute>
        ),
      },
    ]
  },


 // =====================================
  // ADMIN LAYOUT
  // =====================================
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      // Admin Dashboard
      {
        path: "dashboard",
        element: (
          <ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>
        ),
      },

      // Manage Plants
      {
        path: "manage-plants",
        element: (
          <ProtectedRoute role="admin">
            <ManagePlants />
          </ProtectedRoute>
        ),
      },

      {
        path: "manage-data",
        element: (
          <ProtectedRoute role="admin">
            <ManageData />
          </ProtectedRoute>
         ),
      },
      {
        path: "manage-plantcare",
        element: (
          <ProtectedRoute role="admin">
            <ManagePlantCare />
          </ProtectedRoute>
         ),
      },
      {
        path: "manage-plantmarket",
        element: (
          <ProtectedRoute role="admin">
            <ManagePlantMarket />
          </ProtectedRoute>
         ),
      },
      {
        path: "manage-feedback",
        element: (
          <ProtectedRoute role="admin">
            <ManageFeedback />
          </ProtectedRoute>
         ),
      },
      {
        path: "manage-users",
        element: (
          <ProtectedRoute role="admin">
            <ManageUsers />
          </ProtectedRoute>
         ),
      },
      
    ],
  },
]);


export default Router;