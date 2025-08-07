import { useEffect, useState } from "react";


import hero1 from "../assets/slider1.webp";
import hero2 from "../assets/slider2.webp";
import hero3 from "../assets/slider3.webp";

export default function HeroSlider() {

  const images = [hero1, hero2, hero3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-cover bg-center text-white relative transition-all duration-1000"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
      }}
    >
      <div className="bg-black/60 absolute inset-0 z-0" />

      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Your Trusted Industrial Partner
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Delivering Excellence in Maintenance & Manufacturing
        </p>
        
      </div>
    </section>
  );
}
