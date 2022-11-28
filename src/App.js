import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { ToastContainer} from "react-toastify";

import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

import "react-toastify/dist/ReactToastify.css";
import Shop from './pages/Shop';
import Checkout from './pages/Checkout';

function App() {
  return (
      <>
          <BrowserRouter>
              <Navbar />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/shop/*" element={<Shop />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/checkout" element={<Checkout />} />

                  <Route path="*" element={<NotFound />} />
              </Routes>
          </BrowserRouter>
          <ToastContainer position="top-center" />
      </>
  );
}

export default App;
