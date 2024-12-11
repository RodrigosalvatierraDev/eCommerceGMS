import React, { useState, useEffect } from "react";

const Modal = ({ closeModal, addOrEditProduct, product }) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productStock, setProductStock] = useState("");

  
  useEffect(() => {
    if (product) {
      setProductName(product.name || "");
      setProductPrice(product.price || "");
      setProductStock(product.stock || "");
    }
  }, [product]);

  const handleSubmit = () => {
    const newProduct = {
      name: productName,
      price: parseFloat(productPrice),
      stock: parseInt(productStock),
    };
    addOrEditProduct(newProduct);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h3 className="text-2xl font-bold mb-4">
          {product ? "Editar Producto" : "Agregar Producto"}
        </h3>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Nombre del Producto</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Precio</label>
            <input
              type="number"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Stock</label>
            <input
              type="number"
              value={productStock}
              onChange={(e) => setProductStock(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-black"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
            >
              {product ? "Guardar Cambios" : "Agregar"}
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="ml-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-400"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;

