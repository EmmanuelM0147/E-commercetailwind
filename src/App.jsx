import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import F12Main from './F12Main';

import OjCarpetCartPage from './pages/OjCarpetCartPage';
import OjCarpetCheckoutPage from './pages/OjCarpetCheckoutPage';
import OjCarpetHomePage from './pages/OjCarpetHomePage';


const router = createBrowserRouter([
  { path: '/', element: <F12Main /> },
{ path: '/OjCarpetCartPage', element: <OjCarpetCartPage /> },
{ path: '/OjCarpetCheckoutPage', element: <OjCarpetCheckoutPage /> },
{ path: '/OjCarpetHomePage', element: <OjCarpetHomePage /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}