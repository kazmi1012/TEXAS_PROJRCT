import React from "react";
import { Link, useParams } from "react-router-dom";
import { popularProperties } from "../components/Home/popularPropertiesData";

const PropertyDetail = () => {
  const { id } = useParams();
  console.log("id", id);
  const property = popularProperties.find(
    (item) => String(item.id) === String(id),
  );

  if (!property) {
    return (
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-2xl sm:text-3xl font-semibold text-secondary">
          Property not found
        </h1>
        <p className="mt-3 text-[#787777]">
          The property you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block bg-primary text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Back to home
        </Link>
      </section>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-secondary">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${property.image})` }}
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            {property.address}
          </h1>
          <div className="flex items-center gap-2 text-sm sm:text-base">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/" className="hover:text-primary transition-colors">
              Properties
            </Link>
            <span>/</span>
            <span className="text-gray-300">{property.address}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <img
                src={property.image}
                alt={property.address}
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[520px] object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">
                {property.address}
              </h2>
              <p className="text-sm sm:text-base text-[#787777]">
                {property.city}
              </p>
              <div className="space-y-4 text-sm sm:text-base text-[#666] leading-relaxed">
                {property.description}
              </div>
              <div className="pt-2 text-primary text-lg sm:text-xl font-bold">
                {property.price}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyDetail;
