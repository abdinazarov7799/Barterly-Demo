import React from 'react';
import ReactDOM from 'react-dom/client';
import  'bootstrap/dist/css/bootstrap.css' ;
import './index.css';
import App from "./Layouts/App";
import {RouterProvider} from "react-router";
import ErrorPage from "./Layouts/errorPage/ErrorPage";
import AddItems from "./Layouts/AddItems/AddItems";
import SuccessPage from "./Layouts/SuccessefulPage/SuccessPage";
import {createBrowserRouter} from "react-router-dom";

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

    }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
