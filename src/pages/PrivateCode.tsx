import React from "react";
import { Link } from "react-router-dom";
import "../index.css"; // Ensures Tailwind and custom styles are loaded
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivateCode: React.FC = () => {
  return (
    <div className="dark min-h-screen w-screen overflow-x-hidden bg-primary relative">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-secondary/10 rounded-full animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-secondary/5 to-orange-500/5 rounded-lg rotate-45 animate-bounce"
          style={{ animationDuration: "3s" }}
        ></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 border-2 border-orange-500/10 rotate-45"></div>
        <div
          className="absolute top-1/3 right-1/3 w-20 h-20 bg-secondary/5 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-28 h-28 border border-secondary/10 rounded-lg rotate-12 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-r from-secondary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-l from-orange-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-gradient-to-r from-secondary/3 to-orange-500/3 rounded-full blur-3xl"></div>
      </div>

      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-5xl font-extrabold mb-4 text-secondary drop-shadow-lg">
          Private Repository
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
          Code Access Restricted
        </h2>
        <p className="mb-8 text-lg text-gray-300 max-w-md text-center">
          The source code for this project is private and not available for
          public viewing.
          <br />
          You can still explore the live demo to see the project in action.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-lg bg-secondary hover:bg-secondary/80 text-white font-bold shadow transition duration-200"
        >
          Go Home
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default PrivateCode;
