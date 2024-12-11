import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaBootstrap, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';
import Footer from '../Footer/Footer';

const AboutPage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-750 container items-center justify-center mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between w-full p-8">
        <motion.div
          className="flex-1 text-center md:text-left mb-8 md:mb-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-2xl font-extrabold text-red-600 dark:text-red-700 mb-8"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Hola mi nombre es,
          </motion.h1>

          <h2 className="text-5xl font-extrabold text-black mb-4 transform transition-all duration-500 hover:scale-105 dark:text-white">
            Rodrigo Salvatierra
          </h2>
          <p className="text-2xl text-red-600 dark:text-red-700 mb-4">Full-Stack Developer</p>
          <p className="text-lg text-black mb-6 dark:text-gray-300">
            Soy un desarrollador junior en mis primeros pasos creando páginas web. Estoy aprendiendo constantemente y aplicando mis conocimientos para ofrecer soluciones digitales atractivas y funcionales.
          </p>
          <motion.a
            href="#"
            className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-500 transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            Mi Perfil
          </motion.a>

          <div className="flex justify-center space-x-4 gap-4 mt-10 top-6">
            <motion.div
              className="text-4xl text-orange-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <FaHtml5 />
            </motion.div>
            <motion.div
              className="text-4xl text-blue-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <FaCss3Alt />
            </motion.div>
            <motion.div
              className="text-4xl text-yellow-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              <FaJs />
            </motion.div>
            <motion.div
              className="text-4xl text-cyan-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 1 }}
            >
              <FaReact />
            </motion.div>
            <motion.div
              className="text-4xl text-green-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 1 }}
            >
              <FaNodeJs />
            </motion.div>
            <motion.div
              className="text-4xl text-purple-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5, duration: 1 }}
            >
              <FaDatabase />
            </motion.div>

            <motion.div
              className="text-4xl text-green-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4, duration: 1 }}
            >
              <SiMongodb />
            </motion.div>
            <motion.div
              className="text-4xl text-blue-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.5, duration: 1 }}
            >
              <FaBootstrap />
            </motion.div>
            <motion.div
              className="text-4xl text-cyan-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5, duration: 1 }}
            >
              <SiTailwindcss />
            </motion.div>
          </div>

          <div className="mt-10"></div>
          <h3 className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-700 mb-8 transform transition-all duration-300 hover:scale-105">
            Mis redes Sociales
          </h3>

          <div className="flex justify-center space-x-6 mt-12">
            <motion.a
              href="https://www.instagram.com/tuusuario"
              target="_blank"
              className="text-3xl text-pink-500 hover:text-pink-700 transition-all duration-300 hover:scale-150"
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              href="https://github.com/tuusuario"
              target="_blank"
              className="text-3xl text-gray-300 hover:text-white transition-all duration-300 hover:scale-150"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/tuusuario"
              target="_blank"
              className="text-3xl text-blue-600 hover:text-blue-800 transition-all duration-300 hover:scale-150"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://twitter.com/tuusuario"
              target="_blank"
              className="text-3xl text-blue-400 hover:text-blue-600 transition-all duration-300 hover:scale-150"
            >
              <FaTwitter />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <img
            src="yo2.png"
            alt="Profile"
            className="w-full max-w-3xl h-auto object-cover rounded-md transform transition-all duration-500 hover:scale-110"
          />
        </motion.div>
      </div>
      <Footer /> 
    </div>
  );
};

export default AboutPage;
