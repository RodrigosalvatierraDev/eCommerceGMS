import React, { useState } from 'react';
import DarkMode from './DarkMode';
import { FaCaretDown, FaShoppingCart, FaSignOutAlt, FaBars } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import Busquedas from '../Busquedas/Busquedas';
import Modal from '../Modal/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/userSlice';

const MenuLinks = [
    { id: 1, name: "Inicio", link: "/" },
    { id: 2, name: "Favoritos", link: "/Favoritos" },
    { id: 3, name: "Destacado", link: "/Destacado" },
    { id: 4, name: "Sobre Mi", link: "/Sobre-Mi" },
];

const ProductosLink = [
    { id: 1, name: "Telefonos", link: "/Telefonos" },
    { id: 2, name: "Auriculares", link: "/Auriculares" },
    { id: 3, name: "Reloj Inteligente", link: "/RelojInteligente" },
    { id: 4, name: "Camaras", link: "/Camaras" },
    { id: 5, name: "Televisores", link: "/Televisores" },
];

const Navbar = () => {
    const location = useLocation();
    const [showCart, setShowCart] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showMobileOptions, setShowMobileOptions] = useState(false);

    const cartItems = useSelector((state) => state.cart.items);
    const loggedIn = useSelector((state) => state.user.loggedIn);
    const dispatch = useDispatch();

    if (
        location.pathname === '/login' || 
        location.pathname === '/register' || 
        location.pathname === '/payment-success' || 
        location.pathname.startsWith('/admin') ||
        location.pathname === '/404' 
    ) {
        return null; 
    }

    const handleLogout = () => {
        dispatch(logout());
    };

    const handleLinkClick = () => {
        setShowMenu(false);
    };

    const toggleMobileOptions = () => {
        setShowMobileOptions(!showMobileOptions);
    };

    return (
        <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 top-0 left-0 w-full shadow-md min-h-[4rem]'>
            <div className='py-4'>
                <div className="container flex justify-between items-center">
                    <div className='flex items-center gap-4'>
                        <Link to="/" className='text-primary font-semibold -tracking-widest text-2xl uppercase sm:text-3xl'>
                            GMS ONLINE
                        </Link>
                    </div>

                    <div className='hidden lg:block'>
                        <ul className='flex items-center gap-5'>
                            {MenuLinks.map((data, index) => (
                                <li key={index}>
                                    <Link to={data.link} className='inline-block px-5 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200'>
                                        {data.name}
                                    </Link>
                                </li>
                            ))}
                            <li className='relative cursor-pointer group'>
                                <Link to="#" className='flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2'>
                                    Productos
                                    <span>
                                        <FaCaretDown className='group-hover:rotate-180 duration-300' />
                                    </span>
                                </Link>
                                <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 dark:text-white duration-200 p-2'>
                                    <ul className='space-y-2'>
                                        {ProductosLink.map((data, index) => (
                                            <li key={index}>
                                                <Link to={data.link} className='text-gray-500 hover:text-black dark:hover:text-white duration-200 inline-block p-2 hover:bg-primary/20 w-full rounded-md font-semibold'>
                                                    {data.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                            <li className='flex items-center gap-4'>
                                <DarkMode />
                                {loggedIn ? (
                                    <button
                                        onClick={handleLogout}
                                        className="bg-red-600 hover:bg-white text-white hover:text-black font-bold py-2 px-6 rounded-full border border-black transition duration-300"
                                    >
                                        <FaSignOutAlt />
                                    </button>
                                ) : (
                                    <Link
                                        to="/login"
                                        className="bg-white hover:bg-red-600 text-black hover:text-white font-bold py-2 px-6 rounded-full border border-black transition duration-300"
                                    >
                                        Acceder
                                    </Link>
                                )}
                                <button
                                    onClick={() => setShowCart(true)}
                                    className="bg-white hover:bg-primary text-black hover:text-white font-bold py-2 px-6 rounded-full border border-black transition duration-300 flex items-center gap-2"
                                >
                                    <FaShoppingCart />
                                    {cartItems.length}
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:hidden flex items-center gap-4">
                        <button onClick={() => setShowMenu(!showMenu)} className="text-2xl">
                            <FaBars />
                        </button>
                        <Busquedas />
                    </div>

                    {showMenu && (
                        <div className="absolute top-16 left-0 w-full bg-gray-800 dark:bg-gray-900 text-white p-4 z-[99999]">
                            <ul>
                                {MenuLinks.map((data, index) => (
                                    <li key={index}>
                                        <Link to={data.link} onClick={handleLinkClick} className="flex justify-center items-center py-2 px-4 hover:bg-primary/20">
                                            {data.name}
                                        </Link>
                                    </li>
                                ))}
                                <li className="relative cursor-pointer group">
                                    <Link to="#" className='flex justify-center items-center gap-[2px] py-2'>
                                        Productos
                                        <span>
                                            <FaCaretDown className='group-hover:rotate-180 duration-300' />
                                        </span>
                                    </Link>
                                    <div className='absolute z-[99999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 dark:text-white duration-200 p-2'>
                                        <ul className='space-y-2'>
                                            {ProductosLink.map((data, index) => (
                                                <li key={index}>
                                                    <Link to={data.link} onClick={handleLinkClick} className='block p-2 hover:bg-primary/20'>
                                                        {data.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            <div className="mt-4 flex justify-center items-center">
                                <button onClick={toggleMobileOptions} className="block text-white hover:bg-primary/20 py-2 px-4">
                                    Opciones
                                </button>
                                {showMobileOptions && (
                                    <div className="mt-2 flex gap-4">
                                        <DarkMode />
                                        {loggedIn ? (
                                            <button
                                                onClick={handleLogout}
                                                className="bg-white hover:bg-red-600 text-black hover:text-white font-bold py-2 px-6 rounded-full border border-black transition duration-300"
                                            >
                                                <FaSignOutAlt /> Salir
                                            </button>
                                        ) : (
                                            <Link
                                                to="/login"
                                                className="bg-white hover:bg-red-600 text-black hover:text-white font-bold py-2 px-6 rounded-full border border-black transition duration-300"
                                            >
                                                Acceder
                                            </Link>
                                        )}
                                        <button
                                            onClick={() => setShowCart(true)}
                                            className="bg-white hover:bg-primary text-black hover:text-white font-bold py-2 px-6 rounded-full border border-black transition duration-300 flex items-center gap-2"
                                        >
                                            <FaShoppingCart />
                                            {cartItems.length}
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {showCart && <Modal closeModal={() => setShowCart(false)} />}
        </div>
    );
};

export default Navbar;
