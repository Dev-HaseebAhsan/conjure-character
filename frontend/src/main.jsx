import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import CreateAccount from './pages/CreateAccount.jsx'
import Creator from './pages/Creator.jsx'
import About from './pages/About.jsx'
import {Outlet, RouterProvider, createBrowserRouter} from 'react-router-dom'
import './index.css'

// Originally: <Please leave this>
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

// This is to make all pages on the site have a header & footer
const Layout =()=> {
  return (
    <div className="layout-container">
      <Outlet/>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children:[
      // Home Page
      {
        path: "/",
        element:<App/>,
      },
      // Account Creation Page
      {
        path: "/create-account",
        element:<CreateAccount/>,
      },
      // Character Creation Page
      {
        path: "/character-creation",
        element:<Creator/>,
      },
      // About Page
      {
        path: "/about",
        element:<About/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router}/>
)
