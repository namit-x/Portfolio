import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { cn } from '../lib/utils';

const mainProjects = [
  {
    title: "Studio65",
    description: "A showcase of architectural designs, concepts, and completed projects demonstrating creativity and technical expertise in architecture.",
    imageUrl: "/ArchitecturalPortfolio.webp",
    link: "https://www.studio65.in",
    inProgress: false,
  },
  {
    title: "Fork and Find",
    description: "A comprehensive food information website that fetches data through RESTful APIs from openfoodfacts.org",
    imageUrl: "/ForkAndFind.webp",
    link: "https://github.com/namit-x/Find-Fork",
    inProgress: false,
  },
  {
    title: "Shoporia",
    description: "A modern e-commerce platform offering a seamless shopping experience with intuitive navigation and secure transactions.",
    imageUrl: "/image.webp",
    link: "https://github.com/namit-x/P2_Shoporia",
    inProgress: true,
  },
  {
    title: "OpenUp",
    description: "A scalable mental wellness platform enabling users to discover therapists, schedule sessions, and connect via secure, real-time video — all online, with a focus on privacy and user experience.",
    imageUrl: "/OpenUp.webp",
    link: "https://github.com/namit-x/OpenUp",
    inProgress: true,
  },
];

const practiceProjects = [
  {
    title: "Todo App",
    description: "A feature-rich todo application with task management, categories, and progress tracking.",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    link: "https://github.com/namit-x/TodoApp",
    isPractice: true
  },
  {
    title: "Quizzo",
    description: "An interactive quiz application with multiple categories, timer functionality, and score tracking.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    link: "https://github.com/namit-x/Quizzo",
    isPractice: true
  }
];

const Projects = () => {
  const [showPractice, setShowPractice] = useState(false);

  const buttonBaseClasses = cn(
    "w-full sm:w-auto flex items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-lg",
    "bg-gradient hover:opacity-90 transition-all duration-300",
    "transform hover:scale-105 group focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
  );

  return (
    <section id='projects' className="py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 flex flex-col overflow-hidden items-center">
        {/* Heading */}
        <div className='text-4xl overflow-hidden text-gradient my-4 font-bold sm:text-3xl'>
          <div className='overflow-hidden mb-2 text-center'>Projects</div>
          <div className="h-1 w-20 bg-white mx-auto rounded-full"></div>
        </div>
        <div className='text-2xl sm:text-xl overflow-hidden text-white my-2'>Made with ❤️ and Lots of ☕</div>
        <div className='text-lg sm:text-md overflow-hidden text-gray-400 sm:text-sm'>These are some self-made websites (unless asking AI for syntax help counts) Handcrafted. Still human. Still worth it. 🚀</div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
          {mainProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Show practice Button */}
        <div className="text-center mb-8 overflow-hidden w-[300px] transition-all duration-300 p-2">
          <button
            onClick={() => { setShowPractice(!showPractice); }}
            className={cn(
              buttonBaseClasses,
              "text-white text-sm font-medium"
            )}
          >
            {showPractice ? 'Hide Practice Projects' : 'Show Practice Projects'}
          </button>
        </div>

        {showPractice && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 animate-fade-in">
            {practiceProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;