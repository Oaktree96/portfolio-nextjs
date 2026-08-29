import { NextRequest, NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"

const DATA_DIR = path.join(process.cwd(), "data")
const LEADS_FILE = path.join(DATA_DIR, "leads.jsonl")
const ADMIN_PIN = "1337" // hardcoded PIN for now — change this

interface Lead {
  name: string
  email: string
  project: string
  ref: string | null
  timestamp: string
  status: "new"
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, project, ref } = body

    if (!name || !email || !project) {
      return NextResponse.json(
        { error: "Name, email, and project description are required" },
        { status: 400 },
      )
    }

    const lead: Lead = {
      name,
      email,
      project,
      ref: ref || null,
      timestamp: new Date().toISOString(),
      status: "new",
    }

    // Ensure data directory exists
    await fs.mkdir(DATA_DIR, { recursive: true })

    // Append to leads file (JSONL format — one JSON object per line)
    await fs.appendFile(LEADS_FILE, JSON.stringify(lead) + "\n", "utf-8")

    return NextResponse.json({ success: true, message: "Lead received" })
  } catch (error) {
    console.error("Failed to save lead:", error)
    return NextResponse.json(
      { error: "Failed to save lead" },
      { status: 500 },
    )
  }
}

export async function GET(request: NextRequest) {
  // Auth check via PIN query param
  const pin = request.nextUrl.searchParams.get("pin")
  if (pin !== ADMIN_PIN) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const exists = await fs
      .stat(LEADS_FILE)
      .then(() => true)
      .catch(() => false)

    if (!exists) {
      return NextResponse.json({ leads: [] })
    }

    const raw = await fs.readFile(LEADS_FILE, "utf-8")
    const lines = raw.trim().split("\n").filter(Boolean)
    const leads: Lead[] = lines.map((line) => JSON.parse(line))

    // Most recent first
    leads.reverse()

    return NextResponse.json({ leads })
  } catch (error) {
    console.error("Failed to read leads:", error)
    return NextResponse.json(
      { error: "Failed to read leads" },
      { status: 500 },
    )
  }
}

export async function PATCH(request: NextRequest) {
  // Update lead status — auth via PIN
  const pin = request.nextUrl.searchParams.get("pin")
  if (pin !== ADMIN_PIN) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { timestamp, status } = body

    const validStatuses = ["new", "contacted", "closed", "paid"]
    if (!validStatuses.includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 })
    }

    // Read all leads, update the matching one, write back
    const raw = await fs.readFile(LEADS_FILE, "utf-8")
    const lines = raw.trim().split("\n").filter(Boolean)
    const leads: Lead[] = lines.map((line) => JSON.parse(line))

    const idx = leads.findIndex((l) => l.timestamp === timestamp)
    if (idx === -1) {
      return NextResponse.json({ error: "Lead not found" }, { status: 404 })
    }

    leads[idx].status = status as Lead["status"]

    // Write back
    await fs.writeFile(
      LEADS_FILE,
      leads.map((l) => JSON.stringify(l)).join("\n") + "\n",
      "utf-8",
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Failed to update lead:", error)
    return NextResponse.json(
      { error: "Failed to update lead" },
      { status: 500 },
    )
  }
}