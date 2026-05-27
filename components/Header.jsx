'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Bima Dispute Action Forum Logo"
                width={140}
                height={60}
                priority
                className="object-contain"
              />
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-black hover:text-gray-600 font-medium">Home</Link>
            <Link href="/about" className="text-black hover:text-gray-600 font-medium">About</Link>
            <Link href="/#services" className="text-black hover:text-gray-600 font-medium">Services</Link>
            <Link href="/#how-it-works" className="text-black hover:text-gray-600 font-medium">How It Works</Link>
            <Link href="/#faq" className="text-black hover:text-gray-600 font-medium">FAQ</Link>
            <Link href="/contact" className="text-black hover:text-gray-600 font-medium">Contact</Link>
          </nav>

          <div className="hidden md:flex space-x-4">
            <Link href="/contact" className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-full font-medium transition text-sm">
              Register Complaint
            </Link>
          </div>

          <button
            className="md:hidden text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <Link href="/" className="block text-black hover:text-gray-600 font-medium" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/about" className="block text-black hover:text-gray-600 font-medium" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/#services" className="block text-black hover:text-gray-600 font-medium" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link href="/#how-it-works" className="block text-black hover:text-gray-600 font-medium" onClick={() => setIsMenuOpen(false)}>How It Works</Link>
            <Link href="/#faq" className="block text-black hover:text-gray-600 font-medium" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
            <Link href="/contact" className="block text-black hover:text-gray-600 font-medium" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <Link href="/contact" className="block bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full font-medium text-center text-sm" onClick={() => setIsMenuOpen(false)}>
              Register Complaint
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
