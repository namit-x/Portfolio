import { useEffect, useRef } from "react"
import HeroSection from "./HeroSection"
import AboutSection from "./AboutSection"
import Timeline from "./Timeline"
import Projects from "./Projects"
import ContactMe from "./ContactMe"

const PARTICLE_COUNT = 25

const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | null>(null)
  const particlesRef = useRef<any[]>([])

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext("2d")!
    let width = window.innerWidth
    let height = window.innerHeight

    // Set canvas size
    canvas.width = width
    canvas.height = height

    // Initialize particles only once
    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      dx: Math.random() * 2 - 1,
      dy: Math.random() * 2 - 1,
      radius: Math.random() * 3 + 1,
    }))

    const draw = (p: any) => {
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
      ctx.fillStyle = "white"
      ctx.fill()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particlesRef.current.forEach(p => {
        p.x += p.dx
        p.y += p.dy
        if (p.x <= 0 || p.x >= canvas.width) p.dx *= -1
        if (p.y <= 0 || p.y >= canvas.height) p.dy *= -1
        draw(p)
      })
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Throttle resize event
    let resizeTimeout: number | null = null
    const handleResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout)
      resizeTimeout = window.setTimeout(() => {
        width = window.innerWidth
        height = window.innerHeight
        canvas.width = width
        canvas.height = height
        // Optionally, respawn particles or reposition
        particlesRef.current.forEach(p => {
          // Clamp within bounds
          p.x = Math.max(0, Math.min(p.x, width))
          p.y = Math.max(0, Math.min(p.y, height))
        })
      }, 100)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      window.removeEventListener("resize", handleResize)
      if (resizeTimeout) clearTimeout(resizeTimeout)
    }
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 z-0 w-screen h-full bg-black pointer-events-none"
      />
      <div className="text-white relative top-0 left-0 z-10">
        <HeroSection />
        <AboutSection />
        <Timeline />
        <Projects />
        <ContactMe />
      </div>
    </>
  )
}

export default Background