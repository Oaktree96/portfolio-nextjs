"use client"

import Link from "next/link"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why-me", label: "Why Me" },
  { href: "#projects", label: "Work" },
  { href: "#contact", label: "Contact" },
]

export default function Nav() {
  return (
    <nav className="fixed left-1/2 top-0 z-50 flex w-[94%] max-w-[1200px] -translate-x-1/2 items-center justify-between px-0 py-6">
      <Link href="/" className="text-xs font-bold tracking-[0.2em] uppercase text-[#e8eef9]">
        ✦ Steven
      </Link>
      <div className="hidden items-center gap-8 md:flex">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-xs font-medium uppercase tracking-[0.05em] text-[#7c8aab] transition-colors duration-300 hover:text-emerald-400"
          >
            {link.label}
          </a>
        ))}
      </div>
      {/* Mobile menu - simple for now */}
      <div className="flex items-center gap-6 md:hidden">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-[10px] font-medium uppercase tracking-[0.05em] text-[#7c8aab]"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}