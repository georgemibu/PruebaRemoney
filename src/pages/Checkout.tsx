import React from "react";
import { useLocation } from "react-router-dom";

interface Product {
  nombre: string;
  precio: number;
  [key: string]: any;
}

interface LocationState {
  product: Product;
  quantity: number;
}

const Checkout = () => {
  const location = useLocation();
  const { product, quantity }: LocationState = location.state || { product: null, quantity: 1 };

  if (!product) {
    return <h2 className="text-center text-xl font-semibold">No hay productos en el carrito.</h2>;
  }

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-4 p-8">
      {/* Sección de formulario */}
      <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
        <h3 className="text-xl font-medium mb-4">Información de facturación</h3>

        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="font-medium">Nombre Completo:</label>
            <input
              type="text"
              required
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Correo Electrónico:</label>
            <input
              type="email"
              required
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Dirección de Envío:</label>
            <input
              type="text"
              required
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Número de Teléfono:</label>
            <input
              type="tel"
              required
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Resumen del pedido */}
      <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Resumen de Pedido</h3>
        <p><strong>Producto:</strong> {product.nombre}</p>
        <p><strong>Precio:</strong> ${product.precio}</p>
        <p><strong>Cantidad:</strong> {quantity}</p>
        <p className="mt-4 text-lg font-semibold">
          <strong>Total:</strong> ${product.precio * quantity}
        </p>

        {/* Botón Confirmar Compra */}
        <button
          type="submit"
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Confirmar Compra
        </button>
      </div>
    </div>
  );
};

export default Checkout;
