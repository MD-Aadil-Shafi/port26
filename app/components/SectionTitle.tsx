import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.2em] text-zinc-400">
          <span className="h-1 w-1 rounded-full bg-fuchsia-400" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={120}>
        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-zinc-50">
          {title.split(" ").map((w, i, arr) =>
            i === arr.length - 1 ? (
              <span key={i} className="text-gradient">
                {" "}
                {w}
              </span>
            ) : (
              <span key={i}>{i === 0 ? "" : " "}{w}</span>
            ),
          )}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={220}>
          <p className="mt-4 max-w-2xl text-zinc-400 leading-relaxed">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
