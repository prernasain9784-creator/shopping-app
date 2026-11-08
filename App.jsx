import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import ProtectedRoute from "./ProtectedRoute";

import Home from "./Home";
import Shop from "./Shop";
import Product from "./Product";
import Cart from "./Cart";
import Contact from "./Contact";
import Login from "./Login";
import Checkout from "./Checkout";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
