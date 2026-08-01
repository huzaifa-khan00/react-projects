import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import Faq from './pages/Faq';
import Layout from "./components/Layout";
import Products from "./pages/Products";
import Product from "./pages/Product";


function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<Faq />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/product-details/:prodId" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
