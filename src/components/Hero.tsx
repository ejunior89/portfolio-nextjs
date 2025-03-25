
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="section-container">
        <div className="max-w-3xl">
          <p className="text-portfolio-blue font-mono mb-2">Olá, meu nome é</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-portfolio-darkBlue dark:text-white mb-4">
            Elio Junior
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-portfolio-gray dark:text-gray-300 mb-6">
            Desenvolvedor Back-end
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Eu sou um desenvolvedor Java. 
            Atualmente, estou focado em construir aplicações web acessíveis e responsivas 
            utilizando as tecnologias mais modernas.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-portfolio-blue hover:bg-portfolio-darkBlue text-white">
              <a href="#projects">Ver Projetos</a>
            </Button>
            <Button variant="outline" className="border-portfolio-blue text-portfolio-blue hover:text-white hover:bg-portfolio-blue">
              <a href="#contact">Entre em Contato</a>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={scrollToAbout}
            aria-label="Rolar para baixo"
          >
            <ChevronDown className="h-6 w-6 text-portfolio-blue" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
