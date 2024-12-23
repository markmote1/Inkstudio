"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from 'next/image';

interface ParallaxImageProps {
  src: string;
  alt: string;
}

export function ParallaxImage({ src, alt }: ParallaxImageProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 500], [0.5, 0.2]);

  return (
    <motion.div
      className="absolute inset-0"
      style={{ y, opacity }}
      initial={{ scale: 1.2 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.5 }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority
      />
    </motion.div>
  );
}