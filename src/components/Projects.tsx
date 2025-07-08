import { useState } from 'react';
import { ExternalLink, Github, Code, Palette, Database } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from '../lib/utils';

const projects = [
  {
    title: "Studio65",
    description: "A showcase of architectural designs, concepts, and completed projects demonstrating creativity and technical expertise in architecture.",
    image: "/ArchitecturalPortfolio.webp",
    technologies: ["React", "Tailwind CSS", "Design Systems"],
    liveUrl: "https://www.studio65.in",
    githubUrl: "",
    category: "Design",
    icon: <Palette className="w-5 h-5" />,
  },
  {
    title: "Fork and Find",
    description: "A comprehensive food information website that fetches data through RESTful APIs from openfoodfacts.org.",
    image: "/ForkAndFind.webp",
    technologies: ["React", "REST API", "CSS Modules"],
    liveUrl: "",
    githubUrl: "https://github.com/namit-x/Find-Fork",
    category: "Frontend",
    icon: <Code className="w-5 h-5" />,
  },
  {
    title: "Shoporia",
    description: "A modern e-commerce platform offering a seamless shopping experience with intuitive navigation and secure transactions.",
    image: "/image.webp",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "",
    githubUrl: "https://github.com/namit-x/P2_Shoporia",
    category: "Full-Stack",
    icon: <Database className="w-5 h-5" />,
  },
  {
    title: "OpenUp",
    description: "A scalable mental wellness platform enabling users to discover therapists, schedule sessions, and connect via secure, real-time video.",
    image: "/OpenUp.webp",
    technologies: ["React", "Node.js", "100ms SDK", "JWT"],
    liveUrl: "",
    githubUrl: "https://github.com/namit-x/OpenUp",
    category: "Full-Stack",
    icon: <Database className="w-5 h-5" />,
  }
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
    "group relative w-full sm:w-auto inline-flex items-center justify-center gap-3",
    "px-8 py-4 text-sm font-semibold tracking-wide",
    "bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600",
    "hover:from-purple-700 hover:via-blue-700 hover:to-indigo-700",
    "text-white rounded-xl shadow-lg hover:shadow-xl",
    "transition-all duration-300 ease-out",
    "transform hover:scale-[1.02] active:scale-[0.98]",
    "focus:outline-none focus:ring-4 focus:ring-purple-500/30",
    "before:absolute before:inset-0 before:rounded-xl before:bg-white/10 before:opacity-0",
    "before:transition-opacity before:duration-300 hover:before:opacity-100"
  );

  return (
    <section id="projects" className="w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <div className="h-1 w-20 bg-white mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development, 
            from concept to deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-[#1E1E2F]/90 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                  {project.icon}
                  <span className="text-sm font-medium text-white">{project.category}</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gradient transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.liveUrl ? (
                    <Button
                      className="flex-1 bg-gradient hover:opacity-90 transition-all duration-300 group/btn"
                      size="sm"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                        Live Demo
                      </a>
                    </Button>
                  ) : (
                    <Button
                      className="flex-1 bg-gray-600/50 hover:bg-gray-600/70 cursor-not-allowed transition-all duration-300"
                      size="sm"
                      disabled
                    >
                      <div className="flex items-center justify-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Demo Unavailable
                      </div>
                    </Button>
                  )}
                  
                  {project.githubUrl ? (
                    <Button
                      className="flex-1 border border-white/20 bg-transparent text-white hover:bg-white hover:text-black transition-all duration-300 group/btn"
                      size="sm"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                        Code
                      </a>
                    </Button>
                  ) : (
                    <Button
                      className="flex-1 border border-white/20 bg-transparent text-white hover:bg-white hover:text-black cursor-not-allowed transition-all duration-300"
                      size="sm"
                      disabled
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Github className="w-4 h-4" />
                        Private Code
                      </div>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button
            className="bg-transparent border-2 border-gradient text-white hover:bg-gradient hover:border-transparent transition-all duration-500 px-8 py-3"
            size="lg"
            asChild
          >
            <a href="#contact">
              View More Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
