
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Background from "@/components/Background";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <Background />
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        
        <footer className="bg-transparent border-t border-border py-8 relative z-10">
          <div className="container mx-auto px-6 text-center">
            <p className="text-muted-foreground">
              © 2024 Sree Krishnan. Built with React, TypeScript & Tailwind CSS.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
