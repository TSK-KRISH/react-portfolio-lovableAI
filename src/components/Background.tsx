import React from "react";

// Subtle animated background using CSS layers (no canvas)
// - Green-on-black theme, low brightness
// - Very slight motion + vignette + ultra-light grid
// - Fully site-wide via fixed positioning
const Background = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      {/* Base backdrop to ensure theme consistency */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, hsl(var(--background)), hsl(var(--background)))",
        }}
      />

      {/* Animated soft green blobs (very low opacity) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(1100px 700px at 12% 18%, hsl(var(--primary) / 0.10), transparent 60%), " +
            "radial-gradient(900px 600px at 78% 26%, hsl(var(--primary) / 0.08), transparent 60%), " +
            "radial-gradient(800px 500px at 30% 82%, hsl(var(--primary) / 0.06), transparent 60%)",
          filter: "saturate(90%)",
          opacity: 0.8,
          willChange: "transform",
          animation: "bgFloat 14s ease-in-out infinite alternate",
        }}
      />

      {/* Ultra-light grid for texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, hsl(var(--primary) / 0.02) 0, hsl(var(--primary) / 0.02) 1px, transparent 1px, transparent 64px)," +
            "repeating-linear-gradient(90deg, hsl(var(--primary) / 0.02) 0, hsl(var(--primary) / 0.02) 1px, transparent 1px, transparent 64px)",
          opacity: 0.7,
        }}
      />

      {/* Gentle veil to keep content readable (slight translucency) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(var(--background) / 0.30), hsl(var(--background) / 0.30))",
        }}
      />

      {/* Vignette to calm edges */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 60%, hsl(var(--background) / 0.40) 100%)",
        }}
      />

      {/* Local keyframes for the soft motion */}
      <style>
        {`@keyframes bgFloat {
            0% { transform: translate3d(0, 0, 0) scale(1); }
            100% { transform: translate3d(-2%, 2%, 0) scale(1.03); }
        }`}
      </style>
    </div>
  );
};

export default Background;
