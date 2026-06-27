import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { id: 1, label: "Home", href: "#" },
    { id: 2, label: "About", href: "#" },
    { id: 3, label: "Service", href: "#" },
    { id: 4, label: "Contact Us", href: "#" },
  ];

  const properties = [
    { id: 1, label: "Our Properties", href: "#" },
    { id: 2, label: "Property for Sale", href: "#" },
    { id: 3, label: "House for Sale", href: "#" },
    { id: 4, label: "Real Estate Agents", href: "#" },
  ];

  const socialLinks = [
    { id: 1, icon: Facebook, href: "#", label: "Facebook" },
    { id: 2, icon: Twitter, href: "#", label: "Twitter" },
    { id: 3, icon: Instagram, href: "#", label: "Instagram" },
    { id: 4, icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-secondary text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-5">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Arin</h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Your trusted partner in finding the perfect home. We make real
              estate simple, transparent, and accessible for everyone.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-white/10 hover:bg-primary transition-colors duration-300 p-2.5 rounded-full"
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 sm:space-y-5">
            <h4 className="text-lg sm:text-xl font-semibold text-white">
              Quick Links
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-gray-300 hover:text-primary transition-colors duration-300 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Properties */}
          <div className="space-y-4 sm:space-y-5">
            <h4 className="text-lg sm:text-xl font-semibold text-white">
              Properties
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {properties.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-gray-300 hover:text-primary transition-colors duration-300 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-5">
            <h4 className="text-lg sm:text-xl font-semibold text-white">
              Contact Us
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-gray-300">
                  Kathmandu, Nepal
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+9771234567890"
                  className="text-sm sm:text-base text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  +977 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@arin.com"
                  className="text-sm sm:text-base text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  info@arin.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
              © {new Date().getFullYear()} Arin Real Estate. All rights
              reserved.
            </p>
            <div className="flex gap-6 text-xs sm:text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
