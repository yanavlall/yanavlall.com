export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-6 py-12 md:py-20">
        <h1 className="text-2xl md:text-3xl font-medium mb-8 text-foreground">
          Experience
        </h1>

        <section className="mb-12">
          <div className="space-y-8">
            <ExperienceItem
              title="Algorithmic Researcher (ML Ops)"
              organization="EDA Biofeedback Group · Stanford HCI (CURIS)"
              location="Stanford, CA"
              period="Jun 2024 — Present"
              description="Built an end-to-end pipeline for physiological signal analysis and a real-time iOS/watchOS biofeedback app. Developed a spike-detection algorithm to reduce alert latency while keeping false positives stable; co-authored an ACM CHI ’26 paper."
            />

            <ExperienceItem
              title="ML Researcher"
              organization="Stanford Translational AI (STAI) Lab"
              location="Stanford, CA"
              period="Sep 2025 — Present"
              description="Developing video-based methods to detect neuropsychiatric symptoms (e.g., anxiety, agitation, depression) using objective behavioral signals. Built pose/expression-driven modeling and dataset tooling to align multimodal streams and generate model-ready activity datasets."
            />

            <ExperienceItem
              title="Software Engineering (Applied AI) Intern"
              organization="Ceribell"
              location="Sunnyvale, CA"
              period="May 2025 — Sep 2025"
              description="Built multimodal neuro-monitoring infrastructure (EEG + fNIRS), including preprocessing and artifact removal for multi-channel biosignals, feature extraction, and training/evaluating regularized ML models for neurological event detection."
            />
          </div>
        </section>


        {/* Footer */}
        <footer className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">Last updated: January 2026</p>
        </footer>
      </div>
    </main>
  )
}

function ExperienceItem({
  title,
  organization,
  location,
  period,
  description,
}: {
  title: string
  organization: string
  location: string
  period: string
  description: string
}) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
        <h3 className="font-medium text-emerald-700">{title}</h3>
        <span className="text-sm text-muted-foreground">{period}</span>
      </div>
      <p className="text-foreground/90 mb-1">
        {organization} · {location}
      </p>
      <p className="text-foreground/70 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
