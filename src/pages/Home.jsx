import { useNavigate } from "react-router-dom";
import serviceImg1 from "../assets/slider1.webp";
import serviceImg2 from "../assets/slider2.webp";
import serviceImg3 from "../assets/slider3.webp";
import HeroSlider from "../components/HeroSlider.";
import { useInsertionEffect } from "react";

export default function Home() {
  const navigate = useNavigate();

  useInsertionEffect(() => {
    document.title = `Home | Ghanem Engineering & Plastics Industries`;
  }, []);

  return (
    <div className="bg-white text-gray-800 w-full overflow-x-hidden">
      {/* Hero Section */}
      <HeroSlider />

      {/* about us */}
      <section className="bg-white py-10 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10">
          {/* Left - Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={serviceImg3}
              alt=""
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>

          {/* Right - Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Ghanem Engineering & Plastics Industries
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              At Ghanem Engineering & Plastics Industries, we specialize in
              delivering high-quality manufacturing and industrial maintenance
              solutions tailored to meet the needs of modern industries.
              Manufacturing Our advanced manufacturing facilities are equipped
              to handle precision production of plastic and engineering
              components. From prototyping to full-scale production, we ensure
              consistent quality, efficiency, and cost-effectiveness. We work
              closely with our clients to deliver custom solutions that meet
              exact specifications and industry standards. Industrial
              Maintenance We offer comprehensive maintenance services designed
              to keep your machinery and equipment running at peak performance.
              Our skilled technicians provide preventive, corrective, and
              emergency maintenance to reduce downtime, extend equipment
              lifespan, and improve operational efficiency.
            </p>
            {/* <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 cursor-pointer">
              About us
            </button> */}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="w-full bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#4B5563] mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
            {/* Service 1 */}
            <div
              // onClick={() => navigate("/maintenance")}
              className="cursor-pointer hover:shadow-2xl transition-shadow duration-300 rounded-2xl overflow-hidden w-full bg-white"
            >
              <img
                src={serviceImg1}
                alt="Maintenance"
                className="w-full h-[420px] object-cover"
              />
              <h3 className="text-2xl font-semibold text-[#4B5563] mt-6 mb-6">
                Maintenance
              </h3>
            </div>

            {/* Service 2 */}
            <div
              // onClick={() => navigate("/manufacturing")}
              className="cursor-pointer hover:shadow-2xl transition-shadow duration-300 rounded-2xl overflow-hidden w-full bg-white"
            >
              <img
                src={serviceImg2}
                alt="Manufacturing"
                className="w-full h-[420px] object-cover"
              />
              <h3 className="text-2xl font-semibold text-[#4B5563] mt-6 mb-6">
                Manufacturing
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Call-to-Action */}
      <section className="w-full bg-[#4B5563] py-16 text-white text-center px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Need Industrial Support?</h2>
          <p className="mb-6 text-lg">
            Let’s talk about how we can help your business grow and succeed.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-[#4B5563] hover:text-white hover:bg-gray-800 px-6 py-3 rounded-full font-semibold transition cursor-pointer"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
