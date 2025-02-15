import React, { useState } from "react";
import ProductDetailModal from "./ProductDetailModal";
import "./ProductList.css";

const ProductList = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="container-container">
      {products.map((product, index) => (
        <div className="container" key={product.id || `product-${index}`} onClick={() => setSelectedProduct(product)}>
          <div className="container-img">
            <img className="imagen-producto" src={product.imagen} alt={product.nombre} />
          </div>
          <div className="info-producto">
            <h3 className="nombre-producto">{product.nombre}</h3>
            <p className="precio-producto">${product.precio}</p>
            <div className="disponibilidad-producto">{product.disponibilidad}</div>
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