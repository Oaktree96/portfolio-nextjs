export default function Services() {
  const services = [
    { icon: "⚡", title: "Process Automation", desc: "Stop doing the same task manually. I build scripts that automate file organization, report generation, email campaigns, and repetitive data work." },
    { icon: "📊", title: "Data Analysis & Reporting", desc: "Turn messy spreadsheets into clean, automated reports with charts and insights. Perfect for sales reports, marketing dashboards, and inventory tracking." },
    { icon: "🕸️", title: "Web Scraping", desc: "Extract data from any website — product prices, reviews, contact lists, job postings. Delivered as clean CSV or Excel files ready to use." },
    { icon: "🌐", title: "Web Apps & Dashboards", desc: "Custom web applications with login, databases, and interactive dashboards. Booking systems, client portals, inventory managers — whatever you need." },
    { icon: "🔗", title: "API Integrations", desc: "Connect your apps together. Sync data between Slack, Google Sheets, email, Shopify, Notion, and more — no more copy-pasting between platforms." },
    { icon: "📄", title: "PDF & Document Processing", desc: "Extract text from PDFs, generate invoices automatically, merge/split documents, or convert scanned files into structured data." },
  ]

  return (
    <section id="services" className="relative z-10 mx-auto w-[94%] max-w-[1200px] px-0 py-[100px]">
      <p className="mb-2 text-xs font-semibold tracking-[2px] text-emerald-400 uppercase">Services</p>
      <h2 className="mb-12 text-[clamp(36px,5vw,56px)] font-extrabold tracking-[-1px]">
        What I <span className="bg-gradient-to-r from-emerald-400 to-[#5cc8ff] bg-clip-text text-transparent">Offer</span>
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <div
            key={i}
            className="tilt-card group rounded-2xl border border-[rgba(232,238,249,0.06)] bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/25"
          >
            <div className="tilt-content">
              <div className="mb-4 text-2xl">{s.icon}</div>
              <h3 className="mb-2 text-[17px] font-bold">{s.title}</h3>
              <p className="text-sm leading-[1.6] text-[#7c8aab]">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}