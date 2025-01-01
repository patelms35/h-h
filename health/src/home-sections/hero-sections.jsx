import React from "react";

const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center h-screen relative"
      style={{ backgroundImage: "url('Background.png')" }}
    >
      <div className="container mx-auto h-full relative">
        {/* Left Side Content */}
        <div className="absolute top-1/4 left-10 text-white">
          <p className="text-xl text-[#fb4b4e]">We are here for your care</p>
          <h1 className="text-[72px] text-[#0f173b] font-light mb-4">
            Best Care & <br /> Better Doctor
          </h1>
          <div className="space-x-4">
            <button className="bg-[#0f173b] hover:bg-[#fb4b4e] text-white font-semibold py-4 px-16 rounded-full">
              CONTACT US
            </button>
            <button className="bg-[#fb4b4e] hover:bg-[#0f173b] text-white font-semibold py-4 px-16 rounded-full">
              MAKE APPOINTMENT
            </button>
          </div>
        </div>

        {/* Bottom Center Cards */}
        <div className="absolute bottom-10 transform -translate-x-1/2 flex space-x-8 align-center left-1/2 sm:flex-wrap lg:flex-nowrap">
          {[
            {
              icon: "icon-1.png",
              title: "QUALITFIED DOCTORS",
              description:
                "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
            },
            {
              icon: "icon-2.png",
              title: "EMERGENCY CARE",
              description:
                "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
            },
            {
              icon: "icon-3.png",
              title: "24 HOURS SERVICE",
              description:
                "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white p-6 pt-12 pb-12 rounded-lg shadow-md text-center w-80 h-80 flex flex-col items-center justify-between"
            >
              <img
                src={card.icon}
                alt="icon"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
