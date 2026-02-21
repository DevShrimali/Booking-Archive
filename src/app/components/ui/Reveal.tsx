import React, { useEffect, useRef, useState } from 'react';
import { cn } from './utils'; // Reusing cn utility

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
  overflowVisible?: boolean;
}

export function Reveal({ children, width = "fit-content", className, delay = 0, overflowVisible = false }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Only animate once
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const el = ref.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ width }}
      className={cn("relative", overflowVisible ? "overflow-visible" : "overflow-hidden", className)}
    >
      <div
        className="h-full w-full"
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(50px)",
          opacity: isVisible ? 1 : 0,
          transition: `all 1000ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`
        }}
      >
        {children}
      </div>
    </div>
  );
}
