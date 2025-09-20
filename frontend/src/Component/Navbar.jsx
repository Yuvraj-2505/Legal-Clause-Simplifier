import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; 
import { Link ,Navigate} from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm w-full rounded-2xl ">
      <div className="container w-full px-2 py-2 flex  justify-between ">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* Replace with your actual logo component or image */}
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            {/* You might want an actual logo SVG or image here */}
            <span className="text-white font-bold text-sm">AI</span>
          </div>
          <span className="text-xl font-semibold text-gray-800">LegalAI</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">About Us</Link>
            <Link to="/law-section" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Law Section</Link>
        </div>

        {/* Login Button - Desktop */}
        <div className="hidden md:block">
          <Link to="/login">
            <button className="px-6 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
              Login
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-blue-600 focus:outline-none">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col space-y-2 px-4 py-4">
            <Link to="/" className="block text-gray-600 hover:text-blue-600 font-medium transition-colors py-2">Home</Link>
            <Link to="/about" className="block text-gray-600 hover:text-blue-600 font-medium transition-colors py-2">About Us</Link>
            <Link to="/law-section" className="block text-gray-600 hover:text-blue-600 font-medium transition-colors py-2">Law Section</Link>
            <Link to="/login">
              <button className="w-full mt-2 px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
                Login
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;