import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useSelector } from 'react-redux'; 

const PaymentSuccessPage = () => {
  const navigate = useNavigate();
  
  
  const cart = useSelector((state) => state.cart.items);
  
  
  const totalAmount = cart.reduce((sum, item) => {
    const price = isNaN(Number(item.price)) ? 0 : Number(item.price);
    const quantity = isNaN(Number(item.quantity)) ? 1 : Number(item.quantity);
    return sum + (price * quantity);
  }, 0);
  
  const [formattedAmount, setFormattedAmount] = useState(null);

  useEffect(() => {
    
    if (totalAmount > 0) {
      setFormattedAmount(totalAmount.toLocaleString('es-AR'));
    }

    
    localStorage.setItem("totalAmount", totalAmount);
  }, [totalAmount]);

  const handleRedirect = () => {
    navigate('/'); 
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg">
        <AiOutlineCheckCircle size={100} className="text-green-500 mb-4 mx-auto w-100" />
        {formattedAmount && (
          <p className="text-lg mb-6">Su compra por ${formattedAmount}</p>
        )}
        <h2 className="text-2xl font-semibold mb-4">¡Fue realizado con éxito!</h2>
        <p className="text-lg mb-6">Gracias por tu compra. Tu pedido está siendo procesado.</p>
        <button
          onClick={handleRedirect}
          className="bg-primary text-white py-2 px-6 rounded-md hover:bg-primary/80"
        >
          Volver al Inicio
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
