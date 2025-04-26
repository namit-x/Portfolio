import { Mail, Linkedin } from "lucide-react";
import { cn } from '../lib/utils';

const ContactMe = () => {
  const email = "namitwork099@gmail.com"; // Replace with your email
  const linkedin = "https://www.linkedin.com/in/namit-rana-74772733a/"; // Replace with your LinkedIn URL

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full p-4">
        <div className="space-y-8 animate-fade-in overflow-y-hidden p-5">
          <h1 className="text-5xl font-bold text-white text-center mb-8 overflow-hidden">
            Contact Me
          </h1>

          <div className="bg-[#1E1E2F]/90 rounded-xl p-8 shadow-xl border border-purple-500/30 transform hover:scale-105 transition-all duration-500">
            <p className="text-xl text-white mb-8 leading-relaxed">
              I'm a passionate developer with expertise in creating beautiful and functional web applications.
              From architectural visualizations to e-commerce solutions, I bring creative ideas to life through code.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 p-2">
              <a
                href={`mailto:${email}`}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-lg",
                  "bg-gradient hover:opacity-90 transition-all duration-300",
                  "transform hover:scale-105 group"
                )}
              >
                <Mail className="w-5 h-5 text-white group-hover:animate-bounce" />
                <span className="text-white">Get in Touch</span>
              </a>

              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-lg",
                  "bg-gradient hover:opacity-90 transition-all duration-300",
                  "transform hover:scale-105 group"
                )}
              >
                <Linkedin className="w-5 h-5 text-white group-hover:animate-bounce" />
                <span className="text-white">Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;