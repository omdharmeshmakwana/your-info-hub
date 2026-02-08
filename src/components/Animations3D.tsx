import { motion } from "framer-motion";

// Floating 3D Card with perspective
export function Floating3DCard({
    children,
    className = "",
    delay = 0
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20, rotateX: -15 }}
            animate={{
                opacity: 1,
                y: 0,
                rotateX: 0,
            }}
            transition={{
                duration: 0.8,
                delay,
                type: "spring",
                stiffness: 100
            }}
            whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                transition: { duration: 0.3 }
            }}
            style={{
                transformStyle: "preserve-3d",
                perspective: "1000px"
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Animated 3D Sphere using CSS
export function AnimatedSphere3D({
    size = 200,
    color = "#e57373",
    position = { top: "20%", left: "10%" },
    delay = 0
}: {
    size?: number;
    color?: string;
    position?: { top?: string; left?: string; right?: string; bottom?: string };
    delay?: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: 0.6,
                scale: 1,
                rotateX: [0, 360],
                rotateY: [0, 360],
            }}
            transition={{
                opacity: { duration: 1, delay },
                scale: { duration: 1, delay },
                rotateX: { duration: 20, repeat: Infinity, ease: "linear" },
                rotateY: { duration: 15, repeat: Infinity, ease: "linear" },
            }}
            style={{
                position: "absolute",
                width: size,
                height: size,
                ...position,
                transformStyle: "preserve-3d",
                perspective: "1000px",
            }}
            className="pointer-events-none"
        >
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    background: `radial-gradient(circle at 30% 30%, ${color}aa, ${color}44)`,
                    boxShadow: `0 0 60px ${color}66, inset 0 0 40px ${color}33`,
                    filter: "blur(2px)",
                }}
            />
        </motion.div>
    );
}

// Floating 3D Torus/Ring
export function AnimatedTorus3D({
    size = 150,
    color = "#ff6b9d",
    position = { top: "50%", right: "15%" },
    delay = 0
}: {
    size?: number;
    color?: string;
    position?: { top?: string; left?: string; right?: string; bottom?: string };
    delay?: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: 0.5,
                scale: 1,
                rotateX: [0, 360],
                rotateZ: [0, 180, 360],
            }}
            transition={{
                opacity: { duration: 1, delay },
                scale: { duration: 1, delay },
                rotateX: { duration: 25, repeat: Infinity, ease: "linear" },
                rotateZ: { duration: 30, repeat: Infinity, ease: "linear" },
            }}
            style={{
                position: "absolute",
                width: size,
                height: size,
                ...position,
                transformStyle: "preserve-3d",
                perspective: "1000px",
            }}
            className="pointer-events-none"
        >
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    border: `20px solid ${color}`,
                    boxShadow: `0 0 40px ${color}88, inset 0 0 40px ${color}44`,
                    filter: "blur(1px)",
                }}
            />
        </motion.div>
    );
}

// Animated 3D Cube
export function AnimatedCube3D({
    size = 100,
    color = "#ffc1cc",
    position = { bottom: "20%", left: "20%" },
    delay = 0
}: {
    size?: number;
    color?: string;
    position?: { top?: string; left?: string; right?: string; bottom?: string };
    delay?: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: 0.4,
                scale: 1,
                rotateX: [0, 360],
                rotateY: [0, 360],
                rotateZ: [0, 360],
            }}
            transition={{
                opacity: { duration: 1, delay },
                scale: { duration: 1, delay },
                rotateX: { duration: 20, repeat: Infinity, ease: "linear" },
                rotateY: { duration: 25, repeat: Infinity, ease: "linear" },
                rotateZ: { duration: 30, repeat: Infinity, ease: "linear" },
            }}
            style={{
                position: "absolute",
                width: size,
                height: size,
                ...position,
                transformStyle: "preserve-3d",
                perspective: "1000px",
            }}
            className="pointer-events-none"
        >
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    background: `linear-gradient(135deg, ${color}aa, ${color}44)`,
                    boxShadow: `0 0 40px ${color}66, inset 0 0 20px ${color}33`,
                    borderRadius: "10px",
                    filter: "blur(1px)",
                }}
            />
        </motion.div>
    );
}

// Particle effect using CSS
export function ParticleField3D() {
    const particles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        size: Math.random() * 4 + 2,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0, 0.6, 0],
                        y: [0, -100, -200],
                        x: [0, Math.random() * 50 - 25],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        position: "absolute",
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: particle.size,
                        height: particle.size,
                        borderRadius: "50%",
                        background: "#d4b896",
                        boxShadow: "0 0 10px #d4b896",
                    }}
                />
            ))}
        </div>
    );
}
