import React from "react";

const ServiceBanner = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1768813282031-2aec62eee8b7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-[70vh] bg-cover" />
      <div className="absolute inset-0 h-[70vh] bg-black/50" />
      <div className="absolute inset-0 h-[70vh] flex flex-col gap-3 items-center justify-center">
        <h2 className="text-white text-4xl font-semibold">Service</h2>

        <div className="text-white text-sm space-x-3">
          <span>Home</span>
          <span>/</span>
          <span className="text-white/60">Service</span>
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;
