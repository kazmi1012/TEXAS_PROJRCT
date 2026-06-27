import React from "react";

const ContactLink = () => {
  return (
    <div className="py-12 sm:py-14 md:py-16 lg:py-[64px] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center justify-center">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-secondary font-bold mb-4 sm:mb-5 md:mb-6 text-center max-w-3xl leading-tight">
        Be a part of our growing real estate agents
      </h2>

      <button className="mx-auto bg-primary text-white py-3 px-5 sm:py-4 sm:px-6 md:px-8 rounded-full text-sm sm:text-base font-medium hover:bg-primary/90 transition-colors">
        Apply for real estate agent
      </button>
    </div>
  );
};

export default ContactLink;
