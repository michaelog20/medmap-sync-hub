import { useEffect, useRef } from 'react';

interface DataStreamBackgroundProps {
  isPaused: boolean;
}

export const DataStreamBackground = ({ isPaused }: DataStreamBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const offsetRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const drawCircuitPattern = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const lineSpacing = 40;
      const nodeSpacing = 80;
      
      // Draw horizontal lines
      for (let y = 0; y < canvas.height + lineSpacing; y += lineSpacing) {
        ctx.strokeStyle = 'rgba(59, 130, 246, 0.15)'; // Subtle blue
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Draw vertical lines with offset for movement
      for (let x = (offsetRef.current % nodeSpacing); x < canvas.width + nodeSpacing; x += nodeSpacing) {
        ctx.strokeStyle = 'rgba(100, 116, 139, 0.1)'; // Dark gray
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Draw connection nodes
      for (let y = 0; y < canvas.height + lineSpacing; y += lineSpacing) {
        for (let x = (offsetRef.current % nodeSpacing); x < canvas.width + nodeSpacing; x += nodeSpacing) {
          ctx.fillStyle = 'rgba(59, 130, 246, 0.3)';
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const animate = () => {
      if (!isPaused) {
        offsetRef.current += 0.3; // Slow movement
      }
      
      drawCircuitPattern();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPaused]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
};
