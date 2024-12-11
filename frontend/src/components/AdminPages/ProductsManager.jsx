import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import { getProducts, createProduct, updateProduct, deleteProductById } from "../api/productsApi";

const ProductsManager = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState([]); 
  const [editProduct, setEditProduct] = useState(null); 

  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsFromBackend = await getProducts();
        setProducts(productsFromBackend);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };
    fetchProducts();
  }, []); 

  
  const openModal = (product = null) => {
    setEditProduct(product); 
    setIsModalOpen(true);
  };

  
  const closeModal = () => {
    setIsModalOpen(false);
    setEditProduct(null); 
  };

  
  const addOrEditProduct = async (newProduct) => {
    try {
      if (editProduct) {
        
        const updatedProduct = await updateProduct(editProduct._id, newProduct);
        
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product._id === editProduct._id ? updatedProduct : product
          )
        );
      } else {
        
        const addedProduct = await createProduct(newProduct);
        setProducts((prevProducts) => [...prevProducts, addedProduct]);
      }
      closeModal();
    } catch (error) {
      console.error("Error al guardar el producto:", error);
    }
  };

  
  const deleteProduct = async (id) => {
    try {
      await deleteProductById(id);
      
      setProducts((prevProducts) => prevProducts.filter((product) => product._id !== id));
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
    }
  };

  return (
    <div className="p-3">
      <h2 className="text-3xl font-bold text-gray-100">Gestión de Productos</h2>
      <p className="mt-2 text-lg text-gray-300">
        Administra los productos disponibles en tu tienda.
      </p>

      <div className="mt-6">
        <button
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500"
          onClick={() => openModal()} 
        >
          + Agregar Producto
        </button>
      </div>

      <div className="mt-6 overflow-x-auto bg-gray-800 rounded-lg shadow-lg">
        <table className="w-full text-sm text-left text-gray-300">
          <thead className="text-xs uppercase bg-gray-700 text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Nombre</th>
              <th scope="col" className="px-6 py-3">Precio</th>
              <th scope="col" className="px-6 py-3">Stock</th>
              <th scope="col" className="px-6 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="border-b bg-gray-800 border-gray-700 hover:bg-gray-700">
                <td className="px-6 py-4">{product.name}</td>
                <td className="px-6 py-4">${product.price}</td>
                <td className="px-6 py-4">{product.stock}</td>
                <td className="px-6 py-4 space-x-2">
                  <button
                    className="px-3 py-1 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-500"
                    onClick={() => openModal(product)} 
                  >
                    Editar
                  </button>
                  <button
                    className="px-3 py-1 text-sm font-medium text-white bg-red-600 rounded hover:bg-red-500"
                    onClick={() => deleteProduct(product._id)} 
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <Modal
          closeModal={closeModal}
          addOrEditProduct={addOrEditProduct}
          product={editProduct}
        />
      )}
    </div>
  );
};

export default ProductsManager;
