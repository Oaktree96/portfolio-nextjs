export default function Services() {
  const services = [
    { icon: "💻", title: "Custom Software", desc: "Full-stack web applications tailored to your business. Booking systems, client portals, admin dashboards, internal tools — built with Python and modern frameworks." },
    { icon: "🔄", title: "CI/CD Pipelines", desc: "Automated deployment pipelines that push your code from commit to production. GitHub Actions, Vercel, Docker — no more manual deploys or late-night releases." },
    { icon: "☁️", title: "Cloud Infrastructure", desc: "Server setup, DNS configuration, SSL certificates, and deployment architecture. I handle the infrastructure so your app stays online and your team stays asleep." },
    { icon: "⚡", title: "Process Automation", desc: "Stop doing the same task manually. Scripts that automate file processing, report generation, email campaigns, data syncing — whatever's eating your team's time." },
    { icon: "📊", title: "Data Tools & Dashboards", desc: "Turn messy spreadsheets into clean, automated dashboards with real-time insights. Sales reports, inventory tracking, analytics — visual, interactive, always up to date." },
    { icon: "🔗", title: "API Integrations", desc: "Connect your apps together. Sync data between Slack, Google Sheets, email, Shopify, Notion, Telegram, and more — no more copy-pasting between platforms." },
  ]

  return (
    <section id="services" className="relative z-10 mx-auto w-[94%] max-w-[1200px] px-0 py-[100px]">
      <p className="mb-2 text-xs font-semibold tracking-[2px] text-[#8898b0] uppercase">Services</p>
      <h2 className="mb-12 text-[clamp(36px,5vw,56px)] font-extrabold tracking-[-1px]">
        What <span className="text-white">Osborne Ops</span> Delivers
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <div
            key={i}
            className="tilt-card group rounded-2xl border border-white/6 bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/15"
          >
            <div className="tilt-content">
              <div className="mb-4 text-2xl">{s.icon}</div>
              <h3 className="mb-2 text-[17px] font-bold text-white">{s.title}</h3>
              <p className="text-sm leading-[1.6] text-[#8898b0]">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}