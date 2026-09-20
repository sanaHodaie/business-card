import React, { useEffect, useRef } from 'react';

export const MouseTrailCanvas = () => {
  const canvasRef = useRef(null);
  const pointsRef = useRef([]);
  const lastPosRef = useRef(null);
  const animFrameId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const colors = [
      'rgba(14, 165, 233, ',   // Vibrant sky blue
      'rgba(168, 85, 247, ',   // Soft radiant purple
      'rgba(249, 115, 22, ',   // Warm gentle amber-peach
      'rgba(20, 184, 166, ',   // Fresh mint teal
      'rgba(255, 255, 255, ',  // Bright specular sparkle
    ];

    const addPoint = (x, y, vx, vy) => {
      const colorBase = colors[Math.floor(Math.random() * colors.length)];
      pointsRef.current.push({
        x,
        y,
        vx: vx * 0.08 + (Math.random() - 0.5) * 0.4,
        vy: vy * 0.08 + (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 5 + 4,
        alpha: 0.65,
        color: colorBase,
        maxLife: Math.random() * 18 + 20,
        age: 0,
      });

      // Cap points array for gentle, non-overwhelming, high-performance trail
      if (pointsRef.current.length > 40) {
        pointsRef.current.shift();
      }
    };

    const handlePointerMove = (clientX, clientY) => {
      if (!lastPosRef.current) {
        lastPosRef.current = { x: clientX, y: clientY };
        addPoint(clientX, clientY, 0, 0);
        return;
      }

      const dx = clientX - lastPosRef.current.x;
      const dy = clientY - lastPosRef.current.y;
      const dist = Math.hypot(dx, dy);

      // Relaxed interpolation step for lighter, calmer trail
      const step = 16;
      if (dist > step) {
        const count = Math.min(Math.floor(dist / step), 3);
        for (let i = 1; i <= count; i++) {
          const t = i / count;
          const ix = lastPosRef.current.x + dx * t;
          const iy = lastPosRef.current.y + dy * t;
          addPoint(ix, iy, dx / (count || 1), dy / (count || 1));
        }
      } else if (dist > 6) {
        addPoint(clientX, clientY, dx, dy);
      }

      lastPosRef.current = { x: clientX, y: clientY };

      // Wake up render loop if stopped
      if (!animFrameId.current) {
        render();
      }
    };

    const onMouseMove = (e) => {
      handlePointerMove(e.clientX, e.clientY);
    };

    const onTouchMove = (e) => {
      if (e.touches.length > 0) {
        handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const points = pointsRef.current;
      for (let i = points.length - 1; i >= 0; i--) {
        const p = points[i];
        p.age++;
        p.x += p.vx;
        p.y += p.vy;

        const progress = p.age / p.maxLife;
        const currentAlpha = Math.max(0, p.alpha * (1 - progress));
        const currentRadius = p.radius * (1 - progress * 0.4);

        if (progress >= 1 || currentAlpha <= 0.01) {
          points.splice(i, 1);
          continue;
        }

        // Soft radiant glow
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, currentRadius * 2.2);
        grad.addColorStop(0, `${p.color}${currentAlpha})`);
        grad.addColorStop(0.4, `${p.color}${currentAlpha * 0.5})`);
        grad.addColorStop(1, `${p.color}0)`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius * 2.2, 0, Math.PI * 2);
        ctx.fill();

        // Bright sparkling core
        ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha * 0.7})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius * 0.35, 0, Math.PI * 2);
        ctx.fill();
      }

      if (points.length > 0) {
        animFrameId.current = requestAnimationFrame(render);
      } else {
        animFrameId.current = null;
        lastPosRef.current = null;
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30"
      style={{ mixBlendMode: 'screen' }}
      aria-hidden="true"
    />
  );
};
