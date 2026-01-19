import { PerformanceVideo } from "@/components/performance-video"

export default function MusicPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-6 py-12 md:py-20">
        <h1 className="text-2xl md:text-3xl font-medium mb-8 text-foreground">
          Music
        </h1>

        {/* Performing + Listening (side-by-side on desktop) */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Performing */}
            <div>
              <h2 className="text-xl font-medium mb-6 text-emerald-700 border-b border-border pb-2">
                Drums
              </h2>

              <div className="rounded-lg overflow-hidden bg-muted w-full">
                <PerformanceVideo />
              </div>
            </div>

            {/* Listening */}
            <div>
              <h2 className="text-xl font-medium mb-6 text-emerald-700 border-b border-border pb-2">
                Listening
              </h2>

              <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow w-full">
                <iframe
                  src="https://open.spotify.com/embed/playlist/5ayiw9NiAejRBikxxJSE38?utm_source=generator&theme=0"
                  width="100%"
                  height="380"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  style={{ display: "block" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Last updated: January 2026
          </p>
        </footer>
      </div>
    </main>
  )
}
