import { Mail, Linkedin, Github } from "lucide-react";
import { cn } from '../lib/utils';

interface ContactLink {
  href: string;
  icon: React.ReactNode;
  label: string;
  external?: boolean;
}

const ContactMe = () => {
  const contactInfo = {
    email: "namitwork099@gmail.com",
    linkedin: "https://www.linkedin.com/in/namit-rana-74772733a/",
    github: "https://github.com/namit-x"
  };

  const contactLinks: ContactLink[] = [
    {
      href: `mailto:${contactInfo.email}`,
      icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: "Get in Touch"
    },
    {
      href: contactInfo.linkedin,
      icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: "Connect on LinkedIn",
      external: true
    },
    {
      href: contactInfo.github,
      icon: <Github className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: "View on GitHub",
      external: true
    }
  ];

  const buttonBaseClasses = cn(
    "w-full sm:w-auto flex items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-lg",
    "bg-gradient hover:opacity-90 transition-all duration-300",
    "transform hover:scale-105 group focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
  );

  return (
    <section
      id="contact"
      className="w-full min-h-screen py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-4xl w-full py-4">
        <div className="space-y-6 sm:space-y-8 animate-fade-in p-3">
          <header className="text-center">
            <h1
              id="contact-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold p-2 sm:mb-8"
            >
              <span className="text-gradient">Contact Me</span>
            </h1>
            <div className="h-1 w-32 mt-2 bg-white mx-auto rounded-full" aria-hidden="true"></div>
          </header>

          <div className={cn(
            "bg-[#1E1E2F]/90 rounded-xl p-6 sm:p-8 shadow-xl border-2 border-purple-500/30",
            "hover:border-purple-500 transform hover:scale-[1.02] transition-all duration-500"
          )}>
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed">
                I'm a passionate developer with a knack for turning ideas into responsive, functional web applications.
                I'm currently looking for internship opportunities to sharpen my skills, contribute to real-world projects, and grow as a full-stack developer.
              </p>

              <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed">
                Let’s connect — I’m serious about learning and even more serious about delivering.
              </p>
            </div>

            <nav aria-label="Contact methods">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 py-4">
                {contactLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    {...(link.external && {
                      target: "_blank",
                      rel: "noopener noreferrer"
                    })}
                    className={buttonBaseClasses}
                    aria-label={`${link.label} - Opens ${link.external ? 'in new tab' : 'email client'}`}
                  >
                    <span className="text-white group-hover:animate-bounce" aria-hidden="true">
                      {link.icon}
                    </span>
                    <span className="text-sm sm:text-base text-white">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
