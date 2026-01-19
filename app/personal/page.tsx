import { LocationGlobe } from "@/components/location-globe"

export default function PersonalPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-6 py-12 md:py-20">
        <h1 className="text-2xl md:text-3xl font-medium mb-8 text-foreground">
          Personal
        </h1>

        {/* Where I Am */}
        <section className="mb-12">
          <h2 className="text-xl font-medium mb-6 text-foreground border-b border-border pb-2">
            Where I Am
          </h2>
          <LocationGlobe />
        </section>

        {/* Hobbies & Interests */}
        <section className="mb-12">
          <h2 className="text-xl font-medium mb-6 text-foreground border-b border-border pb-2">
            Hobbies & Interests
          </h2>
          <div className="text-foreground/90 leading-relaxed space-y-4">
            <p>
              Beyond music and academics, I enjoy [add your other hobbies and interests here].
            </p>
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
