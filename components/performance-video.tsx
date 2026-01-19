"use client"

export function PerformanceVideo() {
  const videoUrl = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/",
    "5437bd53f973485ca3bb2ceb63a9f934-A1psPeS7xToKnjdcXdIAQktnY3aiGx.MOV"
  ].join("")

  return (
    <video
      controls
      playsInline
      className="w-full"
      src={videoUrl}
    />
  )
}
