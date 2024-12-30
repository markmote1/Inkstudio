"use client";

import { ArtistCard } from '@/components/artist-card';

const artists = [
  {
    name: "Alex Rivers",
    specialty: "Traditional",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
    bio: "Specializing in traditional American tattoos with over 10 years of experience."
  },
  {
    name: "Sam Chen",
    specialty: "Japanese",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    bio: "Master of Japanese tattoo art with deep knowledge of traditional symbolism and techniques."
  },
  {
    name: "Jordan Lee",
    specialty: "Realism",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
    bio: "Known for creating stunning photorealistic portraits and nature-inspired pieces."
  }
];

export default function ArtistsPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-white mb-12">
          Meet Our <span className="text-[#87CEEB]">Artists</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <ArtistCard key={index} {...artist} />
          ))}
        </div>
      </div>
    </div>
  );
}