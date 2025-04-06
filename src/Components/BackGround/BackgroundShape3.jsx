/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { motion } from "framer-motion"; 
import { twMerge } from "tailwind-merge";

function createNoise() {
    const permutation = [
        151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225,
        140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247,
        120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57,
        177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74,
        165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122,
        60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54,
        65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169,
        200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3,
        64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85,
        212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170,
        213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43,
        172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185,
        112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191,
        179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31,
        181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150,
        254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195,
        78, 66, 215, 61, 156, 180,
    ];

    const p = new Array(512);
    for (let i = 0; i < 256; i++) p[256 + i] = p[i] = permutation[i];

    function fade(t) {
        return t * t * t * (t * (t * 6 - 15) + 10);
    }

    function lerp(t, a, b) {
        return a + t * (b - a);
    }

    function grad(hash, x, y, z) {
        const h = hash & 15;
        const u = h < 8 ? x : y;
        const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
        return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
    }

    return {
        simplex3: (x, y, z) => {
            const X = Math.floor(x) & 255;
            const Y = Math.floor(y) & 255;
            const Z = Math.floor(z) & 255;

            x -= Math.floor(x);
            y -= Math.floor(y);
            z -= Math.floor(z);

            const u = fade(x);
            const v = fade(y);
            const w = fade(z);

            const A = p[X] + Y;
            const AA = p[A] + Z;
            const AB = p[A + 1] + Z;
            const B = p[X + 1] + Y;
            const BA = p[B] + Z;
            const BB = p[B + 1] + Z;

            return lerp(
                w,
                lerp(
                    v,
                    lerp(u, grad(p[AA], x, y, z), grad(p[BA], x - 1, y, z)),
                    lerp(
                        u,
                        grad(p[AB], x, y - 1, z),
                        grad(p[BB], x - 1, y - 1, z)
                    )
                ),
                lerp(
                    v,
                    lerp(
                        u,
                        grad(p[AA + 1], x, y, z - 1),
                        grad(p[BA + 1], x - 1, y, z - 1)
                    ),
                    lerp(
                        u,
                        grad(p[AB + 1], x, y - 1, z - 1),
                        grad(p[BB + 1], x - 1, y - 1, z - 1)
                    )
                )
            );
        },
    };
}



export default function ParticlesBackground3({
    title = "Particles Background",
    subtitle = "Make your website stand out",
    particleCount = 2000,
    noiseIntensity = 0.003,
    particleSize = { min: 0.5, max: 2 },
    className,
}) {
    const canvasRef = useRef(null);
    const noise = createNoise();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        const resizeCanvas = () => {
            const container = canvas.parentElement;
            if (!container) return;

            canvas.width = container.clientWidth;
            canvas.height = container.clientHeight;
        };

        resizeCanvas();

        const particles = Array.from(
            { length: particleCount },
            () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * (particleSize.max - particleSize.min) + particleSize.min,
                velocity: { x: 0, y: 0 },
                life: Math.random() * 100,
                maxLife: 100 + Math.random() * 50,
            })
        );

        const animate = () => {
            const isDark = document.documentElement.classList.contains("dark");

            ctx.fillStyle = isDark
                ? "rgba(0, 0, 0, 0.1)"
                : "rgba(255, 255, 255, 0.1)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (const particle of particles) {
                particle.life += 1;
                if (particle.life > particle.maxLife) {
                    particle.life = 0;
                    particle.x = Math.random() * canvas.width;
                    particle.y = Math.random() * canvas.height;
                }

                const opacity =
                    Math.sin((particle.life / particle.maxLife) * Math.PI) *
                    0.15;

                const n = noise.simplex3(
                    particle.x * noiseIntensity,
                    particle.y * noiseIntensity,
                    Date.now() * 0.0001
                );

                const angle = n * Math.PI * 4;
                particle.velocity.x = Math.cos(angle) * 2;
                particle.velocity.y = Math.sin(angle) * 2;

                particle.x += particle.velocity.x;
                particle.y += particle.velocity.y;

                if (particle.x < 0) particle.x = canvas.width;
                if (particle.x > canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = canvas.height;
                if (particle.y > canvas.height) particle.y = 0;

                ctx.fillStyle = isDark
                    ? `rgba(255, 255, 255, ${opacity})`
                    : `rgba(0, 0, 0, ${opacity})`;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fill();
            }

            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            resizeCanvas();
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [particleCount, particleSize]);

    return (
        <div className={twMerge("relative w-full h-full overflow-hidden", className)}>
            <canvas ref={canvasRef} className="absolute top-0 left-0 z-0" />
            <div className="absolute top-0 left-0 z-10 flex flex-col items-center justify-center w-full h-full text-center text-white">
                <motion.h1
                    className="text-4xl font-bold text-black dark:text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {title}
                </motion.h1>
                <motion.h2
                    className="mt-2 text-xl text-black dark:text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {subtitle}
                </motion.h2>
            </div>
        </div>
    );
}
