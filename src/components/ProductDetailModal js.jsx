import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./ProductDetailModal.css";

const ProductDetailModal = ({ product, onClose }) => {
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate(); 

    if (!product) return null;

    const handleComprarAhora = () => {
        navigate("/checkout", { state: { product, quantity } }); // enviar datos a Checkout
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>X</button>

                <div className="modal-body">
                    <img className="modal-image" src={product.imagen} alt={product.nombre} />

                    <div className="modal-info">
                        <h2>{product.nombre}</h2>
                        <p className="precio-producto">${product.precio}</p>

                        <p className={`stock ${product.stock ? "in-stock" : "out-of-stock"}`}>
                            {product.stock ? "En stock" : "Sin stock"}
                        </p>

                        <div className="caracteristicas">
                            <h3>Características:</h3>
                            <ul>
                                {Array.isArray(product.caracteristicas) ? (
                                    product.caracteristicas.map((caracteristica, index) => (
                                        <li key={index}>{caracteristica}</li>
                                    ))
                                ) : (
                                    <li>No hay características disponibles</li>
                                )}
                            </ul>
                        </div>

                        <div className="cantidad-container">
                            <label>Cantidad:</label>
                            <input
                                type="number"
                                value={quantity}
                                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                                min="1"
                            />
                        </div>

                        <div className="botones">
                            <button className="comprar-ahora" onClick={handleComprarAhora}>
                                Comprar ahora
                            </button>
                            <button className="agregar-carrito">Agregar al carrito</button>
                        </div>

                        <p className="descripcion">{product.descripcion}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailModal;
