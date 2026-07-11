"use client"

import { useState, useEffect, useCallback } from "react"

export default function LoadingScreen() {
  const [pct, setPct] = useState(0)
  const [show, setShow] = useState(true)
  const [showContinue, setShowContinue] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setPct((prev) => {
        const next = prev + Math.random() * 8 + 2
        if (next >= 100) {
          clearInterval(interval)
          setTimeout(() => setShowContinue(true), 200)
          return 100
        }
        return next
      })
    }, 150)
    return () => clearInterval(interval)
  }, [])

  const handleClick = useCallback(() => {
    if (pct < 100) return
    setShow(false)
    document.body.style.overflow = "auto"
  }, [pct])

  if (!show) return null

  return (
    <div
      onClick={handleClick}
      className="fixed inset-0 z-[999999999] flex cursor-pointer flex-col items-center justify-center bg-[#06080d] transition-opacity duration-800"
    >
      <div className="mb-6 h-3.5 w-3.5 rounded-full bg-emerald-400 shadow-[0_0_24px_#00ff7f,0_0_4px_#00ff7f,inset_0_0_6px_rgba(255,255,255,0.3)]" />
      <div className="mb-2 text-[15px] font-medium tracking-[0.28em] text-[#e8eef9]">
        STEVEN JAMES COLIN OSBORNE <span className="text-[#3f4a64]">·</span> PORTFOLIO
      </div>
      <div className="mb-6 text-[11px] tracking-[0.1em] text-[#7c8aab]">setting up the studio…</div>
      <div className="mb-3 h-0.5 w-[300px] overflow-hidden rounded-full bg-[#1e2840]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-[#5cc8ff] shadow-[0_0_8px_#00ff7f] transition-[width] duration-[0.1s]"
          style={{ width: `${Math.floor(pct)}%` }}
        />
      </div>
      <div className="mb-7 font-mono text-[10px] text-[#3f4a64]">
        {String(Math.floor(pct)).padStart(2, "0")}%
      </div>
      <div
        className={`text-xs uppercase tracking-[0.32em] text-[rgba(232,238,249,0.4)] transition-opacity duration-600 ${
          showContinue ? "opacity-100" : "opacity-0"
        }`}
      >
        Click to continue
      </div>
    </div>
  )
}