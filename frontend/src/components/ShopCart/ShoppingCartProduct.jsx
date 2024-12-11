import React from 'react';

const ShoppingCartProduct = ({ data, deleteFromCart }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
      
      <img
        src={data.image}  
        alt={data.name}
        className="w-full h-48 object-cover rounded-md mb-4"  
      />
      
      <h3 className="text-lg font-semibold text-gray-800">{data.name}</h3>
      <p className="text-sm text-gray-600 mb-2">Price: ${data.price}</p>
      <button
        className="btn btn-danger py-2 px-4 text-white rounded-md bg-red-600 hover:bg-red-700 mt-2"
        onClick={() => deleteFromCart(data.id)}
      >
        Remove from Cart
      </button>
    </div>
  );
};

export default ShoppingCartProduct;
