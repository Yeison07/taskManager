import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider,Route, Routes } from 'react-router-dom';
import App from './App'
import { Router } from './app/routes';
import {QueryClientProvider,QueryClient} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

const queryClient= new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={Router} />
    <ReactQueryDevtools/>
    </QueryClientProvider>
  </React.StrictMode>,
)
