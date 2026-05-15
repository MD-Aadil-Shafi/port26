import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const highlights = [
  {
    title: "Product-minded",
    body: "I obsess over the user experience as much as the code. I ship features that ladder up to real business outcomes.",
    icon: "✦",
  },
  {
    title: "Performance-first",
    body: "code-split routes, Lazy loading, debounced & throttled results, edge caching — speed is non-negotiable.",
    icon: "⚡",
  },
  {
    title: "Architecture & DX",
    body: "Clean modular boundaries, typed APIs, monorepos, CI/CD pipelines, and tooling that makes teams faster.",
    icon: "◈",
  },
  {
    title: "Cross-stack",
    body: "Comfortable from React UIs to Node services to Python backend jobs and Docker.",
    icon: "⌬",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 scroll-mt-24">
      <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div>
          <SectionTitle
            eyebrow="About"
            title="Engineer who ships beautiful software"
            description="With 5+ years across startups and product teams, I build full-stack applications that are fast, accessible, and a joy to use. I care equally about pixel-perfect UI and the responsive backend systems quietly humming behind it."
          />

          <Reveal delay={200}>
            <div className="mt-8 space-y-4 text-zinc-400 leading-relaxed">
              <p>
                I specialize in modern <span className="text-zinc-200">React</span> and{" "}
                <span className="text-zinc-200">Next.js</span> ecosystems — building both
                server-rendered (SSR) and client-rendered (CSR) experiences with smart
                hydration, suspense streaming, and partial prerendering.
              </p>
              <p>
                On the backend I&apos;ve shipped <span className="text-zinc-200">Node.js</span>{" "}
                and <span className="text-zinc-200">Python (FastAPI)</span> services, designed{" "}
                REST APIs, optimized SQL/NoSQL data layers, and packaged
                most of them into <span className="text-zinc-200">Docker</span> for
                reproducible cloud deploys.
              </p>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "Node.js",
                "Python",
                "FastAPI",
                "TypeScript",
                "JavaScript",
                "Redux",
                "SSR",
                "CSR",
                "Docker",
                "AWS"
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full glass px-3 py-1 text-xs text-zinc-300 hover:text-white hover:border-fuchsia-400/40 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {highlights.map((h, i) => (
            <Reveal
              key={h.title}
              direction={i % 2 === 0 ? "right" : "up"}
              delay={i * 100}
            >
              <div className="group glass rounded-2xl p-6 card-hover h-full">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-animated text-white shadow-lg shadow-fuchsia-500/20">
                    {h.icon}
                  </span>
                  <h3 className="text-lg font-semibold text-zinc-100">{h.title}</h3>
                </div>
                <p className="mt-4 text-sm text-zinc-400 leading-relaxed">{h.body}</p>
                <div className="mt-5 h-px w-0 bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-pink-500 transition-all duration-700 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
