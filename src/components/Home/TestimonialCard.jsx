import { Star } from "lucide-react";
import React from "react";

const TestimonialCard = ({ testimonial }) => {
  console.log(
    `array from : ${testimonial.rating}::`,
    Array.from({ length: testimonial.rating }),
  );
  return (
    <article className="space-y-6 px-4 ">
      <img
        src={testimonial.image}
        alt={testimonial.id}
        className="h-[100px] w-[100px] rounded-full"
      />

      <div>
        <div className="flex">
          {Array.from({ length: testimonial.rating }).map(() => (
            <Star className="h-5 w-5 " fill="#f5c542" stroke="none" />
          ))}
        </div>

        <h3 className="text-lg font-medium  text-secondary">
          {testimonial.name}
        </h3>
      </div>

      <p className="text-sm  leading-[180%]">{testimonial.quote}</p>

      <span className="text-sm text-[#999] -mt-3"> {testimonial.role}</span>
    </article>
  );
};

export default TestimonialCard;
