"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-white p-4">
      <div className="container mx-auto flex justify-center items-center gap-6">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={100}
            height={40}
            priority
            className="rounded-full"
          />
        </Link>

        {/* Burger menu (mobile only) */}
        <button
          className="sm:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className={`w-6 h-6 ${isOpen ? "text-yellow-300" : "text-white"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menu desktop (sm+) */}
        <ul className="hidden sm:flex space-x-6">
          <li>
            <Link
              href="#education"
              className="hover:bg-white hover:text-black px-3 py-1 rounded transition-colors duration-300 font-bold
"
            >
              Eduction
            </Link>
          </li>
          <li>
            <Link
              href="#completed-projects"
              className="hover:bg-white hover:text-black px-3 py-1 rounded transition-colors duration-300 font-bold
 "
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="hover:bg-white hover:text-black px-3 py-1 rounded transition-colors duration-300 font-bold
"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Menu burger déroulant (mobile) */}
      {isOpen && (
        <ul
          className="sm:hidden border border-white rounded-2xl py-2 px-4 flex space-x-4 justify-center items-center max-w-md mx-auto mt-5 font-bold
"
        >
          <li>
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="py-1 px-3 block hover:text-yellow-300 transition-colors duration-300"
            >
              Eduction
            </Link>
          </li>
          <li>
            <Link
              href="#completed-projects"
              onClick={() => setIsOpen(false)}
              className="py-1 px-3 block hover:text-yellow-300 transition-colors duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="py-1 px-3 block hover:text-yellow-300 transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
