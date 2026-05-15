export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/5 py-10 px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-500">
          © {year} Aadil Shafi. Crafted with React, Next.js and a lot of espresso.
        </p>
        <div className="flex items-center gap-5 text-sm">
          <a href="#top" className="text-zinc-400 hover:text-white transition-colors">
            Back to top ↑
          </a>
          <a
            href="https://github.com/MD-Aadil-Shafi"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mohd-aadil-shafi-40b863126/"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
