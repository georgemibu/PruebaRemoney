import React, { useState } from "react";
import { Product } from "../types";
import { useNavigate } from "react-router-dom";

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductDetailModal = ({ product, onClose }: ProductDetailModalProps) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  if (!product) return null;

  const handleComprarAhora = () => {
    navigate("/checkout", { state: { product, quantity } });
  };

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

        <div className="flex flex-col items-center justify-center">
          {/* Contenedor de la imagen*/}
          <div className="flex justify-center items-center mb-4">
            <img
              className="w-48 h-48 object-cover"
              src={product.imagen}
              alt={product.nombre}
            />
          </div>

          {/* Información del producto */}
          <div className="text-center mt-4">
            <h2 className="text-xl font-semibold">{product.nombre}</h2>
            <p className="text-lg text-gray-800 font-bold">${product.precio}</p>
            <p className={`mt-2 ${product.stock ? "text-green-600" : "text-red-600"}`}>
              {product.stock ? "En stock" : "Sin stock"}
            </p>
          </div>

          {/* Descripción del producto (movida arriba de características) */}
          <p className="mt-4 text-sm text-gray-600 text-center">{product.descripcion}</p>

          {/* Características */}
          <div className="mt-4 w-full text-center">
            <h3 className="text-md font-semibold mb-2">Características:</h3>
            <ul className="list-disc list-inside text-gray-600 flex flex-col items-center">
              {product.caracteristicas.map((caracteristica, index) => (
                <li key={index} className="text-sm">{caracteristica}</li>
              ))}
            </ul>
          </div>

          {/* Control de cantidad */}
          <div className="mt-4 flex items-center gap-2">
            <label className="text-sm font-medium">Cantidad:</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              min="1"
              className="border border-gray-300 rounded-md px-2 py-1 w-16 text-center"
            />
          </div>

          {/* Botones */}
          <div className="mt-4 flex gap-4">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              onClick={handleComprarAhora}
            >
              Comprar ahora
            </button>
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition">
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
