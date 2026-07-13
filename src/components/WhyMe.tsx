export default function WhyMe() {
  const points = [
    {
      icon: "👤",
      title: "Direct Communication",
      desc: "When you hire me, you talk to the actual developer — not an account manager, not a sales rep. No passing messages through layers of people who don't write code.",
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
      title: "Senior-Level Experience",
      desc: "You get someone who deeply understands the full stack — frontend, backend, infrastructure, DNS, deployment. Not a specialist in one tiny piece, but someone who can own the whole thing.",
    },
  ]

  return (
    <section
      id="why-me"
      className="relative z-10 mx-auto w-[94%] max-w-[1200px] px-0 py-[100px]"
    >
      <p className="mb-2 text-xs font-semibold tracking-[2px] text-emerald-400 uppercase">
        Why Work With Me
      </p>
      <h2 className="mb-4 text-[clamp(36px,5vw,56px)] font-extrabold tracking-[-1px]">
        Independent Developer vs{" "}
        <span className="bg-gradient-to-r from-emerald-400 to-[#5cc8ff] bg-clip-text text-transparent">
          Big Agency
        </span>
      </h2>
      <p className="mb-12 max-w-[700px] text-[15px] leading-[1.7] text-[#7c8aab]">
        Big agencies sell process and promises. Independent developers deliver results.
        Here&apos;s what you actually get when you work directly with someone who writes
        the code themselves.
      </p>

      <div className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {points.map((p, i) => (
          <div
            key={i}
            className="tilt-card group rounded-2xl border border-[rgba(232,238,249,0.06)] bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/25"
          >
            <div className="tilt-content">
              <div className="mb-4 text-2xl">{p.icon}</div>
              <h3 className="mb-2 text-[17px] font-bold">{p.title}</h3>
              <p className="text-sm leading-[1.7] text-[#7c8aab]">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Comparison table */}
      <div className="overflow-hidden rounded-2xl border border-[rgba(232,238,249,0.06)]">
        <div className="grid grid-cols-3 border-b border-[rgba(232,238,249,0.06)] bg-white/[0.02]">
          <div className="p-4 text-sm font-bold text-[#7c8aab] sm:p-5" />
          <div className="border-l border-[rgba(232,238,249,0.06)] p-4 text-center text-sm font-bold text-emerald-400 sm:p-5">
            ✅ Independent Dev
          </div>
          <div className="border-l border-[rgba(232,238,249,0.06)] p-4 text-center text-sm font-bold text-[#ff5e9f]/60 sm:p-5">
            ❌ Big Agency
          </div>
        </div>
        {[
          ["Who you talk to", "The developer", "A salesperson / account manager"],
          ["Who writes your code", "The person you hired", "A junior you never meet"],
          ["Cost", "£30–50/hr (direct)", "£100–250/hr (overhead)"],
          ["Decision speed", "Today", "Next sprint (2 weeks)"],
          ["Scope changes", "A conversation", "A change order + fees"],
          ["Accountability", "My name on the line", "The company's lawyer"],
        ].map((row, i) => (
          <div
            key={i}
            className={`grid grid-cols-3 border-b border-[rgba(232,238,249,0.04)] ${
              i % 2 === 0 ? "bg-white/[0.01]" : ""
            }`}
          >
            <div className="p-4 text-sm font-medium text-[#7c8aab] sm:p-5">{row[0]}</div>
            <div className="border-l border-[rgba(232,238,249,0.04)] p-4 text-center text-sm text-[#e8eef9] sm:p-5">
              {row[1]}
            </div>
            <div className="border-l border-[rgba(232,238,249,0.04)] p-4 text-center text-sm text-[#7c8aab] sm:p-5">
              {row[2]}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}