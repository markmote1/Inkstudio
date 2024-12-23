"use client";

import { Button } from '@/components/ui/button';

interface BookButtonProps {
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  fullWidth?: boolean;
}

export function BookButton({ className, size = "default", fullWidth }: BookButtonProps) {
  return (
    <Button 
      size={size}
      className={`${className} ${fullWidth ? 'w-full' : ''}`}
      onClick={() => window.open('https://wa.me/1234567890', '_blank')}
    >
      Book Now
    </Button>
  );
}