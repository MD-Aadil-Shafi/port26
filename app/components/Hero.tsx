"use client";

import { useEffect, useRef, useState } from "react";

const ROLES = [
  "Senior Software Engineer",
  "Full-Stack Developer",
  "Frontend With React & Next.js",
  "Node.js & Python Engineer",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const orbRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const target = ROLES[roleIdx];
    const speed = deleting ? 35 : 80;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = target.slice(0, text.length + 1);
        setText(next);
        if (next === target) {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        const next = target.slice(0, text.length - 1);
        setText(next);
        if (next.length === 0) {
          setDeleting(false);
          setRoleIdx((i) => (i + 1) % ROLES.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, roleIdx]);

  // Parallax: shift orbs / heading on mouse move
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!orbRef.current || !heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      orbRef.current.style.transform = `translate3d(${x * 30}px, ${y * 30}px, 0)`;
    };
    const node = heroRef.current;
    node?.addEventListener("mousemove", onMove);
    return () => node?.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative min-h-[100svh] flex items-center pt-32 pb-20 px-6 overflow-hidden"
    >
      {/* Decorative orb */}
      <div ref={orbRef} className="absolute right-[-120px] top-1/4 hidden md:block">
        <div className="relative h-[420px] w-[420px]">
          <div className="absolute inset-0 rounded-full bg-gradient-animated opacity-40 blur-3xl animate-blob" />
          <div className="absolute inset-6 rounded-full border border-white/10 animate-spin-slow" />
          <div className="absolute inset-16 rounded-full border border-white/10 animate-spin-slow" style={{ animationDirection: "reverse" }} />
          <div className="absolute inset-28 rounded-full glass shadow-2xl shadow-fuchsia-500/30 animate-float" />
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Available for new opportunities
          </div>

          <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.05] tracking-tight">
            <span className="block text-zinc-100">Hi, I&apos;m Aadil —</span>
            <span className="block">
              I build <span className="text-gradient">delightful</span> web applications.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-2xl">
            <span className="font-mono text-zinc-300">{">"} </span>
            <span className="text-zinc-200">{text}</span>
            <span className="cursor-blink text-fuchsia-400">|</span>
          </p>

          <p className="mt-6 max-w-2xl text-zinc-400 leading-relaxed">
            5+ years shipping production apps with React, Next.js, Node.js, and Python.
            I love clean architectures, tasteful UI, and squeezing every last millisecond
            out of the critical render path.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
            >
              View my work
              <span className="transition-transform group-hover:translate-x-1">→</span>
              <span className="absolute inset-0 -z-10 rounded-full animate-pulse-glow" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-zinc-100 hover:border-white/20 transition-colors"
            >
              Get in touch
            </a>
            {/* <a
              href="/Aadil-Shafi-CV.pdf"
              className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition-colors"
            >
              <span className="underline decoration-fuchsia-400/40 underline-offset-4 group-hover:decoration-fuchsia-400">
                Download CV
              </span>
            </a> */}
          </div>

          <div className="mt-14 grid grid-cols-3 gap-4 max-w-md">
            {[
              { v: "5+", l: "Years exp" },
              { v: "30+", l: "Projects" },
              { v: "4+", l: "Tech stack" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl p-4 text-center card-hover">
                <div className="text-2xl font-semibold text-gradient">{s.v}</div>
                <div className="text-xs text-zinc-400 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          aria-label="Scroll to about"
          className="absolute left-1/2 -translate-x-1/2 bottom-6 flex flex-col items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          <span className="text-xs uppercase tracking-[0.25em]">Scroll</span>
          <span className="block h-10 w-6 rounded-full border border-zinc-600 relative">
            <span className="absolute left-1/2 top-2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-zinc-300 animate-float" />
          </span>
        </a>
      </div>
    </section>
  );
}
