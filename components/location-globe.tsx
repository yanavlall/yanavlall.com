"use client"

import { useEffect, useRef, useState } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"

// Jerry House, 658 Lomita Ct, Stanford CA 94305
const CURRENT = { lat: 37.42823, lng: -122.168861 }
// R 585, New Rajendra Nagar, New Delhi
const HOME = { lat: 28.637235, lng: 77.182364 }

const STANFORD = CURRENT;
const NEW_DELHI = HOME;

export function LocationGlobe() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!mapContainer.current || map.current) return

    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN?.trim()
    
    if (!token) {
      setError("Mapbox token not configured")
      return
    }

    mapboxgl.accessToken = token

    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/satellite-streets-v12",
        center: [0, 20],
        zoom: 1.5,
        projection: "globe",
        attributionControl: false,
      })
    } catch (err) {
      setError("Failed to initialize map")
      console.log("[v0] Map init error:", err)
      return
    }

    map.current.on("error", (e) => {
      console.log("[v0] Mapbox error:", e.error)
    })

    map.current.on("style.load", () => {
      if (!map.current) return

      // Add atmosphere and stars
      map.current.setFog({
        color: "rgb(186, 210, 235)",
        "high-color": "rgb(36, 92, 223)",
        "horizon-blend": 0.02,
        "space-color": "rgb(11, 11, 25)",
        "star-intensity": 0.6,
      })

      setIsLoaded(true)
    })

    map.current.on("load", () => {
      if (!map.current) return

      // Add arc line connecting the two locations
      map.current.addSource("route", {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: [
              [STANFORD.lng, STANFORD.lat],
              [NEW_DELHI.lng, NEW_DELHI.lat],
            ],
          },
        },
      })

      map.current.addLayer({
        id: "route",
        type: "line",
        source: "route",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#a855f7",
          "line-width": 3,
          "line-opacity": 0.8,
        },
      })

      // Stanford marker (green)
      const stanfordEl = document.createElement("div")
      stanfordEl.className = "stanford-marker"
      stanfordEl.innerHTML = `
        <div style="
          width: 20px;
          height: 20px;
          background: #22c55e;
          border: 3px solid white;
          border-radius: 50%;
          box-shadow: 0 0 12px rgba(34, 197, 94, 0.7);
          cursor: pointer;
        "></div>
      `

      new mapboxgl.Marker(stanfordEl)
        .setLngLat([STANFORD.lng, STANFORD.lat])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<div style="font-weight: 600; color: #22c55e;">Current</div>`
          )
        )
        .addTo(map.current)

      // New Delhi marker (orange)
      const delhiEl = document.createElement("div")
      delhiEl.className = "delhi-marker"
      delhiEl.innerHTML = `
        <div style="
          width: 20px;
          height: 20px;
          background: #f97316;
          border: 3px solid white;
          border-radius: 50%;
          box-shadow: 0 0 12px rgba(249, 115, 22, 0.7);
          cursor: pointer;
        "></div>
      `

      new mapboxgl.Marker(delhiEl)
        .setLngLat([NEW_DELHI.lng, NEW_DELHI.lat])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<div style="font-weight: 600; color: #f97316;">Home</div>`
          )
        )
        .addTo(map.current)
    })

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), "top-right")

    // Cleanup
    return () => {
      if (map.current) {
        map.current.remove()
        map.current = null
      }
    }
  }, [])

  if (error) {
    return (
      <div className="w-full h-[400px] rounded-xl bg-slate-900 flex items-center justify-center">
        <div className="text-white/60">{error}</div>
      </div>
    )
  }

  return (
    <div className="w-full">
      <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
        {!isLoaded && (
          <div className="absolute inset-0 bg-slate-900 flex items-center justify-center z-10">
            <div className="text-white/60">Loading globe...</div>
          </div>
        )}
        <div ref={mapContainer} className="w-full h-full" style={{ filter: "brightness(1.15) saturate(1.1)" }} />
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 mt-3 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
          <span className="text-muted-foreground">Current</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)]" />
          <span className="text-muted-foreground">Home</span>
        </div>
      </div>
    </div>
  )
}
