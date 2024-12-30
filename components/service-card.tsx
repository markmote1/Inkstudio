"use client";

import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  healing: string;
  aftercare: string[];
}

export function ServiceCard({ title, price, description, healing, aftercare }: ServiceCardProps) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-[#87CEEB] transition-colors">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-[#87CEEB] text-lg mb-4">{price}</p>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="mb-4">
        <p className="text-white font-semibold mb-2">Healing Time:</p>
        <p className="text-gray-400">{healing}</p>
      </div>
      <div>
        <p className="text-white font-semibold mb-2">Aftercare:</p>
        <ul className="text-gray-400 list-disc list-inside">
          {aftercare.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}