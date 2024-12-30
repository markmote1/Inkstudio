"use client";

import { ServiceCard } from '@/components/service-card';
import { BookButton } from '@/components/book-button';

const piercingServices = [
  {
    title: "Ear Lobe",
    price: "$30-50",
    description: "Traditional ear lobe piercing using sterile equipment and high-quality jewelry.",
    healing: "6-8 weeks",
    aftercare: [
      "Clean twice daily with saline solution",
      "Avoid touching with unwashed hands",
      "Don't remove jewelry during healing"
    ]
  },
  {
    title: "Nose",
    price: "$45-65",
    description: "Professional nose piercing with options for studs or rings.",
    healing: "2-4 months",
    aftercare: [
      "Use saline spray 2-3 times daily",
      "Avoid makeup around the area",
      "Don't twist or move the jewelry"
    ]
  },
  {
    title: "Industrial",
    price: "$70-90",
    description: "Double helix piercing connected with a single barbell.",
    healing: "6-12 months",
    aftercare: [
      "Clean thoroughly but gently",
      "Avoid sleeping on the pierced side",
      "Keep hair away from piercing"
    ]
  }
];

export default function PiercingsPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Professional <span className="text-[#87CEEB]">Piercings</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Our experienced piercers use only the highest quality materials and follow strict sterilization protocols to ensure your safety and satisfaction.
          </p>
          <BookButton 
            className="bg-[#87CEEB] text-black hover:bg-[#87CEEB]/80"
            size="lg"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {piercingServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}