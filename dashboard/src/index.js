import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./index.css";

axios.interceptors.request.use((config) => {
 const token = localStorage.getItem("token");

 if (token) {
  config.headers.Authorization = `Bearer ${token}`;
 }

 return config;
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <React.StrictMode>
  <BrowserRouter>
   <Routes>
    <Route path='/*' element={<Home />} />
   </Routes>
  </BrowserRouter>
 </React.StrictMode>
);
