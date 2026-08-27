import Link from "next/link"

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 mx-auto w-[94%] max-w-[1200px] px-0 py-[100px]">
      <div className="rounded-2xl border border-white/6 bg-white/[0.02] px-10 py-20 text-center md:px-20">
        <p className="mb-2 text-xs font-semibold tracking-[2px] text-[#8898b0] uppercase">Contact</p>
        <h2 className="mb-4 text-[clamp(32px,4vw,48px)] font-extrabold text-white">
          Let&apos;s Build <span className="text-[#c8d6e5]">Something</span>
        </h2>
        <p className="mx-auto mb-8 max-w-[500px] text-[15px] text-[#8898b0]">
          Have a project, an idea, or a problem that needs software? Let&apos;s talk about what I can build for you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="https://github.com/Oaktree96"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-[#f0f4f8] no-underline transition-all duration-300 hover:border-white hover:bg-white/5"
          >
            <i className="fab fa-github" /> GitHub
          </Link>
          <a
            href="mailto:osbornedev@proton.me"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-[#f0f4f8] no-underline transition-all duration-300 hover:border-white hover:bg-white/5"
          >
            <i className="fas fa-envelope" /> Email
          </a>
          <Link
            href="https://github.com/Oaktree96"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-[#f0f4f8] no-underline transition-all duration-300 hover:border-white hover:bg-white/5"
          >
            <i className="fab fa-upwork" /> Upwork
          </Link>
          <a
            href="mailto:osbornedev@proton.me"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-[#f0f4f8] no-underline transition-all duration-300 hover:border-white hover:bg-white/5"
          >
            <i className="fab fa-telegram" /> Telegram
          </a>
        </div>
        <p className="mx-auto mt-6 text-xs text-[#8898b0]">Osborne Ops — Steven Osborne · From the UK · Available worldwide</p>
      </div>
    </section>
  )
}