"use client";

import Image from 'next/image';

interface ArtistCardProps {
  name: string;
  specialty: string;
  image: string;
  bio: string;
}

export function ArtistCard({ name, specialty, image, bio }: ArtistCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <div className="relative h-80">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-[#87CEEB] mb-3">{specialty} Specialist</p>
        <p className="text-gray-400">{bio}</p>
      </div>
    </div>
  );
}