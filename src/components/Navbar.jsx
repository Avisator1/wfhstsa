import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="max-w-[115rem] mx-auto neue">
      <div className="w-full z-[999999] mix-blend-difference transition-transform duration-500">
        {/* Main Navbar Container */}
        <div className="max-w-[1105em] mx-auto h-20 flex items-center justify-between neue">
          {/* Left: Logo */}
          <div className="text-[24px] text-black">WFHSTSA</div>

          {/* Right: Links + Contact */}
          <div className="hidden md:flex items-center space-x-12 ml-auto text-black text-[18px]">
            <a href="/" className="hover:underline">Home</a>
            <a href="/leadership" className="hover:underline opacity-75">Leadership</a>
            <a href="#membership" className="hover:underline opacity-75">Membership</a>
            <a href="#projects" className="hover:underline opacity-75">Service</a>
            <a href="#fundraising" className="hover:underline opacity-75">Fundraising</a>
            <a href="#social" className="hover:underline opacity-75">Socials</a>
            <div className="opacity-75">Contact</div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-black focus:outline-none flex items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-white backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[400px]' : 'max-h-0'}`}>
          <div className="px-4 pb-6 flex flex-col space-y-5 coolvetia-font font-[450] text-base text-black">
            <a href="/" onClick={() => setIsOpen(false)} className="pt-4 hover:underline">Home</a>
            <a href="/leadership" onClick={() => setIsOpen(false)} className="hover:underline">Leadership</a>
            <a href="#membership" onClick={() => setIsOpen(false)} className="hover:underline">Membership</a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="hover:underline">Service Projects</a>
            <a href="#fundraising" onClick={() => setIsOpen(false)} className="hover:underline">Fundraising</a>
            <a href="#social" onClick={() => setIsOpen(false)} className="hover:underline">Social Activities</a>
            <div className="pt-4 text-sm border-t border-gray-200">+1 (678) 333-8925</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
