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
    title: "RAG APP",
    blurb:
      "Users can upload 5 document per month and chat within context of those docs of max 50 questions per month. Can generate chat report page, can view usage metrics and much more.",
    tags: ["AWS Services", "Docker","Python", "VectorDB", "Postgres", "LLM", "CI/CD", "RAG Pipeline", "React", "Redux"],
    href: "https://rag-adl.netlify.app",
    accent: "from-fuchsia-500 to-cyan-400",
    emoji: "📊",
  },
  {
    title: "Cute Expense Tracker (RN App)",
    blurb:
      "Built purely for one purpose: helping you track your daily expenses locally, without distractions.",
    tags: ["React Native", "TypeScript", "SQLite"],
    href: "https://play.google.com/store/apps/details?id=com.programivity.cuteExpenseTracker&pcampaignid=web_share",
    accent: "from-cyan-400 to-emerald-400",
    emoji: "🛒",
  },
  {
    title: "REST API for getting fake products.",
    blurb:
      "REST API created using Node & Express Js. It returns list of clothing products in response. Multiple parameters can be passed to get desired list of products.",
    tags: ["Node.js", "Express.js"],
    href: "https://documenter.getpostman.com/view/25965951/2s93CKQa39",
    accent: "from-pink-500 to-orange-400",
    emoji: "⚙️",
  },
  {
    title: "Advance Kid's Online Quiz App",
    blurb:
      "A full stack advance quiz web app, equipped with rich features and Google OAuth + JWT Authentication. Time limit feature.",
    tags: ["Node.js", "Express.js", "MongoDB", "CI/CD", "React", "TypeScript"],
    href: "https://kids-quiz-online.netlify.app",
    accent: "from-violet-500 to-fuchsia-500",
    emoji: "📝",
  },
  {
    title: "Machine Manufacturer ERP System",
    blurb:
      "This is a full stack web application, simulating an ERP system of machine manufacturing company with multiple outlets.",
    tags: ["AWS EC2", "Spring Boot", "MySQL", "React", "TypeScript", "Tailwind Css", "Ant design", "React-hook-form", "Zod"],
    href: "https://classic-industries-erp.netlify.app",
    accent: "from-amber-400 to-pink-500",
    emoji: "🎨",
  },
  {
    title: "Advance Blog Application",
    blurb:
      "Equipped with features like real time notification, comment, wishlist, like/unlike, Reset password.",
    tags: ["Node.js", "Express.js","Socket.io", "MongoDB", "CI/CD", "React", "TypeScript"],
    href: "https://blog-adl.netlify.app",
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
          title="Recent projects"
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
        <span className="text-gradient">View live</span>
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </div>

      {/* Bottom accent line */}
      <span className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
    </a>
  );
}
