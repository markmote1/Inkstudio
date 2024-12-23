"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

interface ServicePreviewProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

function ServicePreview({ title, description, image, link }: ServicePreviewProps) {
  return (
    <div className="relative group">
      <div className="relative h-96 w-full overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-6 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
          <p className="text-gray-200 mb-4">{description}</p>
          <Link href={link}>
            <Button className="bg-[#87CEEB] text-black hover:bg-[#87CEEB]/80">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Our <span className="text-[#87CEEB]">Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServicePreview
            title="Custom Tattoos"
            description="From traditional to contemporary styles, our artists bring your vision to life with precision and creativity."
            image="https://images.unsplash.com/photo-1590246814883-57c511e76523?auto=format&fit=crop&q=80"
            link="/tattoos"
          />
          <ServicePreview
            title="Professional Piercings"
            description="Expert piercing services using sterile equipment and high-quality jewelry for a safe and comfortable experience."
            image="https://images.unsplash.com/photo-1535637603896-07c179d71103?auto=format&fit=crop&q=80"
            link="/piercings"
          />
        </div>
      </div>
    </section>
  );
}