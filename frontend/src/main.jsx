import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
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
    <div>
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
