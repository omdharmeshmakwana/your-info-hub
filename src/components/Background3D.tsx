import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Particle system for background
function ParticleField() {
    const pointsRef = useRef<THREE.Points>(null);

    const particlesCount = 800;
    const positions = useMemo(() => {
        const pos = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 20;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
        }
        return pos;
    }, []);

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
            pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particlesCount}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                color="#e57373"
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    );
}

// Animated gradient sphere
function GradientSphere({ position, scale = 1 }: { position: [number, number, number], scale?: number }) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
            meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.5;
        }
    });

    return (
        <mesh ref={meshRef} position={position} scale={scale}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial
                color="#ff6b9d"
                roughness={0.3}
                metalness={0.7}
                emissive="#e57373"
                emissiveIntensity={0.3}
                transparent
                opacity={0.8}
            />
        </mesh>
    );
}

// Wireframe torus
function WireframeTorus({ position }: { position: [number, number, number] }) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.4;
            meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.2;
        }
    });

    return (
        <mesh ref={meshRef} position={position}>
            <torusGeometry args={[1.5, 0.5, 16, 100]} />
            <meshBasicMaterial color="#e57373" wireframe transparent opacity={0.3} />
        </mesh>
    );
}

// Scene content
function SceneContent() {
    return (
        <>
            {/* Lighting */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <pointLight position={[-5, -5, -5]} intensity={0.5} color="#ff6b9d" />

            {/* 3D Elements */}
            <ParticleField />
            <GradientSphere position={[-4, 2, -5]} scale={1.5} />
            <GradientSphere position={[4, -1, -3]} scale={1} />
            <WireframeTorus position={[0, 0, -8]} />
        </>
    );
}

// Main 3D Background with error boundary
export default function Background3D() {
    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
            <Canvas
                camera={{ position: [0, 0, 10], fov: 60 }}
                style={{ background: 'transparent' }}
                gl={{ alpha: true, antialias: true }}
            >
                <Suspense fallback={null}>
                    <SceneContent />
                </Suspense>
            </Canvas>
        </div>
    );
}
