import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Clock, Mail, Phone } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const onSubmit = async (data) => {
    try {
      setSubmitStatus(null);
      await axios.post("http://localhost:4000/api/contact", data);
      setSubmitStatus({ type: "success", message: "Message sent successfully." });
      reset();
    } catch (error) {
      const message =
        error?.response?.data?.error ||
        "Failed to send message. Please try again.";
      setSubmitStatus({ type: "error", message });
    }
  };

  const contactInfo = [
    {
      id: 1,
      icon: MapPin,
      title: "Location:",
      details: ["Kathmandu, Bagmati Province", "Nepal"],
    },
    {
      id: 2,
      icon: Clock,
      title: "Open Hours:",
      details: ["Sunday-Friday:", "10:00 AM - 6:00 PM"],
    },
    {
      id: 3,
      icon: Mail,
      title: "Email:",
      details: ["info@arin.com"],
    },
    {
      id: 4,
      icon: Phone,
      title: "Call:",
      details: ["+977 123 456 7890"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 md:h-96 bg-gradient-to-r from-secondary to-primary">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Contact Us
          </h1>
          <div className="flex items-center gap-2 text-sm sm:text-base">
            <a href="/" className="hover:text-primary transition-colors">
              Home
            </a>
            <span>/</span>
            <span className="text-gray-300">Contact</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6 sm:space-y-8">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.id} className="flex items-start gap-4">
                    <div className="bg-secondary text-white p-3 sm:p-4 rounded-full flex-shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, index) => (
                        <p
                          key={index}
                          className="text-sm sm:text-base text-[#787777]"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5 sm:space-y-6"
              >
                {submitStatus && (
                  <div
                    className={`rounded-lg px-4 py-3 text-sm ${
                      submitStatus.type === "success"
                        ? "bg-green-50 text-green-700"
                        : "bg-red-50 text-red-700"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  {/* Name Field */}
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      {...register("name")}
                      className={`w-full px-4 sm:px-5 py-3 sm:py-4 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                        errors.name
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:ring-primary"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-sm text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      {...register("email")}
                      className={`w-full px-4 sm:px-5 py-3 sm:py-4 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:ring-primary"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-sm text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    {...register("subject")}
                    className={`w-full px-4 sm:px-5 py-3 sm:py-4 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                      errors.subject
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-primary"
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1.5 text-sm text-red-500">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <textarea
                    placeholder="Message"
                    rows="6"
                    {...register("message")}
                    className={`w-full px-4 sm:px-5 py-3 sm:py-4 border rounded-lg focus:outline-none focus:ring-2 transition-all resize-none ${
                      errors.message
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-primary"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-sm text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-primary/90 transition-colors duration-300"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
