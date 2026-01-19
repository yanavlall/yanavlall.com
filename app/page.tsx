import Image from "next/image"
import Link from "next/link"
import { LocationGlobe } from "@/components/location-globe"
import { FloatingInterests } from "@/components/floating-interests"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-6 py-12 md:py-20">
        {/* Header / Intro Section */}
        <section className="flex flex-col md:flex-row gap-8 items-start mb-12">
          <div className="w-32 h-32 md:w-40 md:h-40 relative flex-shrink-0 rounded overflow-hidden bg-muted">
            <Image
              src="/profile.png"
              alt="Yanav Lall"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-medium mb-4 text-emerald-700">
              Yanav Lall
            </h1>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Hi, I'm Yanav. I'm a senior at Stanford studying Statistics, Computer
              Science and Math. I'm interested in healthcare, AI & machine learning, stats theory, computer vision, causal inference and personal sensing. Outside of school, I dabble in music, soccer, lifting and speeches.
            </p>
            <p className="text-foreground/90 leading-relaxed mb-2">
              <span className="text-emerald-700">Email:</span>{" "}
              <span className="text-emerald-700">
                yanav WHERE stanford DOT edu
              </span>
            </p>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="mb-12">
          <h2 className="text-xl font-medium mb-6 text-foreground border-b border-border pb-2">
            Education
          </h2>

          <div className="space-y-8">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <h3 className="font-medium text-emerald-700">
                  MS in Computer Science (AI)
                </h3>
                <span className="text-sm text-muted-foreground">2025 — 2027</span>
              </div>
              <p className="text-foreground/90 mb-1">
                Stanford University · Stanford, CA
              </p>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Focus on Computer Vision and Reinforcement Learning.
              </p>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <h3 className="font-medium text-emerald-700">
                  BS in Data Science (Math & CS)
                </h3>
                <span className="text-sm text-muted-foreground">2022 — 2026</span>
              </div>
              <p className="text-foreground/90 mb-1">
                Stanford University · Stanford, CA
              </p>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Coursework in Statistics, Computer Science, Math and Optimization.
              </p>
            </div>
          </div>
        </section>
        {/* Globe */}
          <section className="mb-12">
            <LocationGlobe />
          </section>


        {/* Footer */}
        <footer className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">
            Last updated: January 2026
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="https://www.linkedin.com/in/yanav-lall-673124237/"
              className="text-sky-700 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/yanavlall"
              className="text-sky-700 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
            <Link
              href="https://x.com/yanavlall"
              className="text-sky-700 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </Link>
          </div>
        </footer>
      </div>
    </main>
  )
}
