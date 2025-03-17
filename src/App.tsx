import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import Checkout from "./pages/Checkout";
import CartCheckout from "./pages/CartCheckout";
import products from "./data/products";
import { Product } from "./types";
import Navbar from "./components/NavBar";
import { CartProvider } from "./context/CartContext";
import PagoCheckout from "./pages/PagoCheckout";


const App: React.FC = () => {
  return (
    <Router>
      <CartProvider> {/* Solo envuelve la aplicación una vez */}
        <div className="min-h-screen bg-gray-100 p-6">
          <Navbar /> {/* Solo una instancia de Navbar */}
          <Routes>
            <Route path="/" element={<ProductList products={products as Product[]} />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cartcheckout" element={<CartCheckout />} />
            <Route path="/pago-checkout" element={<PagoCheckout />} />
            </Routes>
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;
