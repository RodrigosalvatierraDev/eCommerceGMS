import axios from "axios";


const API_URL = `${import.meta.env.VITE_API_URL}/api/products`;  


export const getProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener productos:", error);
    throw error; 
  }
};


export const createProduct = async (productData) => {
  try {
    const response = await axios.post(API_URL, productData);
    return response.data;
  } catch (error) {
    console.error("Error al agregar producto:", error);
    throw error;
  }
};


export const updateProduct = async (id, productData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, productData);
    return response.data;
  } catch (error) {
    console.error("Error al editar producto:", error);
    throw error;
  }
};


export const deleteProductById = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar producto:", error);
    throw error;
  }
};
