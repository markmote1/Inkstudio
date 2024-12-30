"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { BookButton } from './book-button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const serviceLinks = [
    { href: "/tattoos", label: "Tattoos" },
    { href: "/piercings", label: "Piercings" },
  ];

  const mainLinks = [
    { href: "/", label: "Home" },
    { href: "/gallery", label: "Gallery" },
    { href: "/artists", label: "Artists" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" }
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-black/95 text-white fixed w-full z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="text-2xl font-bold text-[#87CEEB] hover:scale-105 transition-transform"
            >
              Ink Masters
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {mainLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="hover:text-[#87CEEB] px-3 py-2 transition-colors"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </Link>
              ))}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center px-3 py-2 hover:text-[#87CEEB] transition-colors">
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-gray-900 border-gray-800">
                  {serviceLinks.map((link) => (
                    <DropdownMenuItem key={link.href}>
                      <Link 
                        href={link.href}
                        className="text-white hover:text-[#87CEEB] w-full transition-colors"
                        onClick={handleLinkClick}
                      >
                        {link.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <BookButton className="bg-[#87CEEB] text-black hover:bg-[#87CEEB]/80" />
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#87CEEB] transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block hover:text-[#87CEEB] px-3 py-2 transition-colors"
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-3 py-2 text-sm font-medium">Services</div>
            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block hover:text-[#87CEEB] px-6 py-2 transition-colors"
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            ))}
            <BookButton 
              className="bg-[#87CEEB] text-black hover:bg-[#87CEEB]/80 mt-4" 
              fullWidth
            />
          </div>
        </div>
      )}
    </nav>
  );
}