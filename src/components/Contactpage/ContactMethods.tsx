import React, { useState } from "react";
import { FaPaperPlane, FaTimes } from "react-icons/fa";
import {
  contactMethods,
  responseGuarantee,
} from "../../constants/Contactpage/contactData";
import emailjs from "@emailjs/browser";

const ContactMethods: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);    

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
          alert("Thank you! We will contact you soon.");
          setIsModalOpen(false);
          setFormData({ name: "", email: "", phone: "" });
        },
        (error) => {
          console.error("Failed to send email:", error);
        }
      );
  };

  const handleCardClick = (e: React.MouseEvent, method: any) => {
    if (method.type === "call") {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contactMethods.map((method, index) => {
          const Icon = method.icon;
          return (
            <a
              key={index}
              href={method.type === "call" ? "#" : method.href}
              target={method.type === "call" ? undefined : method.target}
              rel={method.type === "call" ? undefined : method.rel}
              onClick={(e) => handleCardClick(e, method)}
              className={`group ${method.colorClasses.background} rounded-2xl shadow-lg hover:shadow-accent/30 transition-all duration-300 transform hover:-translate-y-2 border-2 ${method.colorClasses.border} ${method.colorClasses.hoverBorder} p-8 text-center backdrop-blur-xl relative overflow-hidden cursor-pointer`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-current/5 to-transparent"></div>
              <div className="relative z-10">
                <div
                  className={`${method.colorClasses.iconBg} rounded-full p-6 mx-auto mb-6 w-20 h-20 flex items-center justify-center ${method.colorClasses.hoverIconBg} transition-all duration-300 group-hover:scale-110`}
                >
                  <Icon
                    className={`text-3xl ${method.colorClasses.iconColor}`}
                  />
                </div>
                <h3
                  className={`text-2xl font-bold text-white mb-3 ${method.colorClasses.titleHover} transition-colors duration-300`}
                >
                  {method.title}
                </h3>
                <p
                  className={`${method.colorClasses.subtitleColor} font-semibold mb-3 text-lg`}
                >
                  {method.subtitle}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {method.description}
                </p>
                <div
                  className={`inline-flex items-center ${method.colorClasses.buttonColor} font-semibold ${method.colorClasses.buttonHover} transition-colors duration-300`}
                >
                  <span>{method.buttonText}</span>
                  <FaPaperPlane className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {/* Modal for Book Call */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-primary/95 to-background/95 rounded-2xl border-2 border-purple-500/30 max-w-md w-full mx-4 relative">
            {/* Close Button */}
            <div
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaTimes className="text-xl" />
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="text-center mb-6">
                <div className="bg-purple-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <FaPaperPlane className="text-2xl text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Schedule a Call
                </h3>
                <p className="text-gray-300">
                  Let's discuss your project requirements
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                >
                  <span>Submit Request</span>
                  <FaPaperPlane className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Quick Response Promise */}
      <div className="mt-12 text-center">
        <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 max-w-2xl mx-auto">
          <h4 className="text-xl font-semibold text-white mb-3">
            {responseGuarantee.title}
          </h4>
          <p className="text-gray-300 leading-relaxed">
            {responseGuarantee.methods.map((method, index) => (
              <span key={index}>
                <span className="text-secondary font-semibold">
                  {method.type}:
                </span>{" "}
                {method.time}
                {index < responseGuarantee.methods.length - 1 ? " • " : ""}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactMethods;
