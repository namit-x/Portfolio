import { useEffect, useRef } from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import Timeline from "./Timeline";
import Projects from "./Projects";
import ContactMe from "./ContactMe";

const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 25 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      dx: Math.random() * 2 - 1,
      dy: Math.random() * 2 - 1,
      radius: Math.random() * 3 + 1,
    }));

    const draw = (p: any) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = "white";
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x <= 0 || p.x >= canvas.width) p.dx *= -1;
        if (p.y <= 0 || p.y >= canvas.height) p.dy *= -1;
        draw(p);
      });
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 z-0 w-screen h-full bg-black p-0 m-0 overflow-hidden pointer-events-none"
      />
      <div className='text-white relative top-0 left-0 z-10'>
        <HeroSection />
        <AboutSection />
        <Timeline />
        <Projects />
        <ContactMe />
      </div>
    </>
  );
};

export default Background;
