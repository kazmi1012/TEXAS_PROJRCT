import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    {
      to: "/",
      label: "Home",
    },
    {
      to: "/about",
      label: "About",
    },
    {
      to: "/service",
      label: "Service",
    },
    {
      to: "/contact",
      label: "Contact Us",
    },
  ];
  return (
    <header className="relative mx-auto text-white flex items-center justify-between bg-primary w-[95%] max-w-[1140px] py-6 px-4 sm:px-6 md:px-8 rounded-md">
      <h1 className="text-xl text-white/60 font-semibold">Arin </h1>

      <nav className="hidden lg:flex space-x-4">
        {links.map((el) => (
          <NavLink
            to={el.to}
            className={({ isActive }) => `${isActive && "text-blue-500"}`}
          >
            {el.label}
          </NavLink>
        ))}
      </nav>

      <button
        type="button"
        className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/20 hover:bg-white/10 transition"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="sr-only">Open main menu</span>
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <div
        className={`lg:hidden fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden={!isOpen}
      />

      <div
        className={`lg:hidden fixed top-0 right-0 z-50 h-full w-72 bg-white text-slate-900 border-l border-black/10 p-6 transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="mt-12 flex flex-col gap-4">
          {links.map((el) => (
            <NavLink
              key={el.to}
              to={el.to}
              className={({ isActive }) =>
                `${isActive ? "text-blue-600" : "text-slate-900"}`
              }
              onClick={() => setIsOpen(false)}
            >
              {el.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
