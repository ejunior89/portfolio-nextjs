
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de envio do formulário
    // Por enquanto apenas mostramos uma notificação
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Responderei em breve!",
      duration: 5000,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <h2 className="section-title">Entre em Contato</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl">
          Tem um projeto em mente ou uma oportunidade para discutirmos? Ficarei feliz em conversar com você!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nome
                      </label>
                      <Input
                        id="name"
                        required
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Assunto
                    </label>
                    <Input
                      id="subject"
                      required
                      placeholder="Assunto da mensagem"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      required
                      placeholder="Sua mensagem..."
                      rows={6}
                    />
                  </div>
                  <Button type="submit" className="bg-portfolio-blue hover:bg-portfolio-darkBlue text-white w-full sm:w-auto">
                    <Send className="h-4 w-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-portfolio-darkBlue dark:text-white">
                  Informações de Contato
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-portfolio-blue mt-1 mr-3" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <a href="mailto:seu@email.com" className="text-gray-600 dark:text-gray-300 hover:text-portfolio-blue">
                        seu@email.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-portfolio-blue mt-1 mr-3" />
                    <div>
                      <h4 className="font-medium">Telefone</h4>
                      <a href="tel:+5511999999999" className="text-gray-600 dark:text-gray-300 hover:text-portfolio-blue">
                        +55 (11) 99999-9999
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-portfolio-blue mt-1 mr-3" />
                    <div>
                      <h4 className="font-medium">Localização</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        São Paulo, SP - Brasil
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-bold mb-4 text-portfolio-darkBlue dark:text-white">
                    Horário Disponível
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    <span className="font-medium">Segunda - Sexta:</span> 9:00 - 18:00
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    <span className="font-medium">Finais de Semana:</span> Fechado
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
