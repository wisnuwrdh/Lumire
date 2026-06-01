"use client";

import { useEffect, useRef, useState } from "react";

export default function FadeIn({ children, delay = 0 }) {
  const [animated, setAnimated] = useState(false);
  const [hasJS, setHasJS] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setHasJS(true);
    const el = ref.current;
    if (!el) return;

    // If already in viewport on mount, show immediately (no flash)
    const rect = el.getBoundingClientRect();
    const inViewport = rect.top < window.innerHeight && rect.bottom >= 0;
    if (inViewport) {
      setAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isVisible = !hasJS || animated;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
