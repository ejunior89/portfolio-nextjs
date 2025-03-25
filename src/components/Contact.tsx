
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <h2 className="section-title">Entre em Contato</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl">
          Tem um projeto em mente ou uma oportunidade para discutirmos? Ficarei feliz em conversar com você!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
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
                        eliomaiajunior@proton.me
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-portfolio-blue mt-1 mr-3" />
                    <div>
                      <h4 className="font-medium">Localização</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Porto Velho, RO - Brasil
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-bold mb-4 text-portfolio-darkBlue dark:text-white">
                    Horário Disponível
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    <span className="font-medium">Segunda - Sexta:</span> 9:00 - 17:00
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
