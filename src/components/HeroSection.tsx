import { Button } from "../components/ui/button";
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { useTypewriter } from "react-simple-typewriter";
import { Icon } from '@iconify/react';

export default function HeroSection() {
  const [mee, setMee] = useState("Namit");
  const [animating, setAnimating] = useState(false);
  const [text] = useTypewriter({
    words: [`Hey, I’m Namit — a self-taught web developer who loves turning ideas into digital reality. This isn’t just a portfolio; it’s a snapshot of what I build, how I grow, and why I care. I don’t just write code — I speak to crowds, build projects and chase impact.`],
    typeSpeed: 40,
  });

  const techList = [
    { name: 'TypeScript', icon: 'logos:typescript-icon' },
    { name: 'React', icon: 'logos:react' },
    { name: 'JavaScript', icon: 'logos:javascript' },
    { name: 'Git', icon: 'logos:git-icon' },
    { name: 'GitHub', icon: 'octicon:mark-github-16' },
    { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
    { name: 'GraphQL', icon: 'logos:graphql' },
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
      {/* Mobile Layout */}
      <div className="flex flex-col lg:hidden items-center w-full max-w-4xl mx-auto space-y-8">
        {/* Image Container for Mobile */}
        <div className="flex justify-center animate-fade-in">
          <div className="w-48 sm:w-56 md:w-64 rounded-full bg-[conic-gradient(from_90deg,#b91c1c_0deg,#1d4ed8_180deg,#b91c1c_360deg)] p-[2px] transform hover:scale-105 transition-transform duration-500">
            <img
              src="/NamitAvatar.webp"
              alt="Namit Avatar"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Content Container for Mobile */}
        <div className="w-full text-center space-y-6">
          {/* Greeting */}
          <p className="text-gradient font-mono text-xl sm:text-2xl md:text-3xl animate-fade-in">
            Hello, I'm
          </p>
          
          {/* Name/Title Animation */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold animate-fade-in">
            <span
              className={clsx(
                "text-white transition-all duration-500 block font-bold",
                animating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              )}
            >
              {mee}
            </span>
          </h1>

          {/* Typewriter Text - Fixed width container */}
          <div className="w-full min-h-[140px] sm:min-h-[120px] px-2 sm:px-4">
            <p className="text-sm sm:text-base font-mono text-gray-400 leading-relaxed">
              {text}
              <span className="animate-pulse text-white">|</span>
            </p>
          </div>

          {/* Tech Stack Icons */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 p-4">
            {techList.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center transform hover:scale-110 transition-transform duration-200"
              >
                <Icon icon={tech.icon} className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in mt-6 px-2">
            <Button
              className="rounded-md bg-gradient hover:text-gradient hover:bg-white border-0 border-transparent hover:border-white transition-all duration-500 ease-in-out w-full sm:w-auto"
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

      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center w-full max-w-7xl mx-auto overflow-hidden">
        {/* Image Container for Desktop - Fixed positioning */}
        <div className="w-1/2 flex justify-center animate-fade-in overflow-hidden py-4">
          <div className="w-60 xl:w-72 rounded-full bg-[conic-gradient(from_90deg,#b91c1c_0deg,#1d4ed8_180deg,#b91c1c_360deg)] py-[3px] transform hover:scale-105 transition-transform duration-500">
            <img
              src="/NamitAvatar.webp"
              alt="Namit Avatar"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Content Container for Desktop - Fixed width */}
        <div className="w-1/2 max-w-2xl space-y-6 overflow-hidden ">
          {/* Greeting */}
          <p className="text-gradient font-mono text-2xl xl:text-3xl animate-fade-in w-[180px]">
            Hello, I'm
          </p>

          {/* Name/Title Animation */}
          <h1 className="text-4xl xl:text-6xl font-bold animate-fade-in">
            <span
              className={clsx(
                "text-white transition-all duration-500 block font-bold overflow-hidden py-2",
                animating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              )}
            >
              {mee}
            </span>
          </h1>

          {/* Typewriter Text - Fixed dimensions to prevent layout shift */}
          <div className="w-full h-32 xl:h-36 overflow-hidden">
            <p className="text-base xl:text-lg font-mono text-gray-400 leading-relaxed">
              {text}
              <span className="animate-pulse text-white">|</span>
            </p>
          </div>

          {/* Tech Stack Icons */}
          <div className="flex flex-wrap gap-4 xl:gap-6 my-10 py-2">
            {techList.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center transform hover:scale-110 transition-transform duration-200"
              >
                <Icon icon={tech.icon} className="w-8 h-8 xl:w-10 xl:h-10" />
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 animate-fade-in mt-8">
            <Button
              className="rounded-md bg-gradient hover:text-gradient hover:bg-white border-0 border-transparent hover:border-white transition-all duration-500 ease-in-out"
              size="lg"
              asChild
            >
              <a href="#projects">View Projects</a>
            </Button>
            <Button
              className="rounded-md border border-gradient hover:border-white text-white hover:text-gradient bg-black hover:bg-gradient font-bold transition-all duration-500 ease-in-out"
              size="lg"
              asChild
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
