import { Code, Book, Users, Download, LaptopMinimal } from "lucide-react";
import { Button } from "./ui/button";

export default function AboutSection() {
  return (
    <section id="about" className="max-w-screen">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4 overflow-y-hidden">
            <span className="text-gradient ">About Me</span>
          </h2>
          <div className="h-1 w-20 bg-white mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Full-Stack Developer. Curious Mind. Coffee-Fueled Coder.
            </h3>
            <p className="text-muted-foreground mb-6">
              Hey! I’m Namit — a 2nd-year student at Jain University, Bengaluru, currently juggling a CGPA of 9.06, daily gym sessions, freelance gigs, and late-night coding marathons. I build clean, responsive, and user-friendly web applications that not only look good but work exactly how users expect (and clients love).
            </p>
            <p className="text-muted-foreground mb-6">
              My toolkit includes React.js, Node.js, Express.js, TypeScript, Redux, GraphQL, RESTful APIs, and Tailwind CSS — backed by tools like Git, GitHub, VS Code, ChatGPT, and Cursor AI. I love solving problems, optimizing user experience, and shipping things that work like magic.
            </p>
            <p className="text-muted-foreground mb-6">
              I’m not just aiming for a job. I’m chasing challenges, learning fast, and building with intent. If that sounds like your vibe — let's talk.
            </p>

            <div>
              <Button className="rounded-full bg-gradient text-xl p-6 overflow-y-hidden" asChild>
                <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download Resume
                  <Download className="h-12 w-12" strokeWidth={3} />
                </a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 overflow-hidden p-4">
            <div className="bg-[#1E1E2F]/90 opacity-90 hover:border-2 backdrop-blur-md p-6 rounded-xl transition-all duration-300 transform hover:scale-105 perspective-1000 hover:rotate-3 hover:-translate-y-1">
              <div className="border-2 mb-4 w-12 h-12 flex items-center justify-center bg-gradient
                            text-primary rounded-md transition-transform duration-300
                            group-hover:rotate-12">
                <Code className="h-6 w-6" color="white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Web Developer</h4>
              <p className="text-muted-foreground text-white">
                Building responsive and performant web applications
              </p>
            </div>

            <div className="bg-[#1E1E2F]/90 opacity-90 hover:border-2 backdrop-blur-md p-6 rounded-xl transition-all duration-300 transform hover:scale-105 perspective-1000 hover:rotate-3 hover:-translate-y-1">
              <div className="border-2 mb-4 w-12 h-12 flex items-center justify-center bg-gradient
                            text-primary rounded-md transition-transform duration-300
                            group-hover:rotate-12">
                <LaptopMinimal className="h-6 w-6" color="white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Freelancer</h4>
              <p className="text-muted-foreground text-white">
                Delivering high-quality solutions to diverse clients
              </p>
            </div>

            <div className="bg-[#1E1E2F]/90 opacity-90 hover:border-2 backdrop-blur-md p-6 rounded-xl transition-all duration-300 transform hover:scale-105 perspective-1000 hover:rotate-3 hover:-translate-y-1">
              <div className="border-2 opacity-100 mb-4 w-12 h-12 flex items-center justify-center bg-gradient
                            text-primary rounded-md transition-transform duration-300
                            group-hover:rotate-12">
                <Users className="h-6 w-6" color="white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Orator</h4>
              <p className="text-muted-foreground text-white">
                Effective communication and presentation skills
              </p>
            </div>

            <div className="bg-[#1E1E2F]/90 opacity-90 hover:border-2 backdrop-blur-md p-6 rounded-xl transition-all duration-300 transform hover:scale-105 perspective-1000 hover:rotate-3 hover:-translate-y-1">
              <div className="border-2 mb-4 w-12 h-12 flex items-center justify-center bg-gradient
                            text-primary rounded-md transition-transform duration-300
                            group-hover:rotate-12">
                <Book className="h-6 w-6" color="white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Student</h4>
              <p className="text-muted-foreground text-white">
                Pursuing academic excellence with maintaining a GPA of 9.06
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}