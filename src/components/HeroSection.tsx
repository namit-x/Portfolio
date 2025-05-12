import { ArrowDown } from "lucide-react";
import { Button } from "../components/ui/button";
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { useTypewriter } from "react-simple-typewriter";
import { Icon } from '@iconify/react';

export default function HeroSection() {
  const [mee, setMee] = useState("Namit");
  const [animating, setAnimating] = useState(false);
  const [text] = useTypewriter({
    words: [`Hey! I'm a student who loves building websites — because building websites is way more fun than watching Netflix... and way more rewarding, too  I turn ideas into user-friendly web experiences, and I’m constantly finding new ways to make the web better... or at least less annoying.😅`],
    typeSpeed: 40,
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
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 scroll-smooth">
      <div className="w-full max-w-[1000px] mx-auto">
        <div className="space-y-6 text-center overflow-y-hidden">
          {/* Greeting */}
          <p className="text-gradient font-mono text-2xl sm:text-3xl md:text-4xl animate-fade-in overflow-hidden w-[250px] m-auto">
            Hello, I'm
          </p>

          {/* Name/Title Animation */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold animate-fade-in">
            <span
              className={clsx(
                "text-white transition-all duration-900 block font-bold overflow-hidden pb-2",
                animating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              )}
            >
              {mee}
            </span>
          </h1>

          {/* Typewriter Text */}
          <div className="min-h-[120px] sm:min-h-[100px] px-4 sm:px-8 md:px-12">
            <p className="text-base sm:text-lg md:text-xl font-mono text-gray-400">
              {text}
              <span className="animate-blink text-white">|</span>
            </p>
          </div>

          {/* Tech Stack Icons */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 p-4 sm:p-6">
            {techList.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center transform hover:scale-110 transition-transform duration-200"
              >
                <Icon icon={tech.icon} className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in mt-8 px-4">
            <Button
              className="rounded-md bg-gradient hover:text-gradient hover:bg-white border border-transparent hover:border-white transition-all duration-500 ease-in-out w-full sm:w-auto"
              size="lg"
              asChild
            >
              <a href="#projects">View Projects</a>
            </Button>
            <Button
              className="rounded-md border border-gradient hover:border-white text-white hover:text-gradient bg-black hover:bg-gradient font-bold transition-all duration-500 ease-in-out w-full sm:w-auto"
              size="lg"
              asChild
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce p-2 sm:p-4 hover:bg-white rounded-full hover:cursor-pointer transition-all duration-300 ease-in-out">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="h-5 w-5 sm:h-8 sm:w-8 text-primary" />
        </a>
      </div>
    </section>
  );
}