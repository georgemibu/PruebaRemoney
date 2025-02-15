import React, { useState } from "react";
import ProductDetailModal from "./ProductDetailModal";
import { Product } from "../types";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((product, index) => (
        <div
          key={product.id || `product-${index}`}
          className="bg-white shadow-lg rounded-lg p-4 cursor-pointer hover:shadow-xl transition duration-300"
          onClick={() => setSelectedProduct(product)}
        >
          <div className="w-full h-48 flex justify-center items-center overflow-hidden rounded-t-lg">
            <img className="object-cover max-h-full" src={product.imagen} alt={product.nombre} />
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-lg font-semibold text-gray-800">{product.nombre}</h3>
            <p className="text-gray-600 text-sm">{product.disponibilidad}</p>
            <p className="text-xl font-bold text-blue-600 mt-2">${product.precio}</p>
          </div>
        </div>
      ))}

      {selectedProduct && (
        <ProductDetailModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
};

export default ProductList;
