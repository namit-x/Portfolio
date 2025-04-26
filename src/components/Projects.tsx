import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { cn } from '../lib/utils';

const mainProjects = [
  {
    title: "Architectural Portfolio",
    description: "A showcase of architectural designs, concepts, and completed projects demonstrating creativity and technical expertise in architecture.",
    imageUrl: "/ArchitecturalPortfolio.png",
    link: "https://www.studio65.in"
  },
  {
    title: "Fork and Find",
    description: "A comprehensive food information website that fetches data through RESTful APIs from openfoodfacts.org",
    imageUrl: "/ForkAndFind.png",
    link: "#"
  },
  {
    title: "Shoporia",
    description: "A modern e-commerce platform offering a seamless shopping experience with intuitive navigation and secure transactions.",
    imageUrl: "/image.png",
    link: "#"
  }
];

const practiceProjects = [
  {
    title: "Todo App",
    description: "A feature-rich todo application with task management, categories, and progress tracking.",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    link: "#",
    isPractice: true
  },
  {
    title: "Quizzo",
    description: "An interactive quiz application with multiple categories, timer functionality, and score tracking.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    link: "#",
    isPractice: true
  }
];

const Projects = () => {
  const [showPractice, setShowPractice] = useState(false);

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        {/* Heading */}
        <div className='text-4xl overflow-hidden text-gradient my-4 font-bold'>
          <div className='overflow-hidden mb-2 text-center'>Projects</div>
          <div className="h-1 w-20 bg-white mx-auto rounded-full"></div>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {mainProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Show practice Button */}
        <div className="text-center mb-8 overflow-hidden w-[300px] transition-all duration-300">
          <button
            onClick={() => {
              setShowPractice(!showPractice);
              console.log(`${window.innerWidth} X ${window.innerHeight}`);
            }}
            className={cn(
              "bg-gradient text-white px-8 py-3 rounded-lg transition-all duration-300 ease-in-out",
              "transform hover:scale-105 transition-all duration-300 font-medium hover:rounded-full"
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
