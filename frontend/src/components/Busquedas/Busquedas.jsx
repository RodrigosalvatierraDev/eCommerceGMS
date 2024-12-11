import React, { useState, useEffect, useRef } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Busquedas = () => {
  const [query, setQuery] = useState('');
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const navigate = useNavigate();


  const items = [
    'Telefonos', 'Auriculares', 'Reloj Inteligente', 'Camaras', 'Smartphone',
    'Laptop', 'Tablet', 'Monitor', 'Teclado', 'Ratón', 
    'Impresora', 'Pantalla', 'Cargador', 'Power Bank', 'Funda para celular',
    'Memoria USB', 'Auriculares Bluetooth', 'Cámara de seguridad', 'Altavoz Bluetooth', 'Reproductor de música'
  ];

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShowInput(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleItemClick = (item) => {
    
    navigate(`/${item.toLowerCase().replace(/\s+/g, '-')}`);
    setQuery('');  
    setShowInput(false);  
  };

  return (
    <div ref={containerRef} className="relative">
      <div className="flex items-center space-x-3">
        {!showInput && (
          <IoMdSearch
            onClick={() => setShowInput(true)}
            className="cursor-pointer text-xl text-gray-500 dark:text-gray-300 sm:text-2xl"
          />
        )}

        {showInput && (
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="  Buscar productos..."
            className="w-full sm:w-96 py-1 pr-10 rounded-2xl bg-gray-100 dark:bg-gray-800 text-black dark:text-white border-2 border-gray-300 dark:border-gray-700 focus:outline-none focus:border-primary transition-all"
            style={{
              textAlign: query.length === 1 ? 'center' : 'left', 
              paddingLeft: '1rem', 
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
            }}
          />
        )}

        {showInput && (
          <IoMdSearch 
            className="absolute right-3 text-xl text-gray-500 dark:text-gray-300 sm:text-2xl"
          />
        )}
      </div>

      {query && (
        <div className="absolute top-full left-0 w-full sm:w-96 bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg shadow-md mt-2">
          <ul>
            {items
              .filter(item => item.toLowerCase().includes(query.toLowerCase()))
              .map((result, index) => (
                <li
                  key={index}
                  className="p-3 hover:bg-primary/10 cursor-pointer"
                  onClick={() => handleItemClick(result)}
                >
                  {result}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Busquedas;
