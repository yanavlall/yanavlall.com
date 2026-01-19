import Link from "next/link"

export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-6 py-12 md:py-20">
        <h1 className="text-2xl md:text-3xl font-medium mb-8 text-foreground">
          Publications
        </h1>

        {/* Publications List */}
        <div className="space-y-8">
          <PublicationItem
            title="Multiplicity in Practice: Glitching the Human In/Through Personal Sensing"
            authors={[
              "Nava Haghighi",
              "Colette Do",
              "Katie Liu",
              "Yanav Lall",
              "James A. Landay",
            ]}
            venue="ACM CHI"
            year="2026"
            links={{ paper: "#" }}
          />
          <PublicationItem
            title="Got meat? The mechanical signature of plant-based and animal meat"
            authors={[
              "Skyler R. St. Pierre",
              "Ethan C. Darwin",
              "Divya Adil",
              "Magaly C. Aviles",
              "Archer Date",
              "Reese A. Dunne",
              "Yanav Lall",
              "María Parra Vallecillo",
              "Valerie A. Perez Medina",
              "Kevin Linka",
              "Marc E. Levenston",
              "Ellen Kuhl",
            ]}
            venue="bioRxiv"
            year="2024"
            links={{
              paper:
                "https://www.biorxiv.org/content/10.1101/2024.04.25.591207v1",
            }}
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

function PublicationItem({
  title,
  authors,
  venue,
  year,
  links,
}: {
  title: string
  authors: string[]
  venue: string
  year: string
  links?: {
    paper?: string
    arxiv?: string
    code?: string
  }
}) {
  return (
    <div className="pb-6 border-b border-border last:border-0">
      <h3 className="font-medium text-emerald-700 mb-2">{title}</h3>

      <p className="text-foreground/70 text-sm mb-2">
        {authors.map((author, index) => (
          <span key={author}>
            {author === "Yanav Lall" ? (
              <span className="font-medium">{author}</span>
            ) : (
              author
            )}
            {index < authors.length - 1 && ", "}
          </span>
        ))}
      </p>

      <p className="text-foreground/60 text-sm mb-3">
        {venue}, {year}
      </p>

      {links && (
        <div className="flex gap-4 text-sm">
          {links.paper && (
            <Link href={links.paper} className="text-sky-700 hover:underline">
              Paper
            </Link>
          )}
          {links.arxiv && (
            <Link href={links.arxiv} className="text-sky-700 hover:underline">
              arXiv
            </Link>
          )}
          {links.code && (
            <Link href={links.code} className="text-sky-700 hover:underline">
              Code
            </Link>
          )}
        </div>
      )}
    </div>
  )
}
