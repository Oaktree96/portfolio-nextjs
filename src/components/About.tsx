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
            <strong className="text-[#c8d6e5]">Osborne Ops</strong> is a software engineering company
            that delivers working systems through a private team of autonomous AI agents.
            Founded and directed by <strong className="text-[#c8d6e5]">Steven Osborne</strong>, we combine
            human oversight with agentic engineering to build custom software faster, more securely,
            and at a fraction of traditional agency cost.
          </p>
          <p className="mb-5 text-[15px] leading-[1.8] text-[#8898b0]">
            Our agents handle the full stack — from full-stack web apps and API integrations to
            CI/CD pipelines, cloud infrastructure, and deployment. Each agent is specialised,
            each task is verified, and every project is overseen end-to-end by a single engineer
            who puts their name on the result. The outcome: production-ready systems delivered
            in days, not months.
          </p>
          <p className="mb-5 text-[15px] leading-[1.8] text-[#8898b0]">
            Whether you need a booking dashboard, a trading bot, a business website, or an entire
            internal tool &mdash; we deliver working software. You own the code, you own the infrastructure,
            and you never pay monthly fees for something you already bought. No lock-in. No hidden costs.
            Just a system that works and the team that built it.
          </p>
        </div>

        <div className="relative pl-10">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 h-full w-0.5 rounded-full bg-white/10" />

          <div className="relative mb-6 rounded-2xl border border-white/6 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-white/15">
            <div className="absolute left-[-44px] top-8 h-3 w-3 rounded-full bg-white shadow-[0_0_25px_rgba(255,255,255,0.3)]" />
            <h3 className="mb-1 text-xl font-bold text-white">Osborne Ops</h3>
            <h4 className="mb-3 text-[15px] font-medium text-[#c8d6e5]">Agent-Driven Software Engineering Company</h4>
            <div className="mb-3 flex gap-4 text-xs text-[#8898b0]">
              <span>📍 Remote (UK)</span>
              <span>📅 2025 — Present</span>
            </div>
            <p className="text-sm leading-[1.7] text-[#8898b0]">
              A private team of autonomous AI agents, directed by a senior engineer. We build full-stack
              web applications, deployment pipelines, cloud infrastructure, automation systems, and API
              integrations for small businesses and startups. Every project ships clean, tested, owned by you.
            </p>
          </div>

          <div className="relative rounded-2xl border border-white/6 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-white/15">
            <div className="absolute left-[-44px] top-8 h-3 w-3 rounded-full bg-white shadow-[0_0_25px_rgba(255,255,255,0.3)]" />
            <h3 className="mb-1 text-xl font-bold text-white">Agentic Foundation</h3>
            <h4 className="mb-3 text-[15px] font-medium text-[#c8d6e5]">Autonomous Development Operations</h4>
            <div className="mb-3 flex gap-4 text-xs text-[#8898b0]">
              <span>📍 Multi-Agent Architecture</span>
              <span>📅 Core Technology</span>
            </div>
            <p className="text-sm leading-[1.7] text-[#8898b0]">
              Powered by a multi-agent system where specialised software agents handle development,
              testing, infrastructure, and deployment in parallel. Human-directed, machine-executed —
              delivering agency-quality results at a fraction of the timeline and cost.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}