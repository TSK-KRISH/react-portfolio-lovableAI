import { useEffect, useRef } from "react";

const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<{ x: number; y: number; vx: number; vy: number }[]>([]);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const getCSSVar = (name: string) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    const primary = getCSSVar("--primary");
    const foreground = getCSSVar("--foreground");
    const bg = getCSSVar("--background");

    // Colors based on design tokens
    const lineColor = `hsl(${primary} / 0.18)`; // subtle green
    const dotColor = `hsl(${primary} / 0.35)`;
    const trailBg = `hsl(${bg} / 0.4)`;

    // Init particles
    const particleCount = Math.min(120, Math.floor((window.innerWidth * window.innerHeight) / 16000));
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
    }));

    const maxDist = 120;

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const onMouseLeave = () => { mouseRef.current = null; };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    const tick = () => {
      // Fade the canvas for a soft trail effect
      ctx.fillStyle = trailBg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Gentle mouse interaction (repel slightly)
        if (mouseRef.current) {
          const dx = p.x - mouseRef.current.x;
          const dy = p.y - mouseRef.current.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 140) {
            const force = (140 - dist) / 140 * 0.02;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }
        }

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Gentle wrap around
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;

        // Friction to avoid acceleration over time
        p.vx *= 0.995;
        p.vy *= 0.995;
      }

      // Draw connections
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < maxDist) {
            const alpha = 1 - dist / maxDist;
            ctx.strokeStyle = `hsl(${primary} / ${0.15 * alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Draw dots
      ctx.fillStyle = dotColor;
      for (const p of particlesRef.current) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(tick);
    };

    // Prime the canvas background once to avoid flashes
    ctx.fillStyle = `hsl(${bg})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    animationRef.current = requestAnimationFrame(tick);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default Background;
