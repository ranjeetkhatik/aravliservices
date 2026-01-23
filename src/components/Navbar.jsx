import React, { useState } from 'react';
import '../myCSS.css'; // Assume you have a CSS file for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="text-xl font-bold text-blue-600">BrandName</div>
      <ul className="flex space-x-6 text-gray-700">
        <li className="hover:text-blue-500 cursor-pointer">Home</li>
        <li className="hover:text-blue-500 cursor-pointer">Features</li>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Get Started
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;