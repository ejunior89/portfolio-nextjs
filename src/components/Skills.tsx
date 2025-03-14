
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    name: "Front-end",
    skills: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "React", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "NextJS", level: 75 },
    ]
  },
  {
    name: "Back-end",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "PostgreSQL", level: 70 },
      { name: "GraphQL", level: 65 },
    ]
  },
  {
    name: "Outras Ferramentas",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 65 },
      { name: "CI/CD", level: 70 },
      { name: "Jest", level: 75 },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title">Minhas Habilidades</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl">
          Ao longo dos anos, adquiri experiência e conhecimento em várias tecnologias e ferramentas. 
          Abaixo estão algumas das minhas principais habilidades técnicas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-portfolio-darkBlue dark:text-white">{category.name}</h3>
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm font-medium text-gray-500">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2 bg-gray-200" indicatorClassName="bg-portfolio-blue" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-portfolio-darkBlue dark:text-white">Soft Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Trabalho em Equipe",
              "Comunicação",
              "Resolução de Problemas",
              "Pensamento Crítico",
              "Adaptabilidade",
              "Gerenciamento de Tempo",
              "Liderança",
              "Empatia",
              "Criatividade",
              "Organização",
              "Aprendizado Contínuo",
              "Atenção aos Detalhes"
            ].map((skill, index) => (
              <div 
                key={index} 
                className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center hover:bg-portfolio-blue hover:text-white transition-colors duration-300"
              >
                <span className="text-sm font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
