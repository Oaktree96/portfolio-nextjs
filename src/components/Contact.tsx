import Link from "next/link"

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 mx-auto w-[94%] max-w-[1200px] px-0 py-[100px]">
      <div className="rounded-2xl border border-[rgba(232,238,249,0.06)] bg-white/[0.02] px-10 py-20 text-center md:px-20">
        <p className="mb-2 text-xs font-semibold tracking-[2px] text-emerald-400 uppercase">Contact</p>
        <h2 className="mb-4 text-[clamp(32px,4vw,48px)] font-extrabold">
          Let&apos;s Work <span className="bg-gradient-to-r from-emerald-400 to-[#5cc8ff] bg-clip-text text-transparent">Together</span>
        </h2>
        <p className="mx-auto mb-8 max-w-[500px] text-[15px] text-[#7c8aab]">
          Have a project in mind? A process that needs automating? Let&apos;s talk and build something great.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="https://github.com/Oaktree96"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(232,238,249,0.1)] px-6 py-3 text-sm font-medium text-[#e8eef9] no-underline transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-400/4"
          >
            <i className="fab fa-github" /> GitHub
          </Link>
          <a
            href="mailto:osbornedev@proton.me"
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(232,238,249,0.1)] px-6 py-3 text-sm font-medium text-[#e8eef9] no-underline transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-400/4"
          >
            <i className="fas fa-envelope" /> Email
          </a>
          <Link
            href="https://github.com/Oaktree96"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(232,238,249,0.1)] px-6 py-3 text-sm font-medium text-[#e8eef9] no-underline transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-400/4"
          >
            <i className="fab fa-upwork" /> Upwork
          </Link>
          <a
            href="mailto:osbornedev@proton.me"
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(232,238,249,0.1)] px-6 py-3 text-sm font-medium text-[#e8eef9] no-underline transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-400/4"
          >
            <i className="fab fa-telegram" /> Telegram
          </a>
        </div>
        <p className="mx-auto mt-6 text-xs text-[#3f4a64]">From the UK · Seeking opportunities worldwide</p>
      </div>
    </section>
  )
}