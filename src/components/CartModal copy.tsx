import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { Product } from "../types";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal = ({ isOpen, onClose }: CartModalProps) => {
  const { cart, removeFromCart } = useCart();

  const handleRemoveFromCart = (id: number) => {
    removeFromCart(id); // Pasamos el id del producto
  };

  const handleCheckout = () => {
    // Aquí puedes agregar la lógica para redirigir a la página de pago
    alert("Ir a checkout");
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold text-center mb-4">Carrito</h2>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Tu carrito está vacío</p>
        ) : (
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src={item.imagen}
                    alt={item.nombre}
                    className="w-16 h-16 object-cover mr-4"
                  />
                  <span>{item.nombre}</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-4">${item.precio * item.quantity}</span>
                  <span className="text-sm text-gray-500">x{item.quantity}</span>
                  <button
                    className="ml-4 text-red-500"
                    onClick={() => handleRemoveFromCart(item.id)} // Pasamos solo el id
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 text-center">
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            onClick={handleCheckout}
          >
            Finalizar compra
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
