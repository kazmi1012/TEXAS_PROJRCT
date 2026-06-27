import { Bath, Bed } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const ProptertyCard = ({ property }) => {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-md transition-shadow duration-300">
      <img
        src={property.image}
        alt={property.id}
        className="h-48 sm:h-56 md:h-64 lg:h-72 w-full object-cover"
      />

      <div className="p-4 sm:p-5 md:p-6 lg:p-7.5">
        <p className="text-primary text-lg sm:text-xl font-bold">
          {property.price}
        </p>

        <p className="my-2 text-xs sm:text-[13px] text-[#666] line-clamp-1">
          {property.address}
        </p>

        <p className="font-bold text-base sm:text-lg md:text-xl mb-3 sm:mb-4">
          {property.city}
        </p>

        <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
          <div className="flex text-xs sm:text-sm text-[#666] items-center gap-1.5 sm:gap-2">
            <Bed className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>{property.beds} beds</span>
          </div>
          <div className="flex text-xs sm:text-sm text-[#666] items-center gap-1.5 sm:gap-2">
            <Bath className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>{property.baths} baths</span>
          </div>
        </div>

        <Link
          to={`/properties/${property.id}`}
          className="mt-3 sm:mt-4 inline-block bg-primary px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-full text-white text-xs sm:text-sm font-medium hover:bg-primary/90 transition-colors w-full sm:w-auto text-center"
        >
          See details
        </Link>
      </div>
    </article>
  );
};

export default ProptertyCard;
