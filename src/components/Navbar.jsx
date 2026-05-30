import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-white shadow-sm">

      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/Gemini_Generated_Image_wsadu1wsadu1wsad.png"
          alt="Logo"
          className="h-10 w-auto"
        />
      </div>

      {/* Right Side (Menu + Button together) */}
      <div className="flex items-center gap-4">

        <ul className="hidden md:flex gap-5 items-center">

          <li>
            <a
              href="#home"
              className="cursor-pointer hover:text-indigo-600 transition"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="cursor-pointer hover:text-indigo-600 transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#blog"
              className="cursor-pointer hover:text-indigo-600 transition"
            >
              Blog
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="cursor-pointer hover:text-indigo-600 transition"
            >
              Contact
            </a>
          </li>


        </ul>

        <button className="bg-black text-white px-5 py-2 rounded-lg hover:scale-105 transition">
          Button
        </button>

      </div>

      {/* Mobile Menu Icon */}
      <Menu className="md:hidden" />
    </nav>
  );
}