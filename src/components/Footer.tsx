
import React from 'react';
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 py-12 border-t dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="font-bold text-xl text-portfolio-blue dark:text-portfolio-purple mb-4">
              <span className="font-mono">&lt;</span>Dev<span className="font-mono">/&gt;</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Desenvolvedor Front-end criando experiências digitais excepcionais e interfaces intuitivas.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/seuusuario" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-portfolio-blue dark:hover:text-portfolio-purple transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/seuusuario" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-portfolio-blue dark:hover:text-portfolio-purple transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/seuusuario" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-portfolio-blue dark:hover:text-portfolio-purple transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="mailto:seu@email.com" 
                className="text-gray-500 hover:text-portfolio-blue dark:hover:text-portfolio-purple transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-portfolio-darkBlue dark:text-white">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-portfolio-blue dark:hover:text-portfolio-purple">Início</a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-portfolio-blue dark:hover:text-portfolio-purple">Sobre</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-portfolio-blue dark:hover:text-portfolio-purple">Projetos</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-portfolio-blue dark:hover:text-portfolio-purple">Habilidades</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-portfolio-blue dark:hover:text-portfolio-purple">Contato</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-portfolio-darkBlue dark:text-white">Contato</h3>
            <address className="not-italic">
              <p className="text-gray-600 dark:text-gray-300 mb-2">São Paulo, SP - Brasil</p>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                <a href="mailto:seu@email.com" className="hover:text-portfolio-blue dark:hover:text-portfolio-purple">
                  seu@email.com
                </a>
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                <a href="tel:+5511999999999" className="hover:text-portfolio-blue dark:hover:text-portfolio-purple">
                  +55 (11) 99999-9999
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-300">
          <p>&copy; {year} Seu Nome. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">
            Desenvolvido com React, TypeScript e Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
