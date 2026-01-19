"use client"

import { useEffect, useRef, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import * as THREE from "three"

interface Node {
  id: string
  label: string
  category: "interest" | "skill" | "project" | "research"
  x: number
  y: number
  z: number
  color: string
  description?: string
}

interface Edge {
  from: string
  to: string
}

const NODES: Node[] = [
  // Core interests
  { id: "music", label: "Music", category: "interest", x: 0, y: 0, z: 0, color: "#ec4899", description: "Performing & Discovering" },
  { id: "ai-ml", label: "AI/ML", category: "interest", x: 3, y: 2, z: 1, color: "#06b6d4", description: "Machine Learning & AI" },
  { id: "hci", label: "HCI", category: "interest", x: -3, y: 2, z: 1, color: "#8b5cf6", description: "Human-Computer Interaction" },
  { id: "research", label: "Research", category: "interest", x: 0, y: -3, z: 1, color: "#10b981", description: "Academic Research" },
  
  // Skills
  { id: "python", label: "Python", category: "skill", x: 3.5, y: -1, z: 2, color: "#f59e0b", description: "Primary language" },
  { id: "stats", label: "Statistics", category: "skill", x: -2, y: -2, z: -1.5, color: "#06b6d4", description: "Data Analysis" },
  { id: "cs", label: "Computer Science", category: "skill", x: 2, y: -1.5, z: -2, color: "#8b5cf6", description: "Algorithms & Systems" },
  
  // Research areas
  { id: "sensing", label: "Personal Sensing", category: "research", x: -3, y: -1, z: 2, color: "#10b981", description: "Data & Personal Tracking" },
  { id: "biomech", label: "Biomechanics", category: "research", x: -1, y: 1, z: -2, color: "#f59e0b", description: "Physical Mechanics" },
]

const EDGES: Edge[] = [
  { from: "music", to: "hci" },
  { from: "music", to: "ai-ml" },
  { from: "ai-ml", to: "cs" },
  { from: "ai-ml", to: "research" },
  { from: "ai-ml", to: "python" },
  { from: "hci", to: "research" },
  { from: "hci", to: "cs" },
  { from: "research", to: "sensing" },
  { from: "research", to: "biomech" },
  { from: "research", to: "stats" },
  { from: "cs", to: "python" },
  { from: "stats", to: "python" },
]

function NetworkNode({ node, onHover }: { node: Node; onHover: (id: string | null) => void }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005
      meshRef.current.rotation.y += 0.005
      
      if (hovered) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.3, 1.3, 1.3), 0.1)
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1)
      }
    }
  })

  const size = node.category === "interest" ? 0.5 : 0.35

  return (
    <group position={[node.x, node.y, node.z]}>
      <mesh
        ref={meshRef}
        onPointerOver={() => {
          setHovered(true)
          onHover(node.id)
        }}
        onPointerOut={() => {
          setHovered(false)
          onHover(null)
        }}
      >
        <icosahedronGeometry args={[size, 4]} />
        <meshPhongMaterial color={node.color} emissive={hovered ? node.color : "#000000"} emissiveIntensity={hovered ? 0.5 : 0} />
      </mesh>
      
      {/* Outer glow ring */}
      <mesh>
        <torusGeometry args={[size + 0.1, 0.05, 16, 100]} />
        <meshBasicMaterial color={node.color} transparent opacity={0.3} />
      </mesh>
    </group>
  )
}

function NetworkEdges({ nodes }: { nodes: Node[] }) {
  const lineRef = useRef<THREE.LineSegments>(null)

  useEffect(() => {
    if (!lineRef.current) return

    const positions: number[] = []
    
    EDGES.forEach(edge => {
      const fromNode = nodes.find(n => n.id === edge.from)
      const toNode = nodes.find(n => n.id === edge.to)
      
      if (fromNode && toNode) {
        positions.push(fromNode.x, fromNode.y, fromNode.z)
        positions.push(toNode.x, toNode.y, toNode.z)
      }
    })

    lineRef.current.geometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(positions), 3))
  }, [nodes])

  return (
    <lineSegments ref={lineRef}>
      <bufferGeometry />
      <lineBasicMaterial color="#888888" transparent opacity={0.3} />
    </lineSegments>
  )
}

function NetworkScene() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="w-full h-full relative bg-gradient-to-b from-background to-background/80">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <OrbitControls 
          autoRotate 
          autoRotateSpeed={0.5}
          enableZoom
          enablePan
        />
        
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, 5]} intensity={0.4} color="#8b5cf6" />
        
        {/* Network */}
        <NetworkEdges nodes={NODES} />
        {NODES.map(node => (
          <NetworkNode 
            key={node.id} 
            node={node} 
            onHover={setHoveredNode}
          />
        ))}
      </Canvas>

      {/* Info box */}
      {hoveredNode && (
        <div className="absolute bottom-6 left-6 bg-card border border-border rounded-lg p-4 max-w-xs shadow-lg">
          {(() => {
            const node = NODES.find(n => n.id === hoveredNode)
            return (
              <>
                <h3 className="font-semibold text-foreground">{node?.label}</h3>
                <p className="text-sm text-foreground/70 mt-1">{node?.description}</p>
                <span className="inline-block mt-2 text-xs px-2 py-1 bg-muted rounded text-muted-foreground">
                  {node?.category}
                </span>
              </>
            )
          })()}
        </div>
      )}

      {/* Instructions */}
      <div className="absolute top-6 right-6 text-xs text-muted-foreground text-right">
        <p>Drag to rotate</p>
        <p>Scroll to zoom</p>
        <p>Hover for details</p>
      </div>
    </div>
  )
}

export function InterestNetwork() {
  return (
    <div className="w-full h-[500px] md:h-[600px] rounded-lg border border-border overflow-hidden bg-background">
      <NetworkScene />
    </div>
  )
}
