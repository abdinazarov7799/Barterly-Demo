import React from 'react';
import ReactDOM from 'react-dom/client';
import  'bootstrap/dist/css/bootstrap.css' ;
import './index.css';
import App from "./pages/Home/App";
import {RouterProvider} from "react-router";
import ErrorPage from "./pages/errorPage/ErrorPage";
import AddItems from "./pages/AddItems/AddItems";
import SuccessPage from "./pages/SuccessefulPage/SuccessPage";
import {createBrowserRouter} from "react-router-dom";
import Item from "./pages/Item/Item";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/addItems",
        element: <AddItems />,
    },
    {
        path: "*",
        element: <ErrorPage />,
    },
    {
        path: '/successeful-page',
        element: <SuccessPage />
    },
    {
        path: '/product/:id',
        element: <Item />
    }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
