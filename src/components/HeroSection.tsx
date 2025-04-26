import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { clsx } from "clsx"
import { useTypewriter } from "react-simple-typewriter";
import { Icon } from '@iconify/react';

export default function HeroSection() {

  const [mee, setMee] = useState("Namit")
  const [animating, setAnimating] = useState(false);
  const [text] = useTypewriter({
    words: [`Hey! I\’m a student who loves building websites — not just how they look, but how they feel to use. I enjoy turning ideas into clean, user-friendly web experiences, and I’m always learning new ways to make the web better.`]
  });
  const techList = [
    { name: 'TypeScript', icon: 'logos:typescript-icon' },
    { name: 'React', icon: 'logos:react' },
    { name: 'JavaScript', icon: 'logos:javascript' },
    { name: 'Git', icon: 'logos:git-icon' },
    { name: 'GitHub', icon: 'octicon:mark-github-16' },
    { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
  ];
  const tittles = ["Full-Stack Developer", "from India", "Web Developer", "Programmer", "Frontend-Developer", "Backend-Developer", "Freelancer", "Undergrad", "Namit"];
  let curr = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);

      setTimeout(() => {
        curr = (curr + 1) % tittles.length;
        setMee(tittles[curr]);
        setAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center scroll-smooth">
      <div className="section-container w-[1000px] mb-6">
        <div className="max-w-[1000px] mx-auto text-center md:text-left ">
          <p className="text-gradient font-mono mb-3 animate-fade-in text-4xl text-center overflow-y-hidden">Hello, I'm</p>

          <h1 className="text-4xl md:text-6xl font-bold py-2 animate-fade-in">
            <span
              className={clsx(
                "text-white transition-all duration-900 block text-center font-bold text-8xl mb-2 overflow-y-hidden",
                animating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              )}
            >
              {mee}
            </span>
          </h1>

          {/* Icons */}
          <p className="text-lg md:text-xl mt-4 font-mono text-gray-400 min-h-[100px] text-center">
            {text}
            <span className="animate-blink text-white">|</span>
          </p>
          <div className="flex flex-wrap justify-center gap-6 p-6">
            {techList.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center">
                <Icon icon={tech.icon} width="40" height="40" />
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in mt-6 font-bold ">
            <Button className="rounded-md bg-gradient hover:text-gradient hover:bg-white border border-transparent hover:border-white transition-all duration-500 ease-in-out " size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button className="rounded-md border border-gradient hover:border-white text-white hover:text-gradient bg-black hover:bg-gradient font-bold transition-all duration-7=500 ease-in-out" size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce p-4 hover:bg-gray-200 rounded-full hover:cursor-pointer transition-all duration-300 ease-in-out">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="h-6 w-6 text-primary" />
        </a>
      </div>
    </section>
  );
}
