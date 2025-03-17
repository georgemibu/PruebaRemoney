import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import PaymentMethods from "../components/PaymentMethods";

const PagoCheckout = () => {
  const { cart } = useCart(); // Obtener carrito desde el contexto
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    direccion: "",
    telefono: "",
  });

  // Función para manejar cambios en el formulario
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validar si el formulario está completo
  const isFormValid = Object.values(formData).every((value) => value !== "");

  if (cart.length === 0) {
    return <h2 className="text-center text-xl font-semibold">No hay productos en el carrito.</h2>;
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-4">Confirmar Compra</h2>

      {/* Resumen de Productos */}
      <div className="space-y-4 mb-6">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between border-b pb-2">
            <span>{item.nombre} x{item.quantity}</span>
            <span>${item.precio * item.quantity}</span>
          </div>
        ))}
      </div>

      <p className="mt-4 text-lg font-semibold">
        <strong>Total:</strong> ${cart.reduce((acc, item) => acc + item.precio * item.quantity, 0)}
      </p>

      {/* Formulario de Facturación */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-xl font-semibold mb-4">Información de Facturación</h3>
        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="font-medium">Nombre Completo:</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              required
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Correo Electrónico:</label>
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleInputChange}
              required
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Dirección de Envío:</label>
            <input
              type="text"
              name="direccion"
              value={formData.direccion}
              onChange={handleInputChange}
              required
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Número de Teléfono:</label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleInputChange}
              required
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Botón para confirmar compra */}

      <div className="checkout-container">
      <PaymentMethods />
      
    </div>
      
    </div>
  );
};

export default PagoCheckout;

