import React from 'react';
import Button from '../Shared/Button';
import Imagen1 from '../../assets/category/earphone.png';
import Imagen2 from '../../assets/category/watch.png';
import Imagen3 from '../../assets/category/macbook.png';

const Category = () => {
  return (
    <div className="py-8">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="py-10 px-4 sm:px-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Disfruta</p>
                <p className="text-2xl font-semibold mb-[2px]">Con</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">Auriculares</p>
                <Button
                  text="Acceder"
                  bgColor="bg-primary"
                  textColor="text-white"
                />
              </div>
            </div>
            <img
              src={Imagen1}
              alt="Auriculares"
              className="max-w-[150px] sm:max-w-[220px] md:max-w-[260px] lg:max-w-[320px] absolute bottom-0 right-4"
            />
          </div>

          
          <div className="py-10 px-4 sm:px-5 bg-gradient-to-br from-brandYellow to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Disfruta</p>
                <p className="text-2xl font-semibold mb-[2px]">Con</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">Reloj Inteligente</p>
                <Button
                  text="Acceder"
                  bgColor="bg-white"
                  textColor="text-brandYellow"
                />
              </div>
            </div>
            <img
              src={Imagen2}
              alt="Reloj Inteligente"
              className="max-w-[150px] sm:max-w-[220px] md:max-w-[260px] lg:max-w-[320px] absolute -right-8 lg:top-[10px]"
            />
          </div>

          
          <div className="col-span-1 sm:col-span-2 py-10 px-4 sm:px-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Disfruta</p>
                <p className="text-2xl font-semibold mb-[2px]">Con</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-[2px]">MacBook PRO</p>
                <Button
                  text="Acceder"
                  bgColor="bg-white"
                  textColor="text-primary"
                />
              </div>
            </div>
            <img
              src={Imagen3}
              alt="MacBook PRO"
              className="max-w-[200px] sm:max-w-[260px] md:max-w-[320px] h-auto absolute top-4 right-0 lg:translate-y-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
