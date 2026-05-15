"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const EMAIL = "md.aadil.shafi@gmail.com";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "fallback">("idle");
  const [copied, setCopied] = useState(false);

  const subject = `Hi Aadil — from ${name || "there"}`;
  const body = `${message}\n\n— ${name}\n${email}`;
  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const a = document.createElement("a");
    a.href = mailto;
    a.rel = "noopener";
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    a.remove();

    setTimeout(() => setStatus("fallback"), 700);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 px-6 scroll-mt-24">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl glass p-10 md:p-14">
          <div className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-gradient-animated blur-3xl opacity-30" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-gradient-animated blur-3xl opacity-20" />

          <div className="relative grid md:grid-cols-2 gap-10">
            <div>
              <SectionTitle
                eyebrow="Contact"
                title="Let's build something great"
                description="Open to senior frontend, full-stack, backend or platform roles — Fulltime/Contract. I usually reply within a day."
              />

              <Reveal delay={150}>
                <div className="mt-8 space-y-3">
                  <ContactRow label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
                  <ContactRow label="GitHub" value="@MD-Aadil-Shafi" href="https://github.com/MD-Aadil-Shafi" />
                  <ContactRow label="LinkedIn" value="/in/mohd-aadil-shafi-40b863126" href="https://www.linkedin.com/in/mohd-aadil-shafi-40b863126/" />
                  <ContactRow label="Location" value="Remote · India" />
                </div>
              </Reveal>
            </div>

            <Reveal direction="right" delay={100}>
              <form onSubmit={onSubmit} className="space-y-4">
                <Field label="Name" name="name" value={name} onChange={setName} required />
                <Field label="Email" name="email" type="email" value={email} onChange={setEmail} required />
                <Field label="Message" name="message" value={message} onChange={setMessage} textarea required />

                <button
                  type="submit"
                  className="group relative w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
                >
                  {status === "sending" ? "Opening your mail app…" : "Send message"}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                  <span className="absolute inset-0 -z-10 rounded-xl animate-pulse-glow" />
                </button>

                <div
                  className={`grid transition-all duration-500 ${
                    status === "fallback" ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-zinc-300 space-y-3">
                      <p className="text-zinc-400">
                        Mail app didn&apos;t open? No worries — use one of these:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <a
                          href={gmail}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 px-3 py-2 text-xs font-medium text-zinc-100"
                        >
                          ✉️ Open in Gmail
                        </a>
                        <a
                          href={mailto}
                          className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 px-3 py-2 text-xs font-medium text-zinc-100"
                        >
                          📮 Try mailto: again
                        </a>
                        <button
                          type="button"
                          onClick={copyEmail}
                          className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 px-3 py-2 text-xs font-medium text-zinc-100"
                        >
                          {copied ? "✓ Copied!" : "📋 Copy email"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 hover:border-fuchsia-400/40 hover:bg-white/[0.04] transition-colors">
      <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">{label}</span>
      <span className="text-sm text-zinc-200 font-mono">{value}</span>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {inner}
    </a>
  ) : (
    inner
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea,
  required,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
}) {
  const baseCls =
    "peer w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 pt-6 pb-2 text-sm text-zinc-100 placeholder-transparent outline-none transition-colors focus:border-fuchsia-400/50 focus:bg-white/[0.04]";
  return (
    <label className="relative block">
      {textarea ? (
        <textarea
          name={name}
          required={required}
          placeholder={label}
          rows={4}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={baseCls}
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          placeholder={label}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={baseCls}
        />
      )}
      <span className="pointer-events-none absolute left-4 top-2 text-xs uppercase tracking-[0.2em] text-zinc-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-[0.2em]">
        {label}
      </span>
    </label>
  );
}
