import React, { useEffect } from 'react';
import ProductItem from './ProductItem';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, clearCart, calculateTotalPrice } from '../../store/cartSlice';
import { useSnackbar } from 'notistack';
import productsData from '../../components/Data/products.json';
import Footer from '../Footer/Footer';

const ShopCart = () => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPriceShoppingCart);

  useEffect(() => {
    dispatch(calculateTotalPrice());
  }, [cart, dispatch]);

  const addProductToCart = (product) => {
    dispatch(addToCart(product));
    enqueueSnackbar(`${product.name} agregado al carrito`, { variant: 'success' });
  };

  return (
    <div className="container mx-auto p-10 max-w-full">
      <h1 className="text-center text-5xl font-semibold mb-8 text-black dark:text-gray-600 uppercase">Productos Destacados</h1>

      <h2 className="text-xl mb-4 text-black dark:text-gray-600">STOCK DISPONIBLE</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
        {productsData.map((product) => (
          <ProductItem
            key={product.id}
            data={product}
            addToCart={addProductToCart}
            isInCart={cart.some((item) => item.id === product.id)}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ShopCart;
