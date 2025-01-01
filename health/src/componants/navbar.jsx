import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div>
          <img src="/logo.png" alt="Logo" className="h-16" />
        </div>
        {/* Menu for larger screens */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#home" className="text-gray-600 hover:text-gray-800">
              HOME
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-600 hover:text-gray-800">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#clinics" className="text-gray-600 hover:text-gray-800">
              CLINICS & TREATMENTS
            </a>
          </li>
          <li>
            <a href="#photos" className="text-gray-600 hover:text-gray-800">
              PHOTOS & NEWS
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-600 hover:text-gray-800">
              CONTACT US
            </a>
          </li>
        </ul>

        {/* Button */}
        <button className="hidden md:block bg-[#fb4b4e] text-white py-2 px-4 rounded-lg hover:bg-red-500">
          Make an Appointment
        </button>

        {/* Hamburger menu for smaller screens */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <a href="#home" className="text-gray-600 hover:text-gray-800">
                HOME
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-600 hover:text-gray-800">
                ABOUT
              </a>
            </li>
            <li>
              <a href="#clinics" className="text-gray-600 hover:text-gray-800">
                CLINICS & TREATMENTS
              </a>
            </li>
            <li>
              <a href="#photos" className="text-gray-600 hover:text-gray-800">
                PHOTOS & NEWS
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-600 hover:text-gray-800">
                CONTACT US
              </a>
            </li>
            <button className="bg-[#fb4b4e] text-white py-2 px-4 rounded-lg hover:bg-red-500 w-full">
              Make an Appointment
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
