import { Code, Palette, Database, } from "lucide-react";
import ProjectCard from './ProjectCard.tsx'

const realLifeProjects = [
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
    title: "Advance Architect",
    description: "A showcase of architectural designs, concepts, and completed projects demonstrating creativity and technical expertise in architecture.",
    image: "/Advance.png",
    technologies: ["React", "Tailwind CSS", "UI/UX", "Form Management"],
    liveUrl: "https://www.advancearchitect.in",
    githubUrl: "",
    category: "Frontend",
    icon: <Palette className="w-5 h-5" />,
  },
  {
    title: "Studio65",
    description: "A showcase of architectural designs, concepts, and completed projects demonstrating creativity and technical expertise in architecture.",
    image: "/Vesta.png",
    technologies: ["React", "Tailwind CSS", "UI/UX", "Form Management"],
    liveUrl: "https://www.vestadiagnostics.in",
    githubUrl: "",
    category: "Frontend",
    icon: <Palette className="w-5 h-5" />,
  }
];

const featuredProjects = [
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

const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="text-center mb-12 space-y-4">
    <div className="flex items-center justify-center gap-3 mb-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-gradient p-2">
        {title}
      </h2>
    </div>
    <div className="h-1 w-24 bg-gradient mx-auto rounded-full"></div>
    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
      {subtitle}
    </p>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <div className="space-y-20">
        
        {/* Real Life Projects Section */}
        <div>
          <SectionHeader
            title="Real Life Projects"
            subtitle="Live projects currently serving real users and making a difference in the world"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {realLifeProjects.map((project, index) => (
              <ProjectCard 
                key={`real-${index}`} 
                project={project}
                isRealLife={true}
              />
            ))}
          </div>
        </div>

        {/* Featured Projects Section */}
        <div>
          <SectionHeader
            title="Featured Projects"
            subtitle="A curated collection of projects showcasing technical expertise and creative problem-solving"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard 
                key={`featured-${index}`} 
                project={project} 
                isRealLife={false}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;