"use client"

import { Component, Suspense, useRef, type ReactNode, type ErrorInfo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, useTexture } from "@react-three/drei"
import type { Mesh, Texture } from "three"

// ── Error boundary to catch texture failures ──

class LogoErrorBoundary extends Component<
  { fallback: ReactNode; children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { fallback: ReactNode; children: ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch(error: Error, info: ErrorInfo) {
    // silently swallow — logo file just doesn't exist yet
  }
  render() {
    if (this.state.hasError) return this.props.fallback
    return this.props.children
  }
}

// ── Texture logo (loaded via drei hook) ──

function TextureLogo({ texture }: { texture: Texture }) {
  const meshRef = useRef<Mesh>(null)

  useFrame((_, delta) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y += delta * 0.6
    meshRef.current.rotation.x = Math.sin(Date.now() * 0.0004) * 0.08
    meshRef.current.rotation.z = Math.cos(Date.now() * 0.0003) * 0.04
  })

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
      <mesh ref={meshRef}>
        <planeGeometry args={[3.2, 3.2]} />
        <meshBasicMaterial map={texture} transparent side={2} />
      </mesh>
    </Float>
  )
}

function LogoWithTexture() {
  const texture = useTexture("/logo.png")
  return <TextureLogo texture={texture} />
}

// ── Fallback: rotating torus knot ──

function LogoFallback() {
  const meshRef = useRef<Mesh>(null)

  useFrame((_, delta) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y += delta * 0.6
    meshRef.current.rotation.x = Math.sin(Date.now() * 0.0004) * 0.08
    meshRef.current.rotation.z = Math.cos(Date.now() * 0.0003) * 0.04
  })

  return (
    <Float speed={2} rotationIntensity={0.15} floatIntensity={0.4}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1.1, 0.4, 100, 16]} />
        <meshPhysicalMaterial
          color="#f0f4f8"
          emissive="#6688b0"
          emissiveIntensity={0.2}
          roughness={0.25}
          metalness={0.7}
          clearcoat={0.3}
        />
      </mesh>
    </Float>
  )
}

// ── Exported component ──

export default function Logo3D() {
  return (
    <div className="mb-8 h-[200px] w-[200px] sm:h-[260px] sm:w-[260px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 40 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <pointLight position={[-4, -4, -4]} intensity={0.4} color="#6688b0" />
        <LogoErrorBoundary fallback={<LogoFallback />}>
          <Suspense fallback={<LogoFallback />}>
            <LogoWithTexture />
          </Suspense>
        </LogoErrorBoundary>
      </Canvas>
    </div>
  )
}