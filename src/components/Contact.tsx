"use client"

import { useState, useEffect } from "react"
import { initReferralTracking, getStoredReferralCode } from "@/lib/referral"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [project, setProject] = useState("")
  const [sending, setSending] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState("")
  const [refCode, setRefCode] = useState<string | null>(null)

  useEffect(() => {
    initReferralTracking()
    setRefCode(getStoredReferralCode())
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !project) return

    setSending(true)
    setError("")

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          project,
          ref: getStoredReferralCode(),
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || "Something went wrong")
      }

      setDone(true)
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to send. Try email instead.")
    } finally {
      setSending(false)
    }
  }

  return (
    <section
      id="contact"
      className="relative z-10 mx-auto w-[94%] max-w-[1200px] px-0 py-[100px]"
    >
      <div className="rounded-2xl border border-white/6 bg-white/[0.02] px-6 py-16 text-center md:px-20 md:py-20">
        <p className="mb-2 text-xs font-semibold tracking-[2px] text-[#8898b0] uppercase">
          Contact
        </p>
        <h2 className="mb-4 text-[clamp(32px,4vw,48px)] font-extrabold text-white">
          Let&apos;s Build <span className="text-[#c8d6e5]">Something</span>
        </h2>
        <p className="mx-auto mb-10 max-w-[500px] text-[15px] text-[#8898b0]">
          Tell me about your project. I'll get back to you within 24 hours.
        </p>

        {done ? (
          <div className="mx-auto max-w-md rounded-xl border border-green-500/20 bg-green-500/5 p-6">
            <div className="mb-2 text-3xl">✓</div>
            <p className="text-base font-medium text-green-300">
              Message sent!
            </p>
            <p className="mt-1 text-sm text-[#8898b0]">
              I'll review your project and reach out soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-4">
            {refCode && (
              <div className="mb-2 rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2 text-[11px] text-[#8898b0]">
                Referred by <span className="font-mono text-[#c8d6e5]">{refCode}</span>
              </div>
            )}

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-[#8898b0] focus:border-white/30"
            />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-[#8898b0] focus:border-white/30"
            />

            <textarea
              value={project}
              onChange={(e) => setProject(e.target.value)}
              placeholder="What are you looking to build?"
              rows={4}
              required
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-[#8898b0] focus:border-white/30"
            />

            {error && (
              <p className="text-sm text-red-400">{error}</p>
            )}

            <button
              type="submit"
              disabled={sending}
              className="magnetic-btn inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#0a1628] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)] disabled:opacity-50"
            >
              {sending ? "Sending…" : "Send Message"}
            </button>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a
                href="https://github.com/Oaktree96"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-[#8898b0] no-underline transition-all duration-300 hover:border-white hover:text-white"
              >
                <i className="fab fa-github" /> GitHub
              </a>
              <a
                href="mailto:osbornedev@proton.me"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-[#8898b0] no-underline transition-all duration-300 hover:border-white hover:text-white"
              >
                <i className="fas fa-envelope" /> osbornedev@proton.me
              </a>
              <a
                href="https://instagram.com/osborne.ops"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-[#8898b0] no-underline transition-all duration-300 hover:border-white hover:text-white"
              >
                <i className="fab fa-instagram" /> @osborne.ops
              </a>
            </div>
          </form>
        )}

        {/* Lead link info */}
        <div className="mx-auto mt-10 max-w-md rounded-lg border border-white/6 bg-white/[0.02] p-4 text-left">
          <p className="mb-2 text-xs font-semibold text-[#c8d6e5]">
            🔗 Influencer referral links work here
          </p>
          <p className="text-[11px] leading-[1.6] text-[#8898b0]">
            Came from an influencer? The referral is tracked automatically when
            you use their personalised link. Ask them for their link before
            reaching out.
          </p>
        </div>

        <p className="mx-auto mt-6 text-xs text-[#8898b0]">
          Osborne Ops — Steven Osborne · From the UK · Available worldwide
        </p>
      </div>
    </section>
  )
}