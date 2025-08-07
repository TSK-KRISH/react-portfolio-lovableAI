import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent animate-in slide-in-from-bottom duration-1000">
            Hi, I'm Sree Krishnan
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-in slide-in-from-bottom duration-1000 delay-200">
            Full Stack Developer & Creative Problem Solver
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto animate-in slide-in-from-bottom duration-1000 delay-300">
            I create beautiful, functional, and user-friendly applications using modern technologies. 
            Passionate about clean code, innovative solutions, and continuous learning.
          </p>
          
          <div className="flex items-center justify-center mb-16 animate-in slide-in-from-bottom duration-1000 delay-500">
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="bg-primary hover:bg-primary/90 shadow-elegant hover:shadow-glow transition-all duration-300"
            >
              View My Work
            </Button>
          </div>
          
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;