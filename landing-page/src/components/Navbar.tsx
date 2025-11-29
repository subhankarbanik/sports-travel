"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Button from "./UI/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = ["Home", "Packages", "Experiences", "Plan A Trip", "Contact Us"];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#0D1B2A]/80 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-xl font-semibold tracking-wide">
          SPORTS
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm">
          {menuItems.map((item) => (
            <a key={item} href="#" className="hover:text-gray-300 transition">
              {item}
            </a>
          ))}
        </div>

     
        <div className="hidden md:block">
          <Button label="Explore Sporting Travel" />
        </div>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

     
      {open && (
        <div className="md:hidden bg-[#0D1B2A] px-6 py-4 space-y-4 text-white">
          {menuItems.map((item) => (
            <a
              key={item}
              href="#"
              className="block py-2 border-b border-white/10"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}

          <Button label="Plan My Trip" />
        </div>
      )}
    </nav>
  );
}

