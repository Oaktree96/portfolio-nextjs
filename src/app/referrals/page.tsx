"use client"

import { useEffect, useState } from "react"
import { clearReferralCode } from "@/lib/referral"

interface Lead {
  name: string
  email: string
  project: string
  ref: string | null
  timestamp: string
  status: "new" | "contacted" | "closed" | "paid"
}

export default function ReferralsPage() {
  const [pin, setPin] = useState("")
  const [authed, setAuthed] = useState(false)
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const fetchLeads = async (p: string) => {
    setLoading(true)
    setError("")
    try {
      const res = await fetch(`/api/lead?pin=${encodeURIComponent(p)}`)
      if (!res.ok) throw new Error(await res.text())
      const data = await res.json()
      setLeads(data.leads)
      setAuthed(true)
    } catch (e) {
      setError("Wrong PIN or connection failed")
      setAuthed(false)
    } finally {
      setLoading(false)
    }
  }

  const updateStatus = async (
    timestamp: string,
    status: Lead["status"],
    p: string,
  ) => {
    await fetch(`/api/lead?pin=${encodeURIComponent(p)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ timestamp, status }),
    })
    fetchLeads(p)
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    fetchLeads(pin)
  }

  const statusColor = (s: Lead["status"]) => {
    switch (s) {
      case "new":
        return "bg-yellow-500/20 text-yellow-300"
      case "contacted":
        return "bg-blue-500/20 text-blue-300"
      case "closed":
        return "bg-green-500/20 text-green-300"
      case "paid":
        return "bg-emerald-500/20 text-emerald-300"
    }
  }

  if (!authed) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#0a1628] p-8">
        <div className="w-full max-w-sm rounded-2xl border border-white/6 bg-white/[0.02] p-8">
          <h1 className="mb-1 text-2xl font-bold text-white">Referrals Admin</h1>
          <p className="mb-6 text-sm text-[#8898b0]">
            Enter PIN to view leads
          </p>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="PIN"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-[#8898b0] focus:border-white/30"
              autoFocus
            />
            <button
              type="submit"
              disabled={loading || !pin}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#0a1628] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)] disabled:opacity-50"
            >
              {loading ? "Loading…" : "Unlock"}
            </button>
            {error && <p className="text-center text-sm text-red-400">{error}</p>}
          </form>
        </div>
      </main>
    )
  }

  const totalNew = leads.filter((l) => l.status === "new").length

  return (
    <main className="min-h-screen bg-[#0a1628] p-4 pb-20 sm:p-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white">Referrals & Leads</h1>
            <p className="text-sm text-[#8898b0]">
              {leads.length} total leads · {totalNew} unread
            </p>
          </div>
          <button
            onClick={() => {
              clearReferralCode()
              setAuthed(false)
              setPin("")
            }}
            className="rounded-full border border-white/10 px-4 py-2 text-xs text-[#8898b0] transition-colors hover:border-white/30 hover:text-white"
          >
            Lock
          </button>
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-4 gap-3">
          {(["new", "contacted", "closed", "paid"] as const).map((s) => (
            <div
              key={s}
              className="rounded-xl border border-white/6 bg-white/[0.02] p-4 text-center"
            >
              <div className="text-2xl font-bold text-white">
                {leads.filter((l) => l.status === s).length}
              </div>
              <div className="text-[10px] uppercase tracking-[0.1em] text-[#8898b0]">
                {s}
              </div>
            </div>
          ))}
        </div>

        {/* Leads table */}
        {leads.length === 0 ? (
          <div className="rounded-2xl border border-white/6 bg-white/[0.02] p-12 text-center">
            <p className="text-[#8898b0]">No leads yet. Share your referral links!</p>
          </div>
        ) : (
          <div className="overflow-hidden rounded-2xl border border-white/6">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/6 bg-white/[0.02]">
                  <th className="px-4 py-3 font-medium text-[#8898b0]">Date</th>
                  <th className="px-4 py-3 font-medium text-[#8898b0]">Name</th>
                  <th className="px-4 py-3 font-medium text-[#8898b0]">Email</th>
                  <th className="px-4 py-3 font-medium text-[#8898b0]">Project</th>
                  <th className="px-4 py-3 font-medium text-[#8898b0]">Referrer</th>
                  <th className="px-4 py-3 font-medium text-[#8898b0]">Status</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr
                    key={lead.timestamp}
                    className="border-b border-white/4 transition-colors hover:bg-white/[0.02]"
                  >
                    <td className="max-w-[80px] truncate px-4 py-3 font-mono text-xs text-[#8898b0]">
                      {new Date(lead.timestamp).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                      })}
                    </td>
                    <td className="px-4 py-3 font-medium text-white">
                      {lead.name}
                    </td>
                    <td className="px-4 py-3">
                      <a
                        href={`mailto:${lead.email}`}
                        className="text-[#c8d6e5] underline-offset-2 hover:underline"
                      >
                        {lead.email}
                      </a>
                    </td>
                    <td className="max-w-[200px] truncate px-4 py-3 text-[#8898b0]">
                      {lead.project}
                    </td>
                    <td className="px-4 py-3">
                      {lead.ref ? (
                        <span className="rounded-md bg-white/8 px-2 py-0.5 font-mono text-xs text-[#c8d6e5]">
                          {lead.ref}
                        </span>
                      ) : (
                        <span className="text-[#556]">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <select
                        value={lead.status}
                        onChange={(e) =>
                          updateStatus(
                            lead.timestamp,
                            e.target.value as Lead["status"],
                            pin,
                          )
                        }
                        className={`cursor-pointer rounded-md border border-white/8 px-2 py-1 text-xs font-medium outline-none ${statusColor(lead.status)}`}
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="closed">Closed</option>
                        <option value="paid">Paid</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* How it works */}
        <div className="mt-8 rounded-2xl border border-white/6 bg-white/[0.02] p-6">
          <h2 className="mb-3 text-sm font-bold text-white">How It Works</h2>
          <div className="grid gap-4 text-xs text-[#8898b0] sm:grid-cols-2">
            <div>
              <p className="mb-1 font-medium text-[#c8d6e5]">For Influencers</p>
              <p>
                Give each influencer a unique link:{" "}
                <code className="rounded bg-white/8 px-1 py-0.5 font-mono text-[#c8d6e5]">
                  osborneoperations.uk?ref=THEIRCODE
                </code>
              </p>
              <p className="mt-2">
                They post it in their bio or stories. When a client clicks and
                fills the contact form, the referral is tracked.
              </p>
            </div>
            <div>
              <p className="mb-1 font-medium text-[#c8d6e5]">Commission</p>
              <p>
                When a referred lead becomes a paying client, mark them{" "}
                <span className="rounded bg-emerald-500/20 px-1 py-0.5 text-emerald-300">
                  Paid
                </span>{" "}
                and pay the influencer their cut. You decide the rate per
                referral — 5%, 10%, flat fee, whatever works.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}