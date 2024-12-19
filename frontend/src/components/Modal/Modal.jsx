import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../store/cartSlice';
import { AiOutlineDelete } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Modal = ({ closeModal }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart.items);
    const [loading, setLoading] = useState(false); 

    const handleRemove = (id) => {
        dispatch(removeFromCart({ id }));
    };

    const handleCheckout = () => {
        setLoading(true); 
        setTimeout(() => {
            setLoading(false);
            closeModal();
            navigate('/checkout'); 
        }, 3000); 
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg w-[90%] sm:w-[600px] p-6">
                <h2 className="text-2xl font-semibold mb-4">Tu Carrito</h2>

                <div className="space-y-4 max-h-96 overflow-y-auto">
                    {cartItems.length === 0 ? (
                        <p className="text-center text-gray-500">Tu carrito está vacío</p>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item.id} className="flex justify-between items-center border-b border-gray-300 py-2">
                                <div className="flex items-center gap-4">
                                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                                    <div>
                                        <p className="font-semibold">{item.name}</p>
                                        <p className="text-gray-500">{item.price} $</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleRemove(item.id)}
                                    className="text-red-600 hover:text-red-800 mr-4"
                                >
                                    <AiOutlineDelete size={30} />
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="mt-4 text-right">
                        <p className="font-semibold">
                            Total: {totalPrice.toLocaleString('es-ES')} $
                        </p>
                    </div>
                )}

                <div className="mt-6 flex justify-between items-center">
                    <button
                        onClick={closeModal}
                        className="bg-gray-400 text-white py-2 px-6 rounded-md hover:bg-gray-600"
                    >
                        Cerrar
                    </button>
                    {cartItems.length > 0 && (
                        <button
                            onClick={handleCheckout}
                            disabled={loading}
                            className={`py-2 px-6 rounded-md text-white flex items-center justify-center ${
                                loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-primary hover:bg-primary/80'
                            }`}
                        >
                            {loading ? (
                                <svg
                                    className="animate-spin h-5 w-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.963 7.963 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                            ) : (
                                'Proceder al pago'
                            )}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Modal;
