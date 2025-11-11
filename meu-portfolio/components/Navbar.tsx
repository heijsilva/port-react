"use client";

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-[#1a2332]/80 backdrop-blur-md z-50 border-b border-[#2d3a4d]">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#c9c5ba]">João Silva</h1>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8">
            <li><a href="#home" className="text-[#8b95a5] hover:text-[#c9c5ba] transition">Home</a></li>
            <li><a href="#about" className="text-[#8b95a5] hover:text-[#c9c5ba] transition">Sobre</a></li>
            <li><a href="#projects" className="text-[#8b95a5] hover:text-[#c9c5ba] transition">Projetos</a></li>
            <li><a href="#hackathons" className="text-[#8b95a5] hover:text-[#c9c5ba] transition">Hackathons</a></li>
            <li><a href="#contact" className="text-[#8b95a5] hover:text-[#c9c5ba] transition">Contato</a></li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#c9c5ba]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden mt-4 space-y-4">
            <li><a href="#home" className="block text-[#8b95a5] hover:text-[#c9c5ba] transition" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#about" className="block text-[#8b95a5] hover:text-[#c9c5ba] transition" onClick={() => setIsOpen(false)}>Sobre</a></li>
            <li><a href="#projects" className="block text-[#8b95a5] hover:text-[#c9c5ba] transition" onClick={() => setIsOpen(false)}>Projetos</a></li>
            <li><a href="#hackathons" className="block text-[#8b95a5] hover:text-[#c9c5ba] transition" onClick={() => setIsOpen(false)}>Hackathons</a></li>
            <li><a href="#contact" className="block text-[#8b95a5] hover:text-[#c9c5ba] transition" onClick={() => setIsOpen(false)}>Contato</a></li>
          </ul>
        )}
      </nav>
    </header>
  );
}