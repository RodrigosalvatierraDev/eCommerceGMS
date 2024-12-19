import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import { clearCart } from '../../store/cartSlice';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from "@mui/material";
import Footer from '../Footer/Footer';

const CheckoutPage = () => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const total = cart.reduce((sum, item) => {
    const price = isNaN(Number(item.price)) ? 0 : Number(item.price);
    const quantity = isNaN(Number(item.quantity)) ? 1 : Number(item.quantity);
    return sum + (price * quantity);
  }, 0);

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dni: '',
    birthDate: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    address: '',
    city: '',
    postalCode: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handlePayment = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      if (
        formData.firstName && formData.lastName && formData.dni &&
        formData.birthDate && formData.cardNumber && formData.expiryDate &&
        formData.cvv && formData.address && formData.city && formData.postalCode
      ) {
        enqueueSnackbar('Pago realizado con éxito. ¡Gracias por tu compra!', { variant: 'success' });
        dispatch(clearCart());
        navigate('/payment-success');
      } else {
        enqueueSnackbar('Por favor, completa todos los campos correctamente.', { variant: 'error' });
        setLoading(false);
      }
    }, 3000);
  };

  return (
    <div className="w-full min-h-screen bg-gray-750 container items-center justify-center mx-auto">
      <h1 className='text-center text-4xl mt-10 font-semibold mb-8 text-gray-900 dark:text-white uppercase'>
        FINALIZAR COMPRA
      </h1>
      <div className="container mx-auto p-6 max-w-4xl">
        <div className="dark:bg-gray-800 text-black dark:text-white p-4 rounded-lg shadow-md mb-6">
          <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">Resumen de tu carrito</h3>
          {cart.length === 0 ? (
            <p className="text-center text-gray-500">Tu carrito está vacío.</p>
          ) : (
            cart.map((item) => {
              const price = isNaN(Number(item.price)) ? 0 : Number(item.price);
              const quantity = isNaN(Number(item.quantity)) ? 1 : Number(item.quantity);
              return (
                <div key={item.id} className="flex justify-between items-center mb-2">
                  <span className="text-gray-500 font-semibold">{item.name} (x{item.quantity})</span>
                  <span className="text-gray-500 font-semibold">${(price * quantity).toLocaleString('es-AR')}</span>
                </div>
              );
            })
          )}
          <hr className="my-4" />
          <div className="flex justify-between font-semibold">
            <span>Total:</span>
            <span>${total.toLocaleString('es-AR')}</span>
          </div>
        </div>

        <form onSubmit={handlePayment} className="dark:bg-gray-700 text-black dark:text-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Detalles del pago</h3>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-sm block mb-1 font-semibold" htmlFor="firstName">Nombre</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-600 dark:bg-gray-800 text-white focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="text-sm block mb-1 font-semibold" htmlFor="lastName">Apellido</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-600 dark:bg-gray-800 text-white focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-sm block mb-1 font-semibold" htmlFor="dni">DNI</label>
              <input
                type="text"
                id="dni"
                name="dni"
                value={formData.dni}
                onChange={handleChange}
                pattern="[0-9]{7,8}"
                className="w-full p-2 rounded bg-gray-600 dark:bg-gray-800 text-white focus:outline-none"
                placeholder="Ej: 12345678"
                required
              />
            </div>
            <div>
              <label className="text-sm block mb-1 font-semibold" htmlFor="birthDate">Fecha de Nacimiento</label>
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                max="2005-12-31"
                className="w-full p-2 rounded bg-gray-600 dark:bg-gray-800 text-white focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="text-sm block mb-1 font-semibold" htmlFor="address">Dirección</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-600 dark:bg-gray-800 text-white focus:outline-none"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-sm block mb-1 font-semibold" htmlFor="city">Ciudad</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-600 dark:bg-gray-800 text-white focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="text-sm block mb-1 font-semibold" htmlFor="postalCode">Código Postal</label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                pattern="[0-9]{4}"
                className="w-full p-2 rounded bg-gray-600 dark:bg-gray-800 text-white focus:outline-none"
                placeholder="Ej: 1234"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="text-sm block mb-1 font-semibold" htmlFor="cardNumber">Número de Tarjeta</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              pattern="[0-9]{16}"
              className="w-full p-2 rounded bg-gray-600 dark:bg-gray-800 text-white focus:outline-none"
              placeholder="Ej: 1234 5678 9101 1121"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-sm block mb-1 font-semibold" htmlFor="expiryDate">Fecha de Expiración</label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                pattern="[0-9]{2}/[0-9]{2}"
                className="w-full p-2 rounded bg-gray-600 dark:bg-gray-800 text-white focus:outline-none"
                placeholder="MM/AA"
                required
              />
            </div>
            <div>
              <label className="text-sm block mb-1 font-semibold" htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                pattern="[0-9]{3}"
                className="w-full p-2 rounded bg-gray-600 dark:bg-gray-800 text-white focus:outline-none"
                placeholder="Ej: 123"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 bg-gray-900 dark:bg-white text-white dark:text-black rounded-lg disabled:opacity-50 hover:bg-green-600 dark:hover:bg-green-600 font-semibold"
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Realizar Pago'}
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default CheckoutPage;
