
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "Flix Api",
    description: "Uma aplicação completa de gerenciamento de filme, com autenticação de usuário.",
    image: "http://images.unsplash.com/photo-1615986201152-7686a4867f30?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Python", "Django Rest Framework", "SqLite"],
    liveLink: "https://github.com/ejunior89/Flix-Api-DJango-Master-PycodeBr",
    sourceCode: "https://github.com/ejunior89/Flix-Api-DJango-Master-PycodeBr",
    featured: true
  },
  {
    id: 2,
    title: "SGE",
    description: "Sistema de Gestão de Estoque, um projeto desenvolvido em Django e Bootstrap 5 para facilitar o gerenciamento de estoque.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Django", "BootStrap", "SqLite"],
    liveLink: "https://github.com/ejunior89/SGE",
    sourceCode: "https://github.com/ejunior89/SGE",
    featured: true
  },
];

const Projects = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <h2 className="section-title">Meus Projetos</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl">
          Estes são alguns dos projetos que desenvolvi. Cada projeto representa um desafio único e uma oportunidade de aprendizado.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map(project => (
            <Card key={project.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader className="p-6">
                <h3 className="text-xl font-bold">{project.title}</h3>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="bg-blue-100 text-portfolio-darkBlue">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-between">
                {project.liveLink && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-portfolio-blue hover:text-portfolio-darkBlue"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" /> 
                    <span>Ver Demo</span>
                  </a>
                )}
                {project.sourceCode && (
                  <a 
                    href={project.sourceCode} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-portfolio-blue hover:text-portfolio-darkBlue"
                  >
                    <Github className="h-4 w-4 mr-1" /> 
                    <span>Ver Código</span>
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {otherProjects.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-portfolio-darkBlue dark:text-white">Outros Projetos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map(project => (
                <Card key={project.id} className="transition-all duration-300 hover:shadow-lg">
                  <CardHeader className="p-6">
                    <div className="flex items-center justify-between">
                      <Code className="h-8 w-8 text-portfolio-blue" />
                      <div className="flex space-x-3">
                        {project.liveLink && (
                          <a 
                            href={project.liveLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-portfolio-blue"
                            aria-label={`Ver demo de ${project.title}`}
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        )}
                        {project.sourceCode && (
                          <a 
                            href={project.sourceCode} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-portfolio-blue"
                            aria-label={`Ver código fonte de ${project.title}`}
                          >
                            <Github className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mt-4">{project.title}</h3>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs text-gray-600 dark:text-gray-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        <div className="text-center mt-16">
          <Button className="bg-portfolio-blue hover:bg-portfolio-darkBlue text-white">
            <a 
              href="https://github.com/ejunior89" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Github className="h-5 w-5 mr-2" />
              Ver Mais no GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
