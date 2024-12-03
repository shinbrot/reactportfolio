import React, { useEffect, useRef } from 'react';

const Sphere: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const drawSphere = () => {
      const width = canvas.width;
      const height = canvas.height;
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.3;

      ctx.clearRect(0, 0, width, height);

      // Create gradient background for the sphere
      const gradient = ctx.createLinearGradient(
        centerX - radius,
        centerY - radius,
        centerX + radius,
        centerY + radius
      );
      gradient.addColorStop(0, 'rgba(147, 51, 234, 0.5)'); // Purple
      gradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.5)'); // Blue
      gradient.addColorStop(1, 'rgba(236, 72, 153, 0.5)'); // Pink

      // Draw the main sphere with gradient
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw animated wave lines
      const lines = 50;
      const angleStep = (Math.PI * 2) / lines;

      for (let i = 0; i < lines; i++) {
        const angle = i * angleStep;
        const waveAmplitude = radius * 0.1;
        const frequency = 8;
        const speed = 2;
        
        const distortion = Math.sin(time * speed + i * 0.2) * waveAmplitude;
        const x1 = centerX + (radius - distortion) * Math.cos(angle);
        const y1 = centerY + (radius - distortion) * Math.sin(angle);
        const x2 = centerX + (radius + distortion) * Math.cos(angle);
        const y2 = centerY + (radius + distortion) * Math.sin(angle);

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 + Math.sin(time + i) * 0.05})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Add glowing dots at intersections
        ctx.beginPath();
        ctx.arc(x1, y1, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.3 + Math.sin(time + i) * 0.2})`;
        ctx.fill();
      }

      // Add outer glow
      const glowGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        radius * 0.8,
        centerX,
        centerY,
        radius * 1.2
      );
      glowGradient.addColorStop(0, 'rgba(147, 51, 234, 0.2)');
      glowGradient.addColorStop(1, 'rgba(147, 51, 234, 0)');
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.2, 0, Math.PI * 2);
      ctx.fillStyle = glowGradient;
      ctx.fill();

      time += 0.01;
      animationFrameId = requestAnimationFrame(drawSphere);
    };

    const resizeCanvas = () => {
      canvas.width = 800;
      canvas.height = 800;
    };

    resizeCanvas();
    drawSphere();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute opacity-70 blur-[1px] mix-blend-screen"
      style={{ filter: 'contrast(1.2) brightness(1.1)' }}
    />
  );
};

export default Sphere;