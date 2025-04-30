import { Mail, Linkedin } from "lucide-react";
import { cn } from '../lib/utils';

const ContactMe = () => {
  const email = "namitwork099@gmail.com";
  const linkedin = "https://www.linkedin.com/in/namit-rana-74772733a/";

  return (
    <section id="contact" className="w-full min-h-screen py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-4xl w-full py-4 overflow-y-hidden">
        <div className="space-y-6 sm:space-y-8 animate-fade-in overflow-y-hidden p-3 ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center p-2 sm:mb-8">
            <span className="text-gradient">Contact Me</span>
            <div className="h-1 w-32 mt-2 bg-white mx-auto rounded-full"></div>
          </h1>

          <div className={cn(
            "bg-[#1E1E2F]/90 rounded-xl p-6 sm:p-8 shadow-xl border-2 border-purple-500/30 hover:border-purple-500",
            "transform hover:scale-[1.02] transition-all duration-500",
          )}>
            <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 leading-relaxed">
              I'm a passionate developer with expertise in creating beautiful and functional web applications.
              From architectural visualizations to e-commerce solutions, I bring creative ideas to life through code.
            </p>

            <p className="text-base sm:text-sm md:text-base text-white mb-6 sm:mb-8 leading-relaxed">
              I code things that work (mostly). Serious about building🏛️, Not so serious about everything else👨‍💻
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 py-4">
              <a
                href={`mailto:${email}`}
                className={cn(
                  "w-full sm:w-auto flex items-center justify-center gap-2 px-4 sm:px-6 rounded-lg py-3",
                  "bg-gradient hover:opacity-90 transition-all duration-300",
                  "transform hover:scale-105 group",
                  "animate-scale-in-out"
                )}
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:animate-bounce" />
                <span className="text-sm sm:text-base text-white">
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=namitwork099%40gmail.com" target="_blank">Get in Touch</a>
                </span>
              </a>

              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "w-full sm:w-auto flex items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-lg",
                  "bg-gradient hover:opacity-90 transition-all duration-300",
                  "transform hover:scale-105 group",
                  "animate-scale-in-out"
                )
                }
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:animate-bounce" />
                <span className="text-sm sm:text-base text-white">Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
