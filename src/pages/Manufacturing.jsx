import React from 'react'
import serviceImg3 from "../assets/slider3.webp";

export default function Manufacturing() {
  return (
    <>
          <h1 className="text-4xl text-center m-5 font-bold text-gray-800">Manufacturing Services</h1>
          {/* First Section */}
          <section className="bg-white py-10 px-4 sm:px-6 lg:px-20">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10">
              {/* Left - Smaller Image */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <img
                  src={serviceImg3}
                  alt=""
                  className="rounded-lg shadow-md w-full max-w-md object-cover"
                />
              </div>
    
              {/* Right - Content */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  Ghanem Engineering & Plastics Industries
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
                  quas nostrum, dolores enim iure possimus dolorum blanditiis...
                </p>
              </div>
            </div>
          </section>
    
          {/* Second Section (Same Style) */}
          <section className="bg-white py-10 px-4 sm:px-6 lg:px-20">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10">
              {/* Left - Smaller Image */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <img
                  src={serviceImg3}
                  alt=""
                  className="rounded-lg shadow-md w-full max-w-md object-cover"
                />
              </div>
    
              {/* Right - Content */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  Ghanem Engineering & Plastics Industries
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
                  quas nostrum, dolores enim iure possimus dolorum blanditiis...
                </p>
              </div>
            </div>
          </section>
        </>
      );}
