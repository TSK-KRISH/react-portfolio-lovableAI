
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Globe } from "lucide-react";

const ContactSection = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/TSK-KRISH?tab=overview&from=2025-08-01&to=2025-08-07",
      description: "Check out my code and projects"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/sree-krishnan-t/",
      description: "Let's connect professionally"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:myselfsreekrishnan@gmail.com",
      description: "Send me a message"
    },
    {
      name: "Medium",
      icon: Globe,
      url: "https://medium.com/@sreekrishnan",
      description: "Read my articles and insights"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-transparent relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.name} - ${link.description}`}
                className="block"
              >
                <Card 
                  key={link.name}
                  className="bg-card-gradient border-border/50 hover:shadow-elegant transition-all duration-500 hover:scale-105 group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
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
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
