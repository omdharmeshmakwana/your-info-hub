import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

// Animated 3D Sphere
function AnimatedSphere({ position, color, speed = 1 }: { position: [number, number, number], color: string, speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * speed * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * speed * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

// Floating Torus (Donut shape - restaurant theme)
function FloatingTorus({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[1, 0.4, 16, 100]} />
        <meshStandardMaterial
          color="#e57373"
          roughness={0.1}
          metalness={0.9}
          emissive="#e57373"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
}

// Floating Box (represents menu/tablet)
function FloatingBox({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[1.2, 1.8, 0.1]} />
        <meshStandardMaterial
          color="#ff6b9d"
          roughness={0.2}
          metalness={0.8}
          emissive="#ff6b9d"
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  );
}

// Main 3D Scene Component
export default function Scene3D() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ff6b9d" />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#e57373" />

        {/* 3D Objects */}
        <AnimatedSphere position={[-3, 2, 0]} color="#e57373" speed={0.8} />
        <AnimatedSphere position={[3, -2, -2]} color="#ff6b9d" speed={1.2} />
        <FloatingTorus position={[4, 1, -1]} />
        <FloatingBox position={[-4, -1, -1]} />
        <AnimatedSphere position={[0, 3, -3]} color="#ffc1cc" speed={1} />

        {/* Subtle orbit controls (disabled for user but adds physics) */}
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}
