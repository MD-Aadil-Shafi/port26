import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

type SkillGroup = {
  title: string;
  description: string;
  icon: string;
  accent: string;
  skills: string[];
};

const groups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Composable UIs with thoughtful state and motion.",
    icon: "◐",
    accent: "from-fuchsia-500 to-cyan-400",
    skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "Redux", "Tailwind CSS", "SSR", "CSR"],
  },
  {
    title: "Backend",
    description: "Typed services, clean boundaries, fast queries.",
    icon: "◇",
    accent: "from-cyan-400 to-emerald-400",
    skills: ["Node.js", "Express", "FastAPI", "REST", "WebSockets"],
  },
  {
    title: "Languages",
    description: "Daily drivers across stacks.",
    icon: "⌘",
    accent: "from-violet-500 to-fuchsia-500",
    skills: ["TypeScript", "JavaScript", "Python", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Data",
    description: "Schemas that scale, queries that don't crawl.",
    icon: "◈",
    accent: "from-amber-400 to-pink-500",
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
  },
  {
    title: "DevOps & Cloud",
    description: "Reproducible builds, fast pipelines, painless deploys.",
    icon: "⌬",
    accent: "from-pink-500 to-orange-400",
    skills: ["Docker", "GitHub Actions", "AWS", "Vercel", "Nginx"],
  },
  {
    title: "Quality & Tooling",
    description: "Confidence, observability, and DX you can feel.",
    icon: "✦",
    accent: "from-emerald-400 to-cyan-400",
    skills: ["Jest", "Playwright", "PyTest", "ESLint", "Prettier"],
  },
];

const marqueeStack = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "JavaScript",
  "Python",
  "Redux",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "Docker",
  "AWS",
  "Vercel",
  "Tailwind",
  "Jest",
  "PyTest",
  "Playwright",
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6 scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Skills"
          title="Tools I use to ship things"
          description="A curated stack I reach for daily — battle-tested across e-commerce, SaaS, fintech, edtech and content platforms."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 70}>
              <SkillCard group={g} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-20 relative overflow-hidden rounded-2xl glass py-6">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#05060a] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#05060a] to-transparent z-10" />
            <div className="flex gap-10 whitespace-nowrap animate-marquee">
              {[...marqueeStack, ...marqueeStack].map((s, i) => (
                <span
                  key={`${s}-${i}`}
                  className="text-2xl md:text-3xl font-semibold text-zinc-500 hover:text-white transition-colors"
                >
                  {s}
                  <span className="mx-6 text-fuchsia-500/60">/</span>
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SkillCard({ group }: { group: SkillGroup }) {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl glass p-6 card-hover">
      <span
        aria-hidden
        className={`pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${group.accent} opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-30`}
      />

      <div className="flex items-center gap-3">
        <span
          className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${group.accent} text-white text-xl shadow-lg shadow-fuchsia-500/20`}
        >
          {group.icon}
        </span>
        <div>
          <h3 className="text-lg font-semibold text-zinc-100">{group.title}</h3>
          <p className="text-xs text-zinc-500">{group.description}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {group.skills.map((s) => (
          <span
            key={s}
            className="relative inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-300 hover:text-white hover:border-fuchsia-400/40 hover:bg-white/[0.06] transition-colors"
          >
            <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-br ${group.accent}`} />
            {s}
          </span>
        ))}
      </div>

      <div className={`mt-6 h-px w-0 bg-gradient-to-r ${group.accent} transition-all duration-700 group-hover:w-full`} />
    </div>
  );
}
