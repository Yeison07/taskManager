import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider,Route, Routes } from 'react-router-dom';
import App from './App'
import { Router } from './app/routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router}></RouterProvider>
  </React.StrictMode>,
)
