import { Home } from "lucide-react";
import React from "react";

const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <article className="p-7.5 bg-white w-fit text-center text-secondary ">
      <Icon className="w-[50px] h-[50px] mx-auto mb-2.5" />
      <h3 className="font-medium mb-4">{service.title}</h3>
      <p className="text-sm mb-4 text-[#999">{service.description}</p>

      <button className="mb-2">Learn More</button>
      <div className="h-0.5 w-20 bg-secondary mx-auto " />
    </article>
  );
};

export default ServiceCard;
