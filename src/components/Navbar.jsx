import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm px-8 py-5">
      <div className="flex justify-between items-center">

        {/* Logo */}
        <img
          src="/Gemini_Generated_Image_wsadu1wsadu1wsad.png"
          alt="Logo"
          className="h-10 w-auto"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <ul className="flex gap-5 items-center">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <button className="bg-black text-white px-5 py-2 rounded-lg hover:scale-105 transition">
            Button
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden mt-4 border-t pt-4">
          <ul className="flex flex-col gap-4 text-center">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <button className="w-full mt-4 bg-black text-white py-3 rounded-lg">
            Button
          </button>
        </div>
      )}
    </nav>
  );
}
