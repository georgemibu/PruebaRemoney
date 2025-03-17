import React from "react";
import { useCart } from "../context/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartCheckout: React.FC = () => {
  const { cart, removeFromCart } = useCart();
  

  // Función para calcular el total del carrito
  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);
  };

  // Función para eliminar un producto del carrito
  const handleRemoveFromCart = (id: number) => {
    removeFromCart(id);
  };

  if (cart.length === 0) {
    return (
      <div className="p-6 text-center">
        <p>No hay productos en tu carrito. NADA</p>
        <Link
          to="/"
          className="text-blue-600 hover:underline"
        >
          Ir a la tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="flex justify-between gap-6 p-6">
      {/* Columna izquierda - Productos en el carrito */}
      <div className="flex-1">
        <h2 className="text-2xl font-semibold mb-4">Tu carrito</h2>
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center border-b pb-4">
              <img
                src={item.imagen}
                alt={item.nombre}
                className="w-24 h-24 object-cover mr-4"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.nombre}</h3>
                <p className="text-gray-600">${item.precio}</p>
              </div>
              <button
                className="ml-4 text-red-500"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                <FaTrashAlt />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Columna derecha - Resumen del pedido */}
      <div className="w-80">
        <h2 className="text-2xl font-semibold mb-4">Resumen del pedido</h2>
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between">
              <span>{item.nombre} x{item.quantity}</span>
              <span>${item.precio * item.quantity}</span>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="flex justify-between mt-4 font-semibold">
          <span>Total:</span>
          <span>${calculateTotal()}</span>
        </div>

        {/* Botón para realizar el pago */}
        <div className="mt-6 text-center">
          <Link
            to="/PagoCheckout" //ACA PONER LA RUTA DE PAGOS
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Realizar pago
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartCheckout;
