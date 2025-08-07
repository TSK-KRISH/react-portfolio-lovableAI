import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Twitter, Instagram, Globe } from "lucide-react";

const ContactSection = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/yourusername",
      description: "Check out my code and projects"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/yourprofile",
      description: "Let's connect professionally"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:your.email@example.com",
      description: "Send me a message"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/yourusername",
      description: "Follow me for tech updates"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/yourusername",
      description: "See my creative side"
    },
    {
      name: "Portfolio",
      icon: Globe,
      url: "https://yourwebsite.com",
      description: "Visit my personal website"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <Card 
                key={link.name}
                className="bg-card-gradient border-border/50 hover:shadow-elegant transition-all duration-500 hover:scale-105 group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => window.open(link.url, '_blank')}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary group-hover:shadow-glow transition-all duration-300">
                      <IconComponent className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {link.name}
                  </h3>
                  <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
                    {link.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-card-gradient border border-border/50 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to start a project?</h3>
            <p className="text-muted-foreground mb-6">
              I'm currently available for freelance work and full-time opportunities. 
              Let's discuss how we can work together to bring your ideas to life.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 shadow-elegant hover:shadow-glow transition-all duration-300"
              onClick={() => window.open('mailto:your.email@example.com', '_blank')}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;