import { useState } from 'react';
import { cn } from '../lib/utils'

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  isPractice?: boolean;
}

const ProjectCard = ({ title, description, imageUrl, link, isPractice = false }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={cn(
        "rounded-xl overflow-hidden transform transition-all duration-500",
        "border border-white/10 shadow-xl",
        isPractice ? "h-[250px]" : "h-[300px]",
        isHovered ? "scale-105" : ""
      )}>
        <div className="relative h-full">
          <div className={cn(
            "absolute inset-0 transition-opacity duration-500",
            isHovered ? "opacity-100" : "opacity-20"
          )}>
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover object-left"
            />
          </div>
          <div className={cn(
            "absolute inset-0 bg-gradient-light opacity-90",
            "transition-opacity duration-500",
            isHovered ? "opacity-0" : "opacity-95"
          )} />
          <div className={cn(
            "relative h-full p-6 flex flex-col justify-between z-10",
            "transition-opacity duration-500",
            isHovered ? "opacity-0" : "opacity-100"
          )}>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-white">
                {title}
              </h3>
              <p className="text-gray-300 line-clamp-3">{description}</p>
            </div>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-block text-white px-6 py-2 rounded-lg",
                "bg-gradient hover:opacity-90 transition-all duration-300",
                "transform hover:scale-105 w-fit text-sm font-medium"
              )}
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;