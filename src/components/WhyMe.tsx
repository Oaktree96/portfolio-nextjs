export default function WhyMe() {
  const points = [
    {
      icon: "👤",
      title: "Direct Communication",
      desc: "When you hire Osborne Ops, you talk to the actual engineer — not an account manager, not a sales rep. No passing messages through people who don't write code.",
    },
    {
      icon: "💰",
      title: "Better Value",
      desc: "No office rent, no sales team, no management overhead, no shareholder targets. You're paying for the work itself — not the infrastructure of a company.",
    },
    {
      icon: "⚡",
      title: "Fast Turnaround",
      desc: "No project boards, no sprint planning marathons, no internal approval chains. A decision you make today is code I ship today. Simple.",
    },
    {
      icon: "🎯",
      title: "Personal Investment",
      desc: "Your project is my reputation. Every line of code has my name on it. Big agencies can afford to give you a junior and move on — I can't, and I won't.",
    },
    {
      icon: "🔄",
      title: "Total Flexibility",
      desc: "Need to pivot mid-project? Change a requirement? With an agency that's a contract renegotiation. With me, it's a conversation and a commit.",
    },
    {
      icon: "🏗️",
      title: "Full-Stack Engineering",
      desc: "You get someone who owns the whole stack — frontend, backend, infrastructure, CI/CD, DNS, deployment. Not a specialist in one piece, but someone who builds and ships the entire thing.",
    },
  ]

  return (
    <section
      id="why-me"
      className="relative z-10 mx-auto w-[94%] max-w-[1200px] px-0 py-[100px]"
    >
      <p className="mb-2 text-xs font-semibold tracking-[2px] text-[#8898b0] uppercase">
        Why Work With Me
      </p>
      <h2 className="mb-4 text-[clamp(36px,5vw,56px)] font-extrabold tracking-[-1px]">
        Osborne Ops vs{" "}
        <span className="text-white">
          Big Agency
        </span>
      </h2>
      <p className="mb-12 max-w-[700px] text-[15px] leading-[1.7] text-[#8898b0]">
        Big agencies sell process and promises. Independent engineers deliver results.
        Here&apos;s what you actually get when you work directly with someone who builds
        the software themselves.
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
          ["Who you talk to", "The engineer", "A salesperson / account manager"],
          ["Who writes your code", "The person you hired", "A junior you never meet"],
          ["Cost", "£30-50/hr (direct)", "£100-250/hr (overhead)"],
          ["Decision speed", "Today", "Next sprint (2 weeks)"],
          ["Scope changes", "A conversation", "A change order + fees"],
          ["Accountability", "My name on the line", "The company's lawyer"],
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