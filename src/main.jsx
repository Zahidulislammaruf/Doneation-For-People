import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import Home from './Component/Home/Home';
import Donation from './Component/Donation/Donation';
import Statistics from './Component/Statistics/Statistics';

import SeeCard from './Component/SeeCard/SeeCard';
import ErrorPage from './Component/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },{
        path: '/donation',
        element : <Donation></Donation>,
        loader : () => fetch('../data.json')
      },
      {
        path : '/statistics',
      element : <Statistics></Statistics>,
      loader : () => fetch('../data.json')
      },
      {
        path : '/see/:id',
        element : <SeeCard></SeeCard>,
        loader : () => fetch('../data.json')
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
