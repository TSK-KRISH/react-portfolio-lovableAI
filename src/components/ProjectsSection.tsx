import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github } from "lucide-react";

const ProjectsSection = () => {
  const selfProjects = [
    {
      title: "Myth Buster",
      description: "An Angular application with Java backend that uses the Gemini AI model to verify whether user-entered statements are myths or facts, providing detailed explanations.",
      technologies: ["Angular", "Java", "MySQL", "Gemini API"],
      liveLink: "#",
      githubLink: "#",
      featured: false
    },
    {
      title: "Human tweets sentiment predicter",
      description: "A machine learning model that categorizes human tweets as Positive, Negative, or Neutral using Logistic Regression with 84.53% accuracy.",
      technologies: ["Python", "Anaconda", "scikit-learn"],
      liveLink: "#",
      githubLink: "https://github.com/TSK-KRISH/Sentiment-analysis-of-text-using-ML",
      featured: false
    },
    {
      title: "Personal Portfolio website",
      description: "A React portfolio website with my professional details. You're viewing it currently.",
      technologies: ["Vite", "TypeScript", "React", "shadcn-ui", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "https://github.com/TSK-KRISH/react-portfolio-lovableAI",
      featured: false
    }
  ];

  const academicProjects = [
    {
      title: "CollegeFair - College Event organizer application",
      description: "A simple Java application that allows students and colleges to register and organize 5+ different categories of events.",
      technologies: ["Java", "MySQL"],
      liveLink: "#",
      githubLink: "https://github.com/TSK-KRISH/College-Event-Organization-System",
      featured: false
    },
    {
      title: "GymWale - Gym management application",
      description: "A simple Java application that provides features like managing gym memberships and scheduling workouts.",
      technologies: ["Java", "Oracle"],
      liveLink: "#",
      githubLink: "https://github.com/TSK-KRISH/Gym-Management-System",
      featured: false
    },
    {
      title: "Swiggito - Online Food ordering application",
      description: "A full-stack application built with Angular and MySQL that includes features similar to Swiggy or Zomato.",
      technologies: ["Angular", "PHP", "MySQL", "XAMPP"],
      liveLink: "#",
      githubLink: "https://github.com/TSK-KRISH/FOOD-ORDERING-SYSTEM",
      featured: false
    }
  ];

  const ProjectCard = ({ project }: { project: any }) => (
    <Card className="bg-card-gradient border-border/50 hover:shadow-elegant transition-all duration-500 hover:scale-105 group">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
              {project.title}
              {project.featured && (
                <Badge className="ml-2 bg-primary text-primary-foreground">Featured</Badge>
              )}
            </CardTitle>
          </div>
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button asChild variant="outline" size="icon" className="h-8 w-8 border-primary/20 hover:border-primary">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub repository`}>
                <Github className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
        <CardDescription className="text-muted-foreground mt-2">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech: string) => (
            <Badge 
              key={tech} 
              variant="secondary" 
              className="text-xs py-1 px-3 bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="projects" className="py-20 bg-transparent relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            My Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my development journey through personal and academic projects
          </p>
        </div>

        <Tabs defaultValue="self" className="w-full">
          <div className="w-full flex justify-center mb-8">
            <TabsList className="inline-flex p-0.5 rounded-md bg-muted/70 backdrop-blur-sm border border-border gap-1">
              <TabsTrigger value="self" className="px-3 py-1.5 text-sm sm:text-base">Self Projects</TabsTrigger>
              <TabsTrigger value="academic" className="px-3 py-1.5 text-sm sm:text-base">Academic Projects</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="self" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {selfProjects.map((project, index) => (
                <div 
                  key={project.title}
                  className="animate-in slide-in-from-bottom duration-500"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="academic" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {academicProjects.map((project, index) => (
                <div 
                  key={project.title}
                  className="animate-in slide-in-from-bottom duration-500"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;