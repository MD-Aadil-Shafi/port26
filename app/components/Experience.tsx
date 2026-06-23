import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

type Job = {
  role: string;
  company: string;
  client?: string;
  period: string;
  location: string;
  bullets: string[];
  stack: string[];
};

const jobs: Job[] = [
  {
    role: "Fullstack Software Developer",
    company: "Uplers",
    client: "Theta Softwares. California, USA. (LLM training startup)",
    period: "Jan 2026 -- present",
    location: "Remote",
    bullets: [
      "Worked on developing the applications to be tested by LLMs.",
      "Worked on SQL queries and seeders to populate data to be tested by LLMs.",
      "Worked on Python FastAPI to develop backend systems.",
      "Worked on PDOs and Next Js Server side to perform DB operations.",
    ],
    stack: ["Docker", "Python", "FastAPI", "Next.js", "TypeScript", "Node.js", "PostgreSQL" ],
  },
  {
    role: "Senior Software Engineer",
    company: "Destm Technologies",
    period: "Jan 2025 -- Jan 2026",
    client: "1800Flowers. Jericho, NY",
    location: "Remote",
    bullets: [
      "Worked on micro-frontend architecture for various portals and services.",
      "Worked on backend side to enhance existing and adding new endpoints.",
      "Refactored the code and did optimization by using dynamic imports,  code-splitting, de-bouncing and other best practices.",
      "Added Unit test and E2E (end to end) test cases."
    ],
    stack: ["React", "Next Js", "Python", "FastAPI", "MongoDB", "Postgres", "Docker", "TailwindCSS", "PyTest", "Jest", "Playwright"],
  },
  {
    role: "Senior Frontend Engineer",
    company: "Data Weaver",
    period: "Nov 2023 -- Sept 2024",
    location: "Remote",
    bullets: [
      "Successfully completed two major large scale Pending ERP projects.",
      "Added localization on brand website for Polish language for Poland region.",
      "Extended the existing api with new endpoints and logics.",
      "Developed the backend system to be synced with ZOHO pages",
      "Deployment of Application Frontend and Backend to VPS.",
    ],
    stack: ["Python", "Java", "React.js", "JavaScript", "Redux", "Tailwind", "AWS", "Node Js", "SpringBoot", "MySQL", "MongoDB", "Express", "FastAPI"],
  },
  {
    role: "Web Developer",
    company: "FitPeo Inc / Eskerron Infotech",
    period: "July 2022 -- Nov 2023",
    location: "Remote",
    bullets: [
      "Single handedly developed three more dedicated portals for Patients, Service Provider, Caretaker with multiple logics and sections.",
      "Created highly complex questionnaire components for sections like CCM(Critical Care Management), RPM (Remote Patient Monitoring).",
      "Worked with senior backend developer to expend and add new api endpoints and logics.",
      "Created NPM package of these components to be re-used by other developers.",
      "Collaborated with Android & Ios developer to develop web-apps for them to be used from there side in Android/Ios web-view."
    ],
    stack: ["JavaScript", "Node.js", "MongoDB", "Express", "React Js", "Next Js", "React Native", "Postgres", "Python", "FastAPI"],
  },
  {
    role: "Software Engineer",
    company: "Rigvee Technologies",
    period: "July 2020 -- June 2022",
    location: "Remote",
    bullets: [
      "API development using Node js, Express Js and testing using Postman.",
      "Front-end development using React Js, JavaScript, TypeScript.",
      "Developed multiple projects from scratch for International clients.",
      "Virtual meeting with client for project discussion and demonstrations."
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "Bootstrap"],
  },
  {
    role: "Software Engineering Intern",
    company: "Possibillion Technologies",
    period: "April 2020 -- June 2020",
    location: "Hyderabad, India",
    bullets: [
      "Three months internship where handled MERN stack application development.",
      "API development using Node js, Express Js and testing using Postman.",
      "Front-end development using React Js, JavaScript, Redux.",
    ],
    stack: ["React", "JavaScript", "Node.js", "Express", "MongoDB", "Git"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6 scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Experience"
          title="A timeline of building things"
          description="Five years across product engineering, platform, and consulting roles — always close to the user, always close to the metrics."
        />

        <div className="mt-16 relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-fuchsia-500/40 to-transparent" />

          <ol className="space-y-14">
            {jobs.map((job, i) => {
              const onLeft = i % 2 === 0;
              return (
                <li key={job.role + job.company} className="relative">
                  {/* Dot */}
                  <span className="absolute left-4 md:left-1/2 -translate-x-1/2 top-3 grid place-items-center">
                    <span className="absolute h-6 w-6 rounded-full bg-fuchsia-500/20 animate-ping" />
                    <span className="relative h-3 w-3 rounded-full bg-gradient-to-br from-fuchsia-500 to-cyan-400 ring-2 ring-[#05060a]" />
                  </span>

                  <div className="md:grid md:grid-cols-2 md:gap-10 items-start">
                    {/* Left/right card */}
                    <div className={`pl-12 md:pl-0 ${onLeft ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}`}>
                      <Reveal direction={onLeft ? "left" : "right"}>
                        <div className="glass rounded-2xl p-6 card-hover">
                          <div className={`flex flex-wrap items-baseline gap-2 ${onLeft ? "md:justify-end" : ""}`}>
                            <h3 className="text-xl font-semibold text-zinc-100">
                              {job.role}
                            </h3>
                            <span className="text-zinc-500">·</span>
                            <span className="text-fuchsia-300 font-medium">
                              {job.company}
                            </span>
                            <span className="text-blue-300 font-medium text-sm">
                              {job?.client ? `Client: ${job?.client}` : null}
                            </span>
                          </div>
                          <div className={`mt-1 text-xs text-zinc-500 font-mono flex gap-2 ${onLeft ? "md:justify-end" : ""}`}>
                            <span>{job.period}</span>
                            <span>·</span>
                            <span>{job.location}</span>
                          </div>
                          <ul className={`mt-4 space-y-2 text-sm text-zinc-400 leading-relaxed ${onLeft ? "md:text-right" : ""}`}>
                            {job.bullets.map((b, bi) => (
                              <li key={bi}>{b}</li>
                            ))}
                          </ul>
                          <div className={`mt-5 flex flex-wrap gap-2 ${onLeft ? "md:justify-end" : ""}`}>
                            {job.stack.map((s) => (
                              <span
                                key={s}
                                className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-[11px] text-zinc-300"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      </Reveal>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
