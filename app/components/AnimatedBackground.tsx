"use client";

import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrollY(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Animated blobs (parallax) */}
      <div
        className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-fuchsia-600/25 blur-3xl animate-blob"
        style={{ transform: `translate3d(0, ${scrollY * 0.18}px, 0)` }}
      />
      <div
        className="absolute top-1/3 -right-32 h-[560px] w-[560px] rounded-full bg-cyan-500/20 blur-3xl animate-blob-delay-1"
        style={{ transform: `translate3d(0, ${scrollY * -0.12}px, 0)` }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[480px] w-[480px] rounded-full bg-pink-500/15 blur-3xl animate-blob-delay-2"
        style={{ transform: `translate3d(0, ${scrollY * 0.08}px, 0)` }}
      />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 grid-overlay" />

      {/* Noise/film grain */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.7'/></svg>\")",
        }}
      />
    </div>
  );
}
