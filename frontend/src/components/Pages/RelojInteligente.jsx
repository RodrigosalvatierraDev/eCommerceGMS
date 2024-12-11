import React from 'react';
import relojesInteligentesData from '../Data/relojinteligente.json';
import ProductCard from '../../components/Pages/ProductCard'; 
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import { useSnackbar } from 'notistack';
import Footer from '../Footer/Footer';

const RelojInteligente = () => {
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
                Relojes Inteligentes
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {relojesInteligentesData.map((reloj) => (
                    <ProductCard
                        key={reloj.id}
                        product={reloj}
                        onAddToCart={() => addProductToCart(reloj)}
                        isAddedToCart={cart.some((item) => item.id === reloj.id)}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default RelojInteligente;
