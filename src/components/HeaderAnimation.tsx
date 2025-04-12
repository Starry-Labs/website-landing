import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  hue: number;
}

interface Point {
  x: number;
  y: number;
}

const HeaderAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    // Create stars
    const stars: Star[] = [];
    const starCount = Math.min(
      100,
      Math.max(40, Math.floor((canvas.width * canvas.height) / 10000))
    );

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.05 + 0.01,
        hue: Math.random() * 60 + 200, // Blue to purple hues
      });
    }

    // Create constellations
    const constellationPoints: Point[] = [];
    const constellationCount = 3;

    for (let i = 0; i < constellationCount; i++) {
      const centerX = canvas.width * (0.2 + 0.6 * Math.random());
      const centerY = canvas.height * (0.2 + 0.6 * Math.random());
      const points = 3 + Math.floor(Math.random() * 4);

      for (let j = 0; j < points; j++) {
        const angle = (j / points) * Math.PI * 2;
        const distance = 30 + Math.random() * 60;
        constellationPoints.push({
          x: centerX + Math.cos(angle) * distance,
          y: centerY + Math.sin(angle) * distance,
        });
      }
    }

    // Animation loop
    let animationId: number;
    let lastTime = 0;

    const animate = (timestamp: number) => {
      const deltaTime = timestamp - lastTime;
      lastTime = timestamp;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and animate stars
      stars.forEach((star) => {
        // Twinkle effect
        star.opacity =
          0.2 + Math.abs(Math.sin(timestamp * 0.001 * star.speed) * 0.8);

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${star.hue}, 80%, 80%, ${star.opacity})`;
        ctx.fill();

        // Move star slightly
        star.y += star.speed * deltaTime;

        // Reset if out of bounds
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });

      // Draw constellations
      if (constellationPoints.length > 3) {
        ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
        ctx.lineWidth = 0.5;

        for (let i = 0; i < constellationPoints.length; i++) {
          const p1 = constellationPoints[i];

          // Connect to 2-3 closest points
          const distances: { index: number; distance: number }[] = [];

          for (let j = 0; j < constellationPoints.length; j++) {
            if (i === j) continue;

            const p2 = constellationPoints[j];
            const dx = p2.x - p1.x;
            const dy = p2.y - p1.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              distances.push({ index: j, distance });
            }
          }

          // Sort by distance and draw lines to closest points
          distances.sort((a, b) => a.distance - b.distance);

          const connectCount = Math.min(distances.length, 2);
          for (let k = 0; k < connectCount; k++) {
            const p2 = constellationPoints[distances[k].index];

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }

          // Draw constellation points
          ctx.beginPath();
          ctx.arc(p1.x, p1.y, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
          ctx.fill();
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f0e33]"></div>
    </div>
  );
};

export default HeaderAnimation;
