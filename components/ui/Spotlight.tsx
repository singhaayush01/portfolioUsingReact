"use client";

import { useEffect, useRef, useState } from "react";

interface SpotlightProps {
  className?: string;
  fill?: string;
}

export const Spotlight = ({ className, fill = "white" }: SpotlightProps) => {
  const [mounted, setMounted] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // prevent SSR from rendering anything that uses DOM

  return (
    <div
      ref={divRef}
      className={`absolute rounded-full opacity-30 blur-3xl ${className}`}
      style={{
        background: fill,
        width: "500px",
        height: "500px",
      }}
    />
  );
};
