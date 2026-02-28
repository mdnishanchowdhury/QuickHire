import React from "react";

const StartHiringSection = () => {
  return (
    <section className="relative w-full mx-auto bg-white py-16 px-4 md:px-30 flex justify-center items-center">
      <div className="relative w-full  flex flex-col md:flex-row items-center justify-between min-h-[450px] overflow-hidden">

        <div
          className="absolute inset-0 bg-[#4640DE] z-0"
          style={{
            clipPath: "polygon(0% 18%, 12% 0%, 100% 0%, 100% 82%, 88% 100%, 0% 100%)"
          }}
        ></div>

        <div className="relative z-10 text-white p-10 md:pl-20 md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            Start posting <br /> jobs today
          </h1>
          <p className="text-lg opacity-90 mb-8">
            Start posting jobs for only $10.
          </p>
          <button className="bg-white text-[#4640DE] font-bold px-8 py-4 rounded-sm hover:bg-gray-100 transition-all duration-300">
            Sign Up For Free
          </button>
        </div>

        <div className="relative z-10 p-10 md:pr-10 lg:pr-20 flex justify-center items-center">
          <div className="bg-white p-1 ">
            <img
              src="https://i.ibb.co.com/yBQZ3kT3/image.png"
              alt="Dashboard Preview"
              className="w-[600px]  shadow-lg object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default StartHiringSection;