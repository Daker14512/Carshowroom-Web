import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          Car<span className="text-gray-800">Showroom</span>
        </h1>

        {/* Menu (desktop) */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li><a href="#" className="hover:text-blue-600">Home</a></li>
          <li><a href="#" className="hover:text-blue-600">Showroom</a></li>
          <li><a href="#" className="hover:text-blue-600">Brands</a></li>
          <li><a href="#" className="hover:text-blue-600">About</a></li>
          <li><a href="#" className="hover:text-blue-600">Contact</a></li>
        </ul>

        {/* Button Login */}
        <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Login
        </button>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu (dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="space-y-2 px-4 py-3 text-gray-700 font-medium">
            <li><a href="#" className="block hover:text-blue-600">Home</a></li>
            <li><a href="#" className="block hover:text-blue-600">Showroom</a></li>
            <li><a href="#" className="block hover:text-blue-600">Brands</a></li>
            <li><a href="#" className="block hover:text-blue-600">About</a></li>
            <li><a href="#" className="block hover:text-blue-600">Contact</a></li>
            <li>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Login
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
