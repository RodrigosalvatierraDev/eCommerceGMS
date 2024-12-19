import React, { useState, useEffect } from 'react';
import LightButton from '../../assets/website/light-mode-button.png';
import DarkButton from '../../assets/website/dark-mode-button.png';

const DarkMode = () => {
  const [theme, setTheme] = useState(() => {
    
    return localStorage.getItem("theme") || "light";
  });

  
  useEffect(() => {
    const element = document.documentElement;

    if (theme === "dark") {
      element.classList.add("dark");
      element.classList.remove("light");
    } else {
      element.classList.add("light");
      element.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]); 

  return (
    <div className="relative">
      {theme === "light" ? (
        <img
          onClick={() => setTheme("dark")}
          src={LightButton}
          alt="Botón Día"
          className="w-12 cursor-pointer transition-opacity duration-300 opacity-100"
        />
      ) : (
        <img
          onClick={() => setTheme("light")}
          src={DarkButton}
          alt="Botón Noche"
          className="w-12 cursor-pointer transition-opacity duration-300 opacity-100"
        />
      )}
    </div>
  );
};

export default DarkMode;
