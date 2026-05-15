"use client";

import { useRef, type MouseEvent } from "react";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

type Project = {
  title: string;
  blurb: string;
  tags: string[];
  href: string;
  accent: string;
  emoji: string;
};

const projects: Project[] = [
  {
    title: "Atlas Analytics",
    blurb:
      "Real-time multi-tenant analytics dashboard. Next.js 15 RSC + WebSockets + ClickHouse — sub-second queries on 100M rows.",
    tags: ["Next.js", "TypeScript", "Node.js", "ClickHouse", "Docker"],
    href: "#",
    accent: "from-fuchsia-500 to-cyan-400",
    emoji: "📊",
  },
  {
    title: "Lumen Commerce",
    blurb:
      "Headless e-commerce storefront with SSR product pages, edge caching, and a typed checkout state machine.",
    tags: ["Next.js", "Redux", "Node.js", "Stripe", "Vercel Edge"],
    href: "#",
    accent: "from-cyan-400 to-emerald-400",
    emoji: "🛒",
  },
  {
    title: "Pulse Ingest",
    blurb:
      "Python/FastAPI event-ingestion pipeline handling 12M events/day. Kafka, Redis streams, and a Docker-Compose dev stack.",
    tags: ["Python", "FastAPI", "Kafka", "Redis", "Docker"],
    href: "#",
    accent: "from-pink-500 to-orange-400",
    emoji: "⚙️",
  },
  {
    title: "Nimbus Docs",
    blurb:
      "Collaborative docs editor with offline-first sync, CRDT merging, and an SSR landing page that scores 100 on Lighthouse.",
    tags: ["React", "TypeScript", "Yjs", "Node.js", "PostgreSQL"],
    href: "#",
    accent: "from-violet-500 to-fuchsia-500",
    emoji: "📝",
  },
  {
    title: "Halo UI Kit",
    blurb:
      "Open-source React component library with 60+ accessible components, theming, and a Storybook docs site.",
    tags: ["React", "TypeScript", "Tailwind", "Storybook"],
    href: "#",
    accent: "from-amber-400 to-pink-500",
    emoji: "🎨",
  },
  {
    title: "Orbit Auth",
    blurb:
      "Drop-in auth-as-a-service with passkeys, social login, and Docker-based self-hosting. CSR + SSR session strategies.",
    tags: ["Node.js", "Next.js", "Redis", "Docker"],
    href: "#",
    accent: "from-emerald-400 to-cyan-400",
    emoji: "🔐",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6 scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Selected Work"
          title="Projects I'm proud of"
          description="A handful of products and platforms I've designed, architected, or shipped end-to-end."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <Reveal key={p.title} direction="up" delay={i * 80}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y / rect.height) - 0.5) * -8;
    const ry = ((x / rect.width) - 0.5) * 10;
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0) rotateY(0) translateY(0)";
  };

  return (
    <a
      ref={ref}
      href={project.href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative block h-full overflow-hidden rounded-2xl glass p-6 transition-[transform,box-shadow] duration-300 will-change-transform hover:shadow-2xl hover:shadow-fuchsia-500/10"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Glow follows cursor */}
      <span
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(450px circle at var(--mx,50%) var(--my,50%), rgba(168,85,247,0.18), transparent 40%)",
        }}
      />

      <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${project.accent} text-2xl shadow-lg`}>
        <span>{project.emoji}</span>
      </div>

      <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-white transition-colors">
        {project.title}
      </h3>
      <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{project.blurb}</p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tags.map((t) => (
          <span
            key={t}
            className="rounded-full bg-white/5 border border-white/10 px-2 py-0.5 text-[11px] text-zinc-300"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm font-medium text-zinc-300">
        <span className="text-gradient">View case study</span>
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </div>

      {/* Bottom accent line */}
      <span className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
    </a>
  );
}
