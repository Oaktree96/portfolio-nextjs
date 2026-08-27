export default function SkillsMarquee() {
  const skills1 = [
    "Python", "FastAPI", "SQLite", "PostgreSQL",
    "CI/CD", "GitHub Actions", "Docker", "Linux",
    "Cloud Deployment", "Vercel", "DNS", "Bash",
  ]
  const skills2 = [
    "REST APIs", "Automation", "Web Scraping", "Pandas",
    "Git", "Next.js", "TypeScript", "Tailwind CSS",
    "API Integration", "Webhooks", "JSON", "SSH",
  ]

  const row1 = [...skills1, ...skills1]
  const row2 = [...skills2, ...skills2]

  return (
    <div className="relative z-10 w-full overflow-hidden py-[60px]">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.03),transparent_50%),radial-gradient(circle_at_80%_50%,rgba(26,45,74,0.1),transparent_50%)]" />

      <div className="flex animate-marquee gap-12 whitespace-nowrap border-y border-white/5 py-6">
        {row1.map((skill, i) => (
          <span key={`s1-${i}`} className="relative px-6 text-base text-[#8898b0] before:absolute before:left-[-8px] before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-white/40">
            {skill}
          </span>
        ))}
      </div>
      <div className="flex animate-marquee-reverse gap-12 whitespace-nowrap border-b border-white/5 py-6">
        {row2.map((skill, i) => (
          <span key={`s2-${i}`} className="relative px-6 text-base text-[#8898b0] before:absolute before:left-[-8px] before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-white/40">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}