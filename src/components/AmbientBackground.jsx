import { useEffect, useRef } from "react";

/* Orb color — crimson, matches --color-crimson */
const ORB_RGB = "192, 57, 43";

/* Orbs drift within this band of the viewport (fraction 0..1) so they
   never fully leave the screen before bouncing back. */
const MIN_FRAC = 0.05;
const MAX_FRAC = 0.95;

/* Velocities are in viewport-fraction per millisecond. At ~0.000012
   frac/ms, crossing the ~0.9 travel band (0.05 → 0.95) takes about
   75s — comfortably inside the 60-90s "ambient drift" target. */
const ORB_CONFIGS = [
  { xFrac: 0.15, yFrac: 0.12, radius: 380, vx: 0.0000135, vy: 0.0000098 },
  { xFrac: 0.80, yFrac: 0.60, radius: 260, vx: -0.0000108, vy: 0.0000122 },
];

const AmbientBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = 0;
    let height = 0;

    const orbs = ORB_CONFIGS.map((orb) => ({ ...orb }));

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      /* Draw in CSS-pixel space; the transform handles device scaling. */
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    let rafId = null;
    let lastTime = performance.now();

    const step = (now) => {
      const dt = now - lastTime;
      lastTime = now;

      ctx.clearRect(0, 0, width, height);

      orbs.forEach((orb) => {
        orb.xFrac += orb.vx * dt;
        orb.yFrac += orb.vy * dt;

        if (orb.xFrac <= MIN_FRAC || orb.xFrac >= MAX_FRAC) {
          orb.vx *= -1;
          orb.xFrac = Math.min(Math.max(orb.xFrac, MIN_FRAC), MAX_FRAC);
        }
        if (orb.yFrac <= MIN_FRAC || orb.yFrac >= MAX_FRAC) {
          orb.vy *= -1;
          orb.yFrac = Math.min(Math.max(orb.yFrac, MIN_FRAC), MAX_FRAC);
        }

        const cx = orb.xFrac * width;
        const cy = orb.yFrac * height;

        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, orb.radius);
        gradient.addColorStop(0, `rgba(${ORB_RGB}, 0.055)`);
        gradient.addColorStop(1, `rgba(${ORB_RGB}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(cx, cy, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);

    return () => {
      window.removeEventListener("resize", resize);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-screen h-screen z-[-1] pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
};

export default AmbientBackground;
