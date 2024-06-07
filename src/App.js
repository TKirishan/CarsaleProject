import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import DropDown from './pages/DropDown';
import Service from './pages/Service';
import NewestCars from './pages/NewestCars';
import Featuredcars from './pages/Featuredcars';
import Clients from './pages/Clients';
import Footer from './pages/Footer';
import Brands from './pages/Brands';
import Carcart from './pages/Carcart';
import Carsdetails from './pages/Carsdetails';
import Signin from './pages/Signin';
import { CartProvider } from './pages/CartContext';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DropDown />
      <br />
      <Service />
      <NewestCars />
      <br />
      <Featuredcars />
      <br /><br />
      <Clients />
      <Brands />
      <Footer />
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Carcart />} />
          <Route path="carsdetails" element={<Carsdetails />} />
          <Route path="Signin" element={<Signin/>} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
