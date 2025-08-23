"use client";

import { useEffect, useRef, useState } from "react";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const spanRef = useRef<HTMLSpanElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // only animate on client
  }, []);

  useEffect(() => {
    if (!mounted || !spanRef.current) return;

    const el = spanRef.current;
    const letters = words.split("");
    let index = 0;

    const interval = setInterval(() => {
      el.textContent = letters.slice(0, index + 1).join("");
      index++;
      if (index === letters.length) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, [mounted, words]);

  if (!mounted) return <span ref={spanRef} className={className}></span>;

  return <span ref={spanRef} className={className}></span>;
};
