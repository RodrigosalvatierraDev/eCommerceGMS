import React from 'react';
import Heading from '../Shared/Heading';
import RelojInteligente from '../../assets/blogs/blog-1.jpg';
import Gadget from '../../assets/blogs/blog-2.jpg';
import VR from '../../assets/blogs/blog-3.jpg';

const BlogData = [
  {
    title: "Los Mejores Relojes Inteligentes de 2024",
    subtitle: "Descubre las últimas innovaciones en wearables para mantenerte conectado y en forma.",
    published: "Publicado el 1 de Octubre de 2024",
    imag: RelojInteligente,
  },
  {
    title: "Gadgets que Todo Amante de la Tecnología Debería Conocer",
    subtitle: "Desde auriculares inalámbricos hasta asistentes virtuales, explora los gadgets más populares.",
    published: "Publicado el 18 de Septiembre de 2024",
    imag: Gadget,
  },
  {
    title: "El Futuro es Ahora: Lentes de Realidad Virtual",
    subtitle: "Sumérgete en mundos virtuales con los lentes de realidad virtual más avanzados del mercado.",
    published: "Publicado el 30 de Agosto de 2024",
    imag: VR,
  },
];

const Blogs = () => {
  return (
    <div className='my-12'>
      <div className="container">
        <Heading title="Visita Nuestro BLOG" subtitle="Novedades, Opiniones y Recomendaciones Exclusivas" />
        
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
          
          {BlogData.map((data, index) => (
            <div key={data.title} className='bg-white dark:bg-gray-900' >
              
              <div className='overflow-hidden rounded-2xl mb-2'>
                <img src={data.imag} alt={data.title} className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500'/>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-bold line-clamp-1 dark:text-white">{data.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2 dark:text-gray-300">{data.subtitle}</p>
                <p className="text-xl text-gray-500">{data.published}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
