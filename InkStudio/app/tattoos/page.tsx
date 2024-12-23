"use client";

import { ServiceCard } from '@/components/service-card';
import { BookButton } from '@/components/book-button';

const tattooServices = [
  {
    title: "Custom Design",
    price: "Starting at $150/hour",
    description: "Unique tattoo designs created specifically for you, bringing your vision to life.",
    healing: "2-3 weeks",
    aftercare: [
      "Keep the area clean and moisturized",
      "Avoid direct sunlight",
      "No swimming or soaking for 2 weeks"
    ]
  },
  {
    title: "Cover-Up",
    price: "Starting at $200/hour",
    description: "Transform existing tattoos into new artwork that you'll love.",
    healing: "2-3 weeks",
    aftercare: [
      "Follow standard tattoo aftercare",
      "Protect from sun exposure",
      "Keep the area clean and dry"
    ]
  },
  {
    title: "Traditional Japanese",
    price: "Starting at $180/hour",
    description: "Traditional Irezumi style tattoos with authentic Japanese imagery and techniques.",
    healing: "2-3 weeks",
    aftercare: [
      "Gentle washing with unscented soap",
      "Apply recommended aftercare cream",
      "Wear loose clothing over the area"
    ]
  }
];

export default function TattoosPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Custom <span className="text-[#87CEEB]">Tattoos</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Our skilled artists specialize in various styles, from traditional to contemporary, 
            ensuring your tattoo is a unique piece of art.
          </p>
          <BookButton 
            className="bg-[#87CEEB] text-black hover:bg-[#87CEEB]/80"
            size="lg"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tattooServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}