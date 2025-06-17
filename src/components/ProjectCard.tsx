import { useState } from 'react';
import { cn } from '../lib/utils'
import { ExternalLink, Clock } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  isPractice?: boolean;
  inProgress?: boolean;
}

const ProjectCard = ({
  title,
  description,
  imageUrl,
  link,
  isPractice = false,
  inProgress = false
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonBaseClasses = cn(
    "w-full sm:w-auto flex items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-lg",
    "bg-gradient hover:opacity-90 transition-all duration-300",
    "transform hover:scale-105 group focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2",
    "overflow-hidden"
  );

  return (
    <article
      className="relative group overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`${title} project card`}
    >
      <div className={cn(
        "rounded-xl overflow-hidden transform transition-all duration-500 border-4",
        "border border-white/10 shadow-xl backdrop-blur-sm",
        isPractice ? "h-[250px]" : "h-[300px]",
        isHovered ? "scale-105 shadow-2xl" : "",
        "focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-offset-2"
      )}>
        {/* Progress Badge */}
        {inProgress && (
          <div className="absolute top-3 right-3 z-20">
            <div className={cn(
              "flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium",
              "bg-amber-500/90 text-white backdrop-blur-sm",
              "animate-pulse"
            )}>
              <Clock className="w-3 h-3" />
              <span>In Progress</span>
            </div>
          </div>
        )}

        <div className="relative h-full overflow-hidden">
          {/* Image Layer */}
          <div className={cn(
            "absolute inset-0 transition-all duration-500",
            isHovered ? "opacity-100 scale-110" : "opacity-30"
          )}>
            <img
              src={imageUrl}
              alt={`${title} project preview`}
              className="w-full h-full object-cover object-left transition-transform duration-700"
              loading="lazy"
            />
          </div>

          {/* Overlay Gradient */}
          <div className={cn(
            "absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80",
            "transition-opacity duration-500",
            isHovered ? "opacity-60" : "opacity-90"
          )} />

          {/* Content Layer */}
          <div className="relative h-full p-6 flex flex-col justify-between z-10">
            <div className="space-y-3">
              <header>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                  {title}
                </h3>
              </header>
              <p className={cn(
                "text-gray-200 leading-relaxed",
                isPractice ? "text-sm line-clamp-2" : "text-base line-clamp-3",
                "transition-all duration-300",
                isHovered ? "text-white" : ""
              )}>
                {description}
              </p>
            </div>

            <footer className="mt-4 overflow-hidden p-2 w-fit">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonBaseClasses,
                  "text-white text-sm font-medium w-fit",
                  inProgress ? "opacity-75 cursor-not-allowed" : ""
                )}
                {...(inProgress && {
                  onClick: (e) => e.preventDefault(),
                  'aria-disabled': true
                })}
                aria-label={`View ${title} project ${inProgress ? '(in progress)' : ''}`}
              >
                <span>{inProgress ? 'Coming Soon' : 'View Project'}</span>
                <ExternalLink className={cn(
                  "w-3 h-3 transition-transform duration-300",
                  !inProgress && "group-hover:translate-x-1"
                )} />
              </a>
            </footer>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;