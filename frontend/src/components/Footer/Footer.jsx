import React from 'react';
import QR from '../../assets/qr/qr.png';

const FooterData = [
    {
        title: "Inicio",
        link: "/Inicio",
    },
    {
        title: "Favoritos",
        link: "/Favoritos",
    },
    {
        title: "Destacado",
        link: "/Destacado",
    },
    {
        title: "Sobre Mi",
        link: "/Sobre-Mi",
    },
    {
        title: "Blog",
        link: "/404",
    }
];

const RedesSociales = [
    {
        title: "Facebook",
        link: "https://www.facebook.com/RodrigoSalvatierraDEV",
        target: "_blank",
    },
    {
        title: "Google",
        link: "mailto:rodrigosalvatierradev@gmail.com?subject=Consulta&body=Hola,%0A%0AEste%20es%20el%20cuerpo%20del%20mensaje.",
        target: "_blank",
    },
    {
        title: "LinkedIn",
        link: "https://www.linkedin.com/in/rodrigo-salvatierra-8a06222a9/",
        target: "_blank",
    },
    {
        title: "GitHub",
        link: "https://github.com/RodrigosalvatierraDev",
        target: "_blank",
    },
    {
        title: "Whatsapp",
        link: "https://wa.me/549381674761",
        target: "_blank",
    }
];

const Footer = () => {
  return (
      <div className=' dark:bg-gray-750'>
        <hr className="mt-20 border-t-1 border-red-600" />

        <div className="container">
            <div className="grid md:grid-cols-4 gap-6 pb-20 pt-5 text-center md:text-left">
                
                <div className='mt-8'>
                    <a href="#" className='text-primary font-semibold -tracking-widest text-2xl uppercase sm:text-3xl '>GMS ONLINE</a>
                    <p className='text-gray-600 lg:pr-24 pt-5'>
                        GMS ONLINE, tu destino favorito para encontrar los gadgets y tecnología más innovadora del mercado. Explora nuestra amplia variedad de productos.
                    </p>
                    <a href="https://www.facebook.com/RodrigoSalvatierraDEV" 
                       target='_blank'
                       className='inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full'
                    >Visita Mi Pagina Official</a>
                </div>

                
                <div className='py-8 px-4'>
                    <h1 className='text-xl font-bold mb-3 dark:text-primary'>Enlaces Rapidos</h1>
                    <ul className='space-y-3'>
                        {
                            FooterData.map((data, index) => (
                                <li key={index}>
                                    <a href={data.link} className='text-gray-600 hover:text-black duration-300 dark:hover:text-white'>
                                        {data.title}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                
                <div className='py-8 px-4'>
                    <h1 className='text-xl font-bold mb-3 dark:text-primary'>Redes Sociales</h1>
                    <ul className='space-y-3'>
                        {
                            RedesSociales.map((data, index) => (
                                <li key={index}>
                                    <a href={data.link} className='text-gray-600 hover:text-black duration-300 dark:hover:text-white'>
                                        {data.title}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                
                <div className='flex flex-col items-center px-4 mt-8'>
                    <h1 className='text-xl font-bold mb-3 dark:text-primary'>QR Datos Fiscal</h1>
                    <div className='flex items-center justify-center'>
                        <img 
                            src={QR} 
                            alt="Código QR"
                            className='w-60 h-60' 
                        />
                    </div>
                </div>
            </div>

            
        </div>
            <div className='text-center'>
                <p className='text-black/80 dark:text-white/80'>
        ©       {new Date().getFullYear()} GMS ONLINE. Todos los derechos reservados.
                </p>
            </div>
    </div>
  );
}

export default Footer;
