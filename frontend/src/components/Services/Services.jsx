import React from 'react';
import {
  FaCarSide,
  FaHeadphonesAlt,
  FaWallet,
  FaCheckCircle,
} from 'react-icons/fa';

const ServiceData = [
  {
    id: 1,
    icon: <FaCarSide />,
    title: 'Entrega Rápida',
    description: 'Recibe tu pedido en la puerta de tu casa',
  },
  {
    id: 2,
    icon: <FaHeadphonesAlt />,
    title: 'Soporte al Cliente 24/7',
    description: 'Atención personalizada y soporte 24/7.',
  },
  {
    id: 3,
    icon: <FaWallet />,
    title: 'Opciones de Pago Flexibles',
    description: 'Elige entre una variedad de métodos de pago seguros y confiables.',
  },
  {
    id: 4,
    icon: <FaCheckCircle />,
    title: 'Garantía y Calidad',
    description: 'Todos nuestros productos cuentan con garantía.',
  },
];

const Services = () => {
  return (
    <div className="py-8">
      <div className="container px-4 sm:px-6 lg:px-8 mt-14 md:my-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ServiceData.map((data) => (
            <div
              key={data.id}
              className="flex sm:flex-row flex-col items-center sm:items-start text-center sm:text-left p-4 gap-4 rounded-lg text-primary"
            >
              
              <div className="text-4xl sm:text-5xl">{data.icon}</div>

              
              <div className="flex-1 flex flex-col">
                <h1 className="text-lg lg:text-xl font-bold text-red-600 sm:text-red sm:mb-2">
                  {data.title}
                </h1>
                <p className="text-gray-500 text-sm">{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
