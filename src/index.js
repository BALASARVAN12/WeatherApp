import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
 } from "react-router-dom";

 import MainPage from './pages/MainPage';

 const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />
  },
 ]);


 ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
 );


