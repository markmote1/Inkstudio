"use client";

import Image from 'next/image';
import { useState } from 'react';

interface GalleryItemProps {
  src: string;
  alt: string;
  category: string;
}

export function GalleryItem({ src, alt, category }: GalleryItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative h-80 group overflow-hidden rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />
      {isHovered && (
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300">
          <p className="text-[#87CEEB] text-lg font-semibold">{category}</p>
        </div>
      )}
    </div>
  );
}