import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux'; 
import { store } from './store/store';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Category from './components/Category/Category';
import SecondCategory from './components/Category/SecondCategory';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import Product from './components/Product/Product';
import Blogs from './components/Blogs/Blogs';
import Partners from './components/Shared/Partners';
import Footer from './components/Footer/Footer';
import AboutPage from './components/Pages/AboutPage';

import LoginForm from './components/Login/LoginForm';
import RegisterForm from './components/Login/RegisterForm';
import RecoverPassword from './components/Login/RecoverPassword';

import { AuthProvider } from './context/AuthContext';

import NotFound from './components/NotFound/NotFound';
import AdminPanel from './components/AdminPages/AdminPanel';

import Iphone15 from './assets/banner/16promax2.jpg';
import Reloj from './assets/banner/smartwatch3.png';
import ShopCart from './components/ShopCart/ShopCart';
import FavoritesPage from './components/Fav/FavoritesPage';

import Telefonos from './components/Pages/Telefonos';
import Auriculares from './components/Pages/Auriculares';
import RelojInteligente from './components/Pages/RelojInteligente'
import Camaras from './components/Pages/Camaras'
import Televisores from './components/Pages/Televisores';
import CheckoutPage from './components/Pages/CheckoutPage';
import PaymentSuccessPage from './components/Pages/PaymentSuccessPage';




const BannerData = {
  discount: "30% OFF",
  title: "iPhone 15 Pro Max",
  date: "Oferta válida hasta el 30 de noviembre",
  img: Iphone15,
  title1: "Pantalla Super Retina XDR",
  title2: "Chip A17 Bionic",
  title3: "Sistema de cámaras Pro con tecnología LiDAR",
  bgColor: "black",
};

const BannerData2 = {
  discount: "¡40% de descuento!",
  title: "Apple Watch Edición Nike",
  date: "Promoción válida hasta el 30 de noviembre",
  img: Reloj,
  title1: "Pantalla Retina siempre activa con carátulas exclusivas de Nike",
  title2: "Chip S9 SiP y app Nike Run Club integrada",
  title3: "Correa Nike Sport Loop transpirable y cómoda",
  bgColor: "#9de384",
};

const App = () => {
  return (
    <AuthProvider>
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={1000}
        anchorOrigin={{
          vertical: 'top', 
          horizontal: 'center', 
        }}
      >
        <Provider store={store}> 
          <Router>
            <div className="bg-white dark:bg-gray-900 dark:text:white duration-200 overflow-hidden">
              <Navbar />
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Hero />
                      <Category />
                      <SecondCategory />
                      <Services />
                      <Banner data={BannerData} />
                      <Product />
                      <Banner data={BannerData2} />
                      <Blogs />
                      <Partners />
                      <Footer />
                    </>
                  }
                />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/recover-account" element={<RecoverPassword />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/Sobre-Mi" element={<AboutPage />} />
                <Route path="/Favoritos" element={<FavoritesPage />} />
                <Route path="/Destacado" element={<ShopCart />} />
                <Route path="/admin" element={<AdminPanel />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/payment-success" element={<PaymentSuccessPage />} />


                {/* Rutas para las páginas de productos por categorías */}
                <Route path="/Telefonos" element={<Telefonos />} />
                <Route path="/Auriculares" element={<Auriculares />} />
                <Route path="/RelojInteligente" element={<RelojInteligente />} />
                <Route path="/Camaras" element={<Camaras />} />
                <Route path="/Televisores" element={<Televisores />} />
                
              </Routes>
            </div>
          </Router>
        </Provider>
      </SnackbarProvider>
    </AuthProvider>
  );
};

export default App;
