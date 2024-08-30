import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Home() {
  return <h1>Home Page</h1>;
}

function Products() {
  return <h1>Products Page</h1>;
}

function Cart() {
  return <h1>Cart Page</h1>;
}

function Checkout() {
  return <h1>Checkout Page</h1>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
