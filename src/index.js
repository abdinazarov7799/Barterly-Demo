import React from 'react';
import ReactDOM from 'react-dom/client';
import  'bootstrap/dist/css/bootstrap.css' ;
import './index.css';
import App from "./pages/Home/App";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import AddItems from "./pages/AddItems/AddItems";
import SuccessPage from "./pages/SuccessefulPage/SuccessPage";
import Item from "./pages/Item/Item";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import CategoryPage from "./pages/CategoryPage/CategoryPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/addItems" element={<AddItems />} />
                <Route path="/successeful-page" element={<SuccessPage />} />
                <Route path="/product/:id" element={<Item />} />
                <Route path="/categories/:category_id" element={<CategoryPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    </React.StrictMode>
);