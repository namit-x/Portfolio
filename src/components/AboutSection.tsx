import { Code, Book, Users, Download, LaptopMinimal } from "lucide-react";
import { Button } from "./ui/button";

export default function AboutSection() {
  const cardInfo = [
    {
      icon: <Code className="h-6 w-6" color="white" />,
      title: "Web Developer",
      description: "Building websites that move fast and look good on any device — no matter how many tabs you have open.💻"
    },
    {
      icon: <LaptopMinimal className="h-6 w-6" color="white" />,
      title: "Freelancer",
      description: "Delivering high-quality solutions to clients"
    },
    {
      icon: <Users className="h-6 w-6" color="white" />,
      title: "Orator",
      description: "I can speak code and I know how to make it sound good. Presentation skills, on point. 💬"
    },
    {
      icon: <Book className="h-6 w-6" color="white" />,
      title: "Student",
      description: "Academically grinding with a 9.06 GPA — because who says you can’t code and study? 📖"
    }
  ];

  return (
    <section id="about" className="w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 overflow-y-hidden">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="h-1 w-20 bg-white mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold">
            Full-Stack Developer. Curious Mind. <br />Powered by Coffee & Ambition. ☕💡
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Hey! I'm Namit — a 2nd-year student at Jain University, Bengaluru, currently juggling a CGPA of 9.06, daily gym sessions, freelance gigs, and late-night coding marathons. I build clean, responsive, and user-friendly web applications that not only look good but work exactly how users expect (and clients love).
            </p>
            <p className="text-muted-foreground text-sm sm:text-base">
              My toolkit includes React.js, Node.js, Express.js, TypeScript, Redux, GraphQL, RESTful APIs, and Tailwind CSS — backed by tools like Git, GitHub, VS Code, ChatGPT, and Cursor AI. I love solving problems, optimizing user experience, and shipping things that work like magic.
            </p>
            <p className="text-muted-foreground text-sm sm:text-base">
              I'm not just aiming for a job. I'm chasing challenges, learning fast, and building with intent. If that sounds like your vibe — let's talk.
            </p>

            <div className="pt-4 p-2">
              <Button
                className="rounded-full bg-gradient text-base sm:text-lg p-4 sm:p-6 hover:scale-105 transition-transform duration-300 overflow-hidden"
                asChild
              >
                <a
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Download Resume
                  <Download className="h-6 w-6 sm:h-8 sm:w-8" strokeWidth={2} />
                </a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 lg:mt-0 p-4">
            {cardInfo.map((card, index) => (
              <div
                key={index}
                className="bg-[#1E1E2F]/90 opacity-90 hover:border-2 backdrop-blur-md p-4 sm:p-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:rotate-3"
              >
                <div className="border-2 mb-4 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gradient text-primary rounded-md transition-transform duration-300">
                  {card.icon}
                </div>
                <h4 className="text-lg sm:text-xl font-semibold mb-2">{card.title}</h4>
                <p className="text-muted-foreground text-[12px] sm:text-base text-white">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}