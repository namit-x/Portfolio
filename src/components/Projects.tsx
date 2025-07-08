import { ExternalLink, Github, Code, Palette, Database } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Studio65",
    description: "A showcase of architectural designs, concepts, and completed projects demonstrating creativity and technical expertise in architecture.",
    image: "/ArchitecturalPortfolio.webp",
    technologies: ["React", "Tailwind CSS", "UI/UX", "Form Management"],
    liveUrl: "https://www.studio65.in",
    githubUrl: "",
    category: "Frontend",
    icon: <Palette className="w-5 h-5" />,
  },
  {
    title: "Fork and Find",
    description: "A comprehensive food information website that fetches data through RESTful APIs from openfoodfacts.org.",
    image: "/ForkAndFind.webp",
    technologies: ["React", "REST API", "Design"],
    liveUrl: "",
    githubUrl: "https://github.com/namit-x/Find-Fork",
    category: "Frontend",
    icon: <Code className="w-5 h-5" />,
  },
  {
    title: "Shoporia",
    description: "A modern e-commerce platform offering a seamless shopping experience with intuitive navigation and secure transactions.",
    image: "/image.webp",
    technologies: ["React", "Node.js", "MongoDB", "JWT"],
    liveUrl: "",
    githubUrl: "https://github.com/namit-x/P2_Shoporia",
    category: "Full-Stack",
    icon: <Database className="w-5 h-5" />,
  },
  {
    title: "OpenUp",
    description: "A scalable mental wellness platform enabling users to discover therapists, schedule sessions, and connect via secure, real-time video.",
    image: "/OpenUp.webp",
    technologies: ["React", "Typescript", "100ms SDK", "JWT"],
    liveUrl: "",
    githubUrl: "https://github.com/namit-x/OpenUp",
    category: "Full-Stack",
    icon: <Database className="w-5 h-5" />,
  }
];

const Projects = () => {

  return (
    <section id="projects" className="w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <div className="text-2xl sm:text-3xl font-bold mb-4 overflow-y-hidden flex flex-col justify-center items-center">
            <h2 className="text-gradient w-fit p-2">
              Featured Projects
            </h2>
            <div className="h-1 w-20 bg-gradient mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 px-4 sm:px-0">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 w-full max-w-[600px] group rounded-lg overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {/* Project Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-lg sm:text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 sm:p-6">
                  <p className="text-gray-300 mb-4 text-sm sm:text-base">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs font-medium bg-purple-500/20 text-white rounded-full border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 sm:gap-3 h-20 sm:h-20 sm:p-2 ">
                    {project.liveUrl ? (
                      <Button
                        className="flex-1 bg-gradient text-white text-sm sm:text-base h-14 m-1"
                        asChild
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 transition-transform duration-500 hover:scale-105 sm:p-4"
                        >
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                          Live Demo
                        </a>
                      </Button>
                    ) : (
                      <Button
                        className="flex-1 bg-[#24292e] h-14 text-white hover:bg-gray-600 border border-gray-600 text-sm sm:text-base"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;