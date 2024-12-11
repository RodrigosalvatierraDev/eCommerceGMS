import React, { useState, useEffect } from "react";

const ProductsPanel = () => {
  
  const getStoredProducts = () => {
    const storedProducts = localStorage.getItem("products");
    return storedProducts ? JSON.parse(storedProducts) : [];
  };

  const [products, setProducts] = useState(getStoredProducts());
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  
  const addProduct = (newProduct) => {
    const updatedProducts = [...products, { id: Date.now(), ...newProduct }];
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts)); 
    toggleModal(); 
  };

  
  const deleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts)); 
  };

  
  const editProduct = (id, updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, ...updatedProduct } : product
    );
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts)); 
  };

  return {
    products,
    isModalOpen,
    toggleModal,
    addProduct,
    deleteProduct,
    editProduct,
  };
};

export default ProductsPanel;

