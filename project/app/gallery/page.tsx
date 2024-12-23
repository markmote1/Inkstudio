"use client";

import { GalleryItem } from '@/components/gallery-item';

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1590246814883-57c511e76523?auto=format&fit=crop&q=80",
    alt: "Traditional Tattoo",
    category: "Traditional"
  },
  {
    src: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&q=80",
    alt: "Japanese Tattoo",
    category: "Japanese"
  },
  {
    src: "https://images.unsplash.com/photo-1611501267726-c4c6eea22f09?auto=format&fit=crop&q=80",
    alt: "Realism Tattoo",
    category: "Realism"
  },
  {
    src: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80",
    alt: "Blackwork Tattoo",
    category: "Blackwork"
  },
  {
    src: "https://images.unsplash.com/photo-1598371839873-a547a0e98001?auto=format&fit=crop&q=80",
    alt: "Watercolor Tattoo",
    category: "Watercolor"
  },
  {
    src: "https://images.unsplash.com/photo-1590246814899-3c3977c8c0a4?auto=format&fit=crop&q=80",
    alt: "Minimalist Tattoo",
    category: "Minimalist"
  }
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-white mb-12">
          Our <span className="text-[#87CEEB]">Gallery</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <GalleryItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}