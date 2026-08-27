export default function WhyMe() {
  const points = [
    {
      icon: "🤖",
      title: "Agent-Powered Engineering",
      desc: "You're not hiring one person. You're getting a private team of specialised AI agents working in parallel — coding, testing, deploying — directed by a senior engineer who owns the outcome.",
    },
    {
      icon: "👤",
      title: "Direct Communication",
      desc: "When you work with Osborne Ops, you talk to the directing engineer — not an account manager, not a sales rep. No passing messages through layers of people who don't write code.",
    },
    {
      icon: "⚡",
      title: "Agency Speed, Direct Price",
      desc: "No office rent, no sales team, no management overhead, no shareholder targets. You're paying for the work itself — delivered at agency speed by autonomous agents working 24/7.",
    },
    {
      icon: "🎯",
      title: "Personal Accountability",
      desc: "Every project has a senior engineer's name on it. A big agency can pass your work to a junior and move on. We can't, and we won't — our reputation is built on every line shipped.",
    },
    {
      icon: "🔄",
      title: "Total Flexibility",
      desc: "Need to pivot mid-project? Change a requirement? With an agency that's a contract renegotiation. With us, it's a conversation and a commit. Our agent team adapts instantly.",
    },
    {
      icon: "🏗️",
      title: "Full-Stack Delivery",
      desc: "You get an outfit that owns the whole stack — frontend, backend, infrastructure, CI/CD, DNS, deployment. Not specialists in one piece, but a team that builds and ships the entire thing.",
    },
  ]

  return (
    <section
      id="why-me"
      className="relative z-10 mx-auto w-[94%] max-w-[1200px] px-0 py-[100px]"
    >
      <p className="mb-2 text-xs font-semibold tracking-[2px] text-[#8898b0] uppercase">
        Why Work With Osborne Ops
      </p>
      <h2 className="mb-4 text-[clamp(36px,5vw,56px)] font-extrabold tracking-[-1px]">
        Osborne Ops vs{" "}
        <span className="text-white">
          Big Agency
        </span>
      </h2>
      <p className="mb-12 max-w-[700px] text-[15px] leading-[1.7] text-[#8898b0]">
        Big agencies sell process and promises. Independent engineers are limited by one brain.
        Osborne Ops combines human direction with autonomous agent execution — delivering
        agency-quality results at a fraction of the time and cost.
      </p>

      <div className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {points.map((p, i) => (
          <div
            key={i}
            className="tilt-card group rounded-2xl border border-white/6 bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/15"
          >
            <div className="tilt-content">
              <div className="mb-4 text-2xl">{p.icon}</div>
              <h3 className="mb-2 text-[17px] font-bold text-white">{p.title}</h3>
              <p className="text-sm leading-[1.7] text-[#8898b0]">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Comparison table */}
      <div className="overflow-hidden rounded-2xl border border-white/6">
        <div className="grid grid-cols-3 border-b border-white/6 bg-white/[0.02]">
          <div className="p-4 text-sm font-bold text-[#8898b0] sm:p-5" />
          <div className="border-l border-white/6 p-4 text-center text-sm font-bold text-white sm:p-5">
            ✅ Osborne Ops
          </div>
          <div className="border-l border-white/6 p-4 text-center text-sm font-bold text-[#8898b0]/50 sm:p-5">
            ❌ Big Agency
          </div>
        </div>
        {[
          ["Who you talk to", "The directing engineer", "A salesperson / account manager"],
          ["Who builds your software", "Private agent team", "A junior you never meet"],
          ["Parallel work", "Multiple agents simultaneously", "One dev at a time"],
          ["Cost", "£30-50/hr (direct)", "£100-250/hr (overhead)"],
          ["Decision speed", "Today", "Next sprint (2 weeks)"],
          ["Scope changes", "A conversation", "A change order + fees"],
          ["Accountability", "Director's name on the line", "The company's lawyer"],
        ].map((row, i) => (
          <div
            key={i}
            className={`grid grid-cols-3 border-b border-white/4 ${
              i % 2 === 0 ? "bg-white/[0.01]" : ""
            }`}
          >
            <div className="p-4 text-sm font-medium text-[#8898b0] sm:p-5">{row[0]}</div>
            <div className="border-l border-white/4 p-4 text-center text-sm text-[#f0f4f8] sm:p-5">
              {row[1]}
            </div>
            <div className="border-l border-white/4 p-4 text-center text-sm text-[#8898b0] sm:p-5">
              {row[2]}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}