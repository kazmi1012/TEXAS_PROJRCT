import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 h-screen bg-[url('https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=1128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center" />

      <div className="absolute inset-0 bg-black/40 h-screen" />

      <div
        data-aos="fade-up"
        className="absolute inset-0 h-screen flex flex-col gap-4 sm:gap-6 justify-center items-center px-4 sm:px-6 md:px-8"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl  text-white text-center font-semibold max-w-4xl leading-tight">
          Easiest way to find your dream home
        </h1>

        <div className="w-full max-w-xl flex flex-col sm:flex-row gap-3  items-stretch sm:items-center">
          <input
            type="text"
            placeholder="Your location e.g. Dharan"
            className="bg-white py-3 px-5 sm:py-4 sm:px-7 rounded-full flex-1 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button className="py-3 px-6 sm:py-4 sm:px-8 bg-primary text-white rounded-full text-sm sm:text-base font-medium hover:bg-primary/90 transition-colors whitespace-nowrap">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
