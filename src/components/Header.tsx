
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Contato', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: <Github className="h-5 w-5" />, href: 'https://github.com/ejunior89' },
    { name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, href: 'https://linkedin.com/in/ejunior89' },
    { name: 'Email', icon: <Mail className="h-5 w-5" />, href: 'mailto:eliomaiajunior@proton.me' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="font-bold text-xl text-portfolio-blue dark:text-portfolio-purple">
              <span className="font-mono">&lt;</span>Dev<span className="font-mono">/&gt;</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="underline-animation text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-portfolio-blue dark:hover:text-portfolio-purple"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-portfolio-blue dark:hover:text-portfolio-purple transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-portfolio-blue dark:hover:text-portfolio-purple"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex space-x-6 pt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-portfolio-blue dark:hover:text-portfolio-purple transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
