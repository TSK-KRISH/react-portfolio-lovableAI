import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const selfProjects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team features, and project tracking capabilities.",
      technologies: ["Vue.js", "Firebase", "TypeScript", "Vuetify"],
      liveLink: "#",
      githubLink: "#",
      featured: false
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and weather alerts.",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
      liveLink: "#",
      githubLink: "#",
      featured: false
    }
  ];

  const academicProjects = [
    {
      title: "Machine Learning Classifier",
      description: "Developed a classification model for predicting student performance using various ML algorithms and data preprocessing techniques.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Jupyter"],
      liveLink: "#",
      githubLink: "#",
      featured: true
    },
    {
      title: "Database Management System",
      description: "Designed and implemented a library management system with advanced SQL queries, stored procedures, and data normalization.",
      technologies: ["MySQL", "PHP", "HTML", "CSS", "JavaScript"],
      liveLink: "#",
      githubLink: "#",
      featured: false
    },
    {
      title: "Mobile App Development",
      description: "Created a cross-platform mobile application for campus navigation with real-time location tracking and interactive maps.",
      technologies: ["React Native", "Expo", "Google Maps API", "AsyncStorage"],
      liveLink: "#",
      githubLink: "#",
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
            <Button variant="outline" size="icon" className="h-8 w-8 border-primary/20 hover:border-primary">
              <ExternalLink className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8 border-primary/20 hover:border-primary">
              <Github className="h-4 w-4" />
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
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my development journey through personal and academic projects
          </p>
        </div>

        <Tabs defaultValue="self" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 p-1">
            <TabsTrigger value="self" className="text-base">Self Projects</TabsTrigger>
            <TabsTrigger value="academic" className="text-base">Academic Projects</TabsTrigger>
          </TabsList>
          
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