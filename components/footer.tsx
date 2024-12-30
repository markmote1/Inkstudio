import Link from 'next/link';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-[#87CEEB] mb-4">Ink Masters</h3>
            <p className="text-gray-300">
              Premium tattoo studio offering custom designs and exceptional artistry.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/gallery" className="hover:text-[#87CEEB]">Gallery</Link></li>
              <li><Link href="/artists" className="hover:text-[#87CEEB]">Artists</Link></li>
              <li><Link href="/blog" className="hover:text-[#87CEEB]">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-[#87CEEB]">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li>123 Tattoo Street</li>
              <li>New York, NY 10001</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@inkmasters.com</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#87CEEB]"><Instagram /></a>
              <a href="#" className="hover:text-[#87CEEB]"><Facebook /></a>
              <a href="#" className="hover:text-[#87CEEB]"><Twitter /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ink Masters. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}