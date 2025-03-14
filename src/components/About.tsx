
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title">Sobre Mim</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Olá! Sou um desenvolvedor apaixonado por criar soluções web elegantes e funcionais. Minha jornada na programação começou há alguns anos, e desde então venho me dedicando a aprimorar minhas habilidades e conhecimentos.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Tenho experiência em desenvolvimento front-end com React e TypeScript, além de conhecimentos em back-end com Node.js. Gosto de trabalhar em equipe, resolver problemas complexos e aprender novas tecnologias.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Quando não estou codando, gosto de [seus hobbies e interesses]. Acredito que esses interesses diversos me ajudam a trazer uma perspectiva única para meus projetos de desenvolvimento.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-portfolio-darkBlue dark:text-white">Educação</h3>
              <Card className="mb-4">
                <CardContent className="p-6">
                  <h4 className="font-bold">Bacharel em Ciência da Computação</h4>
                  <p className="text-gray-600 dark:text-gray-400">Universidade XYZ • 2018 - 2022</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-bold">Especialização em Desenvolvimento Web</h4>
                  <p className="text-gray-600 dark:text-gray-400">Instituto ABC • 2022 - 2023</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="relative rounded-lg overflow-hidden h-80 md:h-96 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="Desenvolvedor trabalhando" 
                className="object-cover w-full h-full"
              />
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-portfolio-darkBlue dark:text-white">Interesses</h3>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'React', 'Node.js', 'UX/UI', 'Acessibilidade', 'Performance Web'].map((interest) => (
                  <span 
                    key={interest} 
                    className="bg-blue-100 text-portfolio-darkBlue px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
