"use client"

const RESEARCH = [
  "AI & Machine Learning",
  "Healthcare",
  "Statistics",
  "Computer Vision",
  "Causal Inference",
  "Personal Sensing",
  "Human-Computer Interaction",
]

const HOBBIES = [
  "Music",
  "Football",
  "Swimming",
  "Lifting",
  "Public Speaking",
]

export function FloatingInterests() {
  return (
    <div className="my-10 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Research */}
        <div>
          <h3 className="text-sm font-semibold text-emerald-700 mb-4 tracking-wide uppercase">
            Research & Work
          </h3>
          <ul className="space-y-2">
            {RESEARCH.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-700/60" />
                <span className="text-foreground/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Hobbies */}
        <div>
          <h3 className="text-sm font-semibold text-emerald-700 mb-4 tracking-wide uppercase">
            Hobbies & Interests
          </h3>
          <ul className="space-y-2">
            {HOBBIES.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-700/60" />
                <span className="text-foreground/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
