"use client";
import SectionTitle from "./SectionTitle";



export default function NoProjects() {
  return (
    <section id="projects" className="relative py-28 px-6 scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Selected Work"
          title="Projects I'm proud of"
          description="A handful of products and platforms I've designed, architected, shipped end-to-end or a part of."
        />

        <h3 className="text-xl text-yellow-400 mt-5">Previous server & hosting plan got expired. Projects will be listed soon...</h3>
      </div>
    </section>
  );
}
