import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-lg fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">
          El-kufahn
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        <div
          className={`flex flex-col md:flex-row items-center space-x-6 ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <a href="#projects" className="hover:text-blue-500">
            Projects
          </a>
          <a href="#about" className="hover:text-blue-500">
            About
          </a>
          <a href="#blog" className="hover:text-blue-500">
            Blog
          </a>
          <a href="#contact" className="hover:text-blue-500">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
