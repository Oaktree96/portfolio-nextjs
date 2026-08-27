export default function About() {
  return (
    <section id="about" className="relative z-10 mx-auto w-[94%] max-w-[1200px] px-0 py-[100px]">
      <p className="mb-2 text-xs font-semibold tracking-[2px] text-[#8898b0] uppercase">About</p>
      <h2 className="mb-12 text-[clamp(36px,5vw,56px)] font-extrabold tracking-[-1px]">
        About <span className="text-white">Osborne Ops</span>
      </h2>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-5 text-[15px] leading-[1.8] text-[#8898b0]">
            Osborne Ops is the software and DevOps practice of <strong className="text-[#c8d6e5]">Steven Osborne</strong> — 
            a software engineer who builds custom applications and the infrastructure to deliver them. 
            I work directly with small businesses and startups to turn ideas into working software 
            that stays running without babysitting.
          </p>
          <p className="mb-5 text-[15px] leading-[1.8] text-[#8898b0]">
            My focus is practical: full-stack web apps that solve real business problems,
            automated deployment pipelines, cloud infrastructure that doesn&apos;t fall over at 2am,
            and scripts that save hours of manual work every week. Every project is built with
            clean code, automated testing, and measurable results.
          </p>
          <p className="mb-5 text-[15px] leading-[1.8] text-[#8898b0]">
            Whether you need a booking dashboard, a trading bot, a CI/CD pipeline, or an entire
            internal tool &mdash; I deliver working systems. You own the code, you own the infrastructure,
            and you don&apos;t pay monthly fees for something you already bought.
          </p>
        </div>

        <div className="relative pl-10">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 h-full w-0.5 rounded-full bg-white/10" />

          <div className="relative mb-6 rounded-2xl border border-white/6 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-white/15">
            <div className="absolute left-[-44px] top-8 h-3 w-3 rounded-full bg-white shadow-[0_0_25px_rgba(255,255,255,0.3)]" />
            <h3 className="mb-1 text-xl font-bold text-white">Osborne Ops</h3>
            <h4 className="mb-3 text-[15px] font-medium text-[#c8d6e5]">Freelance Software Engineering &amp; DevOps</h4>
            <div className="mb-3 flex gap-4 text-xs text-[#8898b0]">
              <span>📍 Remote (UK)</span>
              <span>📅 2025 — Present</span>
            </div>
            <p className="text-sm leading-[1.7] text-[#8898b0]">
              Building custom software and deployment infrastructure for businesses. Full-stack web apps 
              (FastAPI, Next.js), CI/CD pipelines, cloud deployment, automation scripts, API integrations, 
              and blockchain-connected tools. Clients own everything — no subscriptions, no lock-in.
            </p>
          </div>

          <div className="relative rounded-2xl border border-white/6 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-white/15">
            <div className="absolute left-[-44px] top-8 h-3 w-3 rounded-full bg-white shadow-[0_0_25px_rgba(255,255,255,0.3)]" />
            <h3 className="mb-1 text-xl font-bold text-white">Foundations</h3>
            <h4 className="mb-3 text-[15px] font-medium text-[#c8d6e5]">Python &amp; Full-Stack Engineering</h4>
            <div className="mb-3 flex gap-4 text-xs text-[#8898b0]">
              <span>📍 Remote</span>
              <span>📅 2024 — 2025</span>
            </div>
            <p className="text-sm leading-[1.7] text-[#8898b0]">
              Intensive self-directed study of modern Python development, DevOps practices, cloud infrastructure,
              and professional software engineering workflows. Mastered FastAPI, SQLite, CI/CD, cloud deployment,
              API design, and full-stack development with Git, automated testing, and modern tooling.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}