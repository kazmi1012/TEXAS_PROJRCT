import React from "react";
import ProptertyCard from "../Property/ProptertyCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { popularProperties } from "./popularPropertiesData";

const PopularProperties = () => {
  const properties = popularProperties;

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16 max-w-324">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 mb-10 sm:mb-12 lg:mb-14">
        <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-medium text-secondary">
          Popular Properties
        </h1>
        <button className="bg-primary text-white py-3 px-5 sm:py-4 sm:px-6 rounded-full text-sm sm:text-base font-medium hover:bg-primary/90 transition-colors whitespace-nowrap">
          View all properties
        </button>
      </div>

      <Slider {...settings}>
        {properties.map((property) => (
          <div key={property.id} className="px-2">
            <ProptertyCard property={property} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default PopularProperties;
