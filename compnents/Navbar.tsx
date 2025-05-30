import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/">
            <a className="text-indigo-600 font-extrabold text-2xl tracking-tight hover:text-indigo-700 transition">
              Forma<span className="text-gray-900">Space</span>
            </a>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-medium text-gray-700">
            <Link href="/">
              <a className="hover:text-indigo-600 transition">Home</a>
            </Link>
            <Link href="/upload">
              <a className="hover:text-indigo-600 transition">Upload</a>
            </Link>
            <a
              href="#"
              className="hover:text-indigo-600 transition cursor-not-allowed opacity-50"
              title="Coming Soon"
            >
              Features
            </a>
            <a
              href="#"
              className="hover:text-indigo-600 transition cursor-not-allowed opacity-50"
              title="Coming Soon"
            >
              About
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            {menuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 font-medium text-gray-700">
            <Link href="/">
              <a
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2 rounded hover:bg-indigo-50 hover:text-indigo-600 transition"
              >
                Home
              </a>
            </Link>
            <Link href="/upload">
              <a
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2 rounded hover:bg-indigo-50 hover:text-indigo-600 transition"
              >
                Upload
              </a>
            </Link>
            <span
              className="block px-3 py-2 rounded text-gray-400 cursor-not-allowed"
              title="Coming Soon"
            >
              Features
            </span>
            <span
              className="block px-3 py-2 rounded text-gray-400 cursor-not-allowed"
              title="Coming Soon"
            >
              About
            </span>
          </div>
        </div>
      )}
    </nav>
  );
}
