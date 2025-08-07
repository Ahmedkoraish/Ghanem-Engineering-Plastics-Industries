// import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
import cncImg from "../assets/slider2.webp";
import maintenanceimg from "../assets/slider1.webp";
import { useInsertionEffect } from "react";

export default function Services() {
  // const navigate = useNavigate();

   useInsertionEffect(() => {
      document.title = "Services | Ghanem Engineering & Plastics Industries";
    }, []);


  return (
    <section className="w-full bg-white py-16 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-20">
        Our Services
      </h1>

      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2 px-4">
        {/* Maintenance */}
        <div
          // onClick={() => navigate("/maintenance")}
          className="cursor-pointer bg-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden w-full"
        >
          <div className="overflow-hidden">
            <img
              src={maintenanceimg}
              alt="Maintenance"
              className="w-full h-[350px] md:h-[400px] object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h2 className="text-3xl font-semibold text-[#003366] mt-6 mb-6 text-center">
            Maintenance
          </h2>
        </div>

        {/* Manufacturing */}
        <div
          // onClick={() => navigate("/manufacturing")}
          className="cursor-pointer bg-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden w-full"
        >
          <div className="overflow-hidden">
            <img
              src={cncImg}
              alt="Manufacturing"
              className="w-full h-[350px] md:h-[400px] object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h2 className="text-3xl font-semibold text-[#003366] mt-6 mb-6 text-center">
            Manufacturing
          </h2>
        </div>
      </div>
    </section>
  );
}
