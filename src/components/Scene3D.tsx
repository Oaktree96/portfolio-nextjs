"use client"

import { useRef, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial } from "@react-three/drei"
import type { Mesh } from "three"

function Shape3D() {
  const meshRef = useRef<Mesh>(null)
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener("mousemove", handleMouse)
    return () => window.removeEventListener("mousemove", handleMouse)
  }, [])

  useFrame((_, delta) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += delta * 0.15 + mouse.current.y * 0.002
    meshRef.current.rotation.y += delta * 0.2 + mouse.current.x * 0.002
  })

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1.2, 0.45, 128, 16]} />
        <MeshDistortMaterial
          color="#f0f4f8"
          emissive="#8898b0"
          emissiveIntensity={0.15}
          roughness={0.3}
          metalness={0.6}
          distort={0.15}
          speed={1.5}
        />
      </mesh>
    </Float>
  )
}

export default function Scene3D() {
  return (
    <div className="hidden h-full w-full lg:block">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#c8d6e5" />
        <Shape3D />
      </Canvas>
    </div>
  )
}