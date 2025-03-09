import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useCart } from "../context/CartContext";
import CartModal from "./CartModal"; // Importar el modal
import { Product } from "../types";

const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCartModalOpen, setCartModalOpen] = useState(false); // Estado para abrir/cerrar el modal
  const { cart, addToCart } = useCart(); // Usar el contexto para obtener el carrito y addToCart

  const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 0), 0); // Asignamos 0 si quantity es undefined


  const openCartModal = () => {
    console.log("Abriendo el modal del carrito");
    setCartModalOpen(true); // Abrir el modal del carrito
  };

  const closeCartModal = () => {
    console.log("Cerrando el modal del carrito");
    setCartModalOpen(false); // Cerrar el modal
  };

  console.log("Carrito:", totalItems); 

  return (
    <>
      <nav className="bg-blue-500 p-4 w-full">
        <div className="w-full flex items-center justify-between px-4">
          {/* Botón menú en móvil */}
          <button
            className="text-white text-2xl md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Categorías */}
          <div className="relative hidden md:block">
            <button
              className="flex items-center text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={() => setShowCategories(!showCategories)}
            >
              <span>Categorías</span>
              <IoIosArrowDown className="ml-2" />
            </button>
            {showCategories && (
              <div className="absolute left-0 mt-2 bg-white shadow-md rounded-md w-40">
                <ul className="text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-200">Categoría 1</li>
                  <li className="px-4 py-2 hover:bg-gray-200">Categoría 2</li>
                  <li className="px-4 py-2 hover:bg-gray-200">Categoría 3</li>
                </ul>
              </div>
            )}
          </div>

          {/* Barra de búsqueda */}
          <div className="flex flex-grow mx-4">
            <input
              type="text"
              placeholder="Buscar"
              className="w-full px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none"
            />
            <button className="bg-blue-700 text-white px-4 py-2 rounded-r-md hover:bg-blue-800">
              Buscar
            </button>
          </div>

          {/* Cuenta y carrito */}
          <div className="flex items-center space-x-4 relative">
            {/* carrito en móvil */}
            <button
              className="text-white text-xl relative md:hidden"
              onClick={openCartModal} // Abrir el modal del carrito
            >
              <FaShoppingCart />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 translate-x-1 translate-y-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                  {totalItems}
                </span>
              )}
            </button>

            {/* carrito en versión escritorio */}
            <div className="hidden md:flex items-center space-x-4 relative">
              <button className="text-white hover:underline">Cuenta</button>
              <button
                className="text-white text-xl relative"
                onClick={openCartModal} // Abrir el modal del carrito
              >
                <FaShoppingCart />
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 translate-x-1 translate-y-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Modal del carrito */}
      <CartModal isOpen={isCartModalOpen} onClose={closeCartModal} />
    </>
  );
};

export default Navbar;
