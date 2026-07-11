export default function About() {
  return (
    <section id="about" className="relative z-10 mx-auto w-[94%] max-w-[1200px] px-0 py-[100px]">
      <p className="mb-2 text-xs font-semibold tracking-[2px] text-emerald-400 uppercase">About</p>
      <h2 className="mb-12 text-[clamp(36px,5vw,56px)] font-extrabold tracking-[-1px]">
        My <span className="bg-gradient-to-r from-emerald-400 to-[#5cc8ff] bg-clip-text text-transparent">Journey</span>
      </h2>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-5 text-[15px] leading-[1.8] text-[#7c8aab]">
            I&apos;m a Python developer who specializes in building automation tools, data pipelines, and custom web applications that solve real business problems. I work with small businesses, freelancers, and startups to turn their manual processes into automated, scalable systems.
          </p>
          <p className="mb-5 text-[15px] leading-[1.8] text-[#7c8aab]">
            Every project I build is crafted with clean code, thorough testing, and a focus on delivering measurable results. My approach is simple: understand the problem deeply, build the right solution, and make sure it actually works for you in the real world.
          </p>
          <p className="mb-5 text-[15px] leading-[1.8] text-[#7c8aab]">
            Whether it&apos;s automating a tedious weekly report, scraping competitor data, or building a full booking dashboard — I take pride in delivering tools that save my clients time and money.
          </p>
        </div>

        <div className="relative pl-10">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 h-full w-0.5 rounded-full bg-emerald-400/15" />

          <div className="relative mb-6 rounded-2xl border border-emerald-400/8 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-emerald-400/25">
            <div className="absolute left-[-44px] top-8 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_25px_#00ff7f]" />
            <h3 className="mb-1 text-xl font-bold text-emerald-400">Full-Stack Development</h3>
            <h4 className="mb-3 text-[15px] font-medium text-[#5cc8ff]">Freelance & Portfolio Projects</h4>
            <div className="mb-3 flex gap-4 text-xs text-[#3f4a64]">
              <span>📍 Remote</span>
              <span>📅 2025 — Present</span>
            </div>
            <p className="text-sm leading-[1.7] text-[#7c8aab]">
              Building production-ready web applications and automation tools for small businesses. Developed a skincare booking dashboard with FastAPI and SQLite, automated marketing report generators, and data processing pipelines.
            </p>
          </div>

          <div className="relative rounded-2xl border border-emerald-400/8 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-emerald-400/25">
            <div className="absolute left-[-44px] top-8 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_25px_#00ff7f]" />
            <h3 className="mb-1 text-xl font-bold text-emerald-400">Learning & Building</h3>
            <h4 className="mb-3 text-[15px] font-medium text-[#5cc8ff]">Python Software Engineer (In Training)</h4>
            <div className="mb-3 flex gap-4 text-xs text-[#3f4a64]">
              <span>📍 Remote</span>
              <span>📅 2024 — 2025</span>
            </div>
            <p className="text-sm leading-[1.7] text-[#7c8aab]">
              Intensive self-directed study of modern Python development. Mastered FastAPI, SQLite, Pandas, web scraping, API integrations, and professional development workflows with uv, Git, and automated testing.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}