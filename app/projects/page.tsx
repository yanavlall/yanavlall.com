import Link from "next/link"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-6 py-12 md:py-20">
        <h1 className="text-2xl md:text-3xl font-medium mb-8 text-foreground">
          Projects
        </h1>

        <div className="space-y-10">
          <ProjectCard
            title="Motion-Based Guidance for Video Understanding"
            description="Built a pose-based motion pipeline and distilled motion cues from a lightweight teacher into a frozen X-CLIP student for improved video recognition."
            technologies={["PyTorch", "X-CLIP", "RT-DETR", "ViTPose"]}
            link="https://drive.google.com/file/d/1PbGzBkor-Df9PQhZHSCPjIZNXzvk5ZPW/view?usp=drive_link"
            linkLabel="Report"
          />

          <ProjectCard
            title="Causal Effect of High-Skill Occupations on Income"
            description="Estimated the causal impact of high-skill work on earning probability using doubly-robust methods to reduce confounding and correct inflated baselines."
            technologies={["Python", "pandas", "statsmodels"]}
            link="https://drive.google.com/file/d/12_T0T6BFTbg7rFoIYtdchszMbGjw3RaP/view?usp=drive_link"
            linkLabel="Report"
          />

          <ProjectCard
            title="CareSync"
            description="Automated EMS reporting by fine-tuning Whisper on medical vocabulary to convert audio into structured summaries, with a real-time frontend and normalized data warehouse."
            technologies={["React", "Tailwind", "Node.js", "PyTorch", "MySQL", "Docker"]}
            link="https://github.com/yanavlall/pcr-project"
            linkLabel="Link"
          />
        </div>

        {/* Footer */}
        <footer className="pt-12 mt-12 border-t border-border">
          <p className="text-sm text-muted-foreground">Last updated: January 2026</p>
        </footer>
      </div>
    </main>
  )
}

function ProjectCard({
  title,
  description,
  technologies,
  link,
  linkLabel = "Link",
}: {
  title: string
  description: string
  technologies: string[]
  link?: string
  linkLabel?: string
}) {
  return (
    <div className="group">
      <div className="flex items-baseline justify-between gap-4 mb-2">
        {link ? (
          <Link
            href={link}
            className="font-medium text-emerald-700 group-hover:text-emerald-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
            <span className="text-muted-foreground ml-1">↗</span>
            <span className="text-muted-foreground ml-2 text-sm">
              ({linkLabel})
            </span>
          </Link>
        ) : (
          <h3 className="font-medium text-emerald-700">{title}</h3>
        )}
      </div>

      <p className="text-foreground/80 leading-relaxed mb-3">{description}</p>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
