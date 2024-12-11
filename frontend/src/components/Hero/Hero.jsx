import React from "react";
import Slider from "react-slick";
import img1 from "../../assets/hero/headphone.png";
import img2 from "../../assets/hero/iPhone16promax.png";
import img3 from "../../assets/hero/watch.png";
import img4 from "../../assets/hero/tv65amsung.png";
import img5 from "../../assets/hero/CanonEOS.png";
import Button from "../Shared/Button";

const HeroData = [
  {
    id: 1,
    img: img1,
    subtitle: "Auriculares",
    title: "Beats",
    title2: "Inalámbrico",
    description: "Auriculares inalámbricos con sonido envolvente y batería de larga duración.",
  },
  {
    id: 2,
    img: img2,
    subtitle: "Smartphone",
    title: "IPhone",
    title2: "16 Pro Max",
    description: "Smartphone con cámara avanzada y rendimiento superior.",
  },
  {
    id: 3,
    img: img3,
    subtitle: "Reloj Inteligente",
    title: "Apple",
    title2: "Watch Series 7",
    description: "Reloj inteligente con seguimiento de actividad y salud.",
  },
  {
    id: 4,
    img: img4,
    subtitle: "Televisor",
    title: "Samsung",
    title2: "QLED 4K",
    description: "Televisor QLED 4K con imagen nítida y colores vibrantes.",
  },
  {
    id: 5,
    img: img5,
    subtitle: "Cámara",
    title: "Canon",
    title2: "EOS Rebel",
    description: "Cámara DSLR de alta calidad para fotógrafos aficionados y profesionales.",
  },
];

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="container overflow-x-hidden">
      <div className="overflow-hidden rounded-3xl h-auto hero-bg-color flex justify-center items-center">
        <div className="container pb-0 sm:pb-0">
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  
                  <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1 className="text-2xl sm:text-6xl lg:text-2xl font-bold m-0">
                      {data.subtitle}
                    </h1>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold m-0">
                      {data.title}
                    </h1>
                    <h1 className="text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold m-0">
                      {data.title2}
                    </h1>
                    <div>
                      <Button text="Comprar Ahora" bgColor="bg-primary" textColor="text-white" />
                    </div>
                  </div>
                  
                  <div className="order-1 sm:order-2">
                    <img
                      src={data.img}
                      alt={data.title}
                      className="max-w-full h-auto object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
