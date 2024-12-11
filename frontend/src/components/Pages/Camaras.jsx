import React from 'react';
import camarasData from '../Data/camaras.json'; 
import ProductCard from '../../components/Pages/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import { useSnackbar } from 'notistack';
import Footer from '../Footer/Footer';

const Camaras = () => {
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.items);

    const addProductToCart = (product) => {
        dispatch(addToCart(product));
        enqueueSnackbar(`${product.name} agregado al carrito`, { variant: 'success' });
    };

    return (
        <div className="container mx-auto p-10">
            <h1 className="text-center text-4xl font-semibold mb-8 text-black dark:text-gray-600 uppercase">
                Cámaras
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {camarasData.map((camera) => (
                    <ProductCard
                        key={camera.id}
                        product={camera}
                        onAddToCart={() => addProductToCart(camera)}
                        isAddedToCart={cart.some((item) => item.id === camera.id)}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Camaras;
