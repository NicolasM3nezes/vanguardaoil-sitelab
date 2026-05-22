'use client'

import { motion } from 'framer-motion'
import { Shield, Users, Award, Clock } from 'lucide-react'

const highlights = [
  { icon: Shield, label: 'Honestidade' },
  { icon: Users, label: 'Atendimento Diferenciado' },
  { icon: Award, label: 'Equipe de Confiança' },
  { icon: Clock, label: 'Pós Atendimento' },
]

export function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
              Sobre Nós
            </span>
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6"
              style={{ fontFamily: 'var(--font-oswald)' }}
            >
              Confiança e <span className="text-primary">Transparência</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A Vanguarda Oil é referência em serviços automotivos em Guarulhos, 
                destacando-se pela honestidade e atendimento diferenciado que nossos 
                clientes sempre reconhecem.
              </p>
              <p>
                Nossa equipe fantástica e de confiança trabalha com transparência total, 
                sempre explicando cada serviço realizado e apresentando preços justos 
                antes de qualquer execução.
              </p>
              <p>
                Com ambiente limpo e organizado, oferecemos não apenas serviços de 
                qualidade, mas uma experiência completa de pós-atendimento que fideliza 
                centenas de clientes ao longo dos anos.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-3 bg-background/50 rounded-xl border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-card rounded-3xl border border-border p-8 md:p-12 overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative">
                <div className="text-center mb-8">
                  <div 
                    className="text-7xl md:text-8xl font-bold text-primary mb-2"
                    style={{ fontFamily: 'var(--font-oswald)' }}
                  >
                    4.9
                  </div>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-6 h-6 text-primary fill-primary"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">Nota no Google</p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-background/50 rounded-xl">
                    <div 
                      className="text-2xl md:text-3xl font-bold text-foreground"
                      style={{ fontFamily: 'var(--font-oswald)' }}
                    >
                      78+
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Avaliações</div>
                  </div>
                  <div className="p-4 bg-background/50 rounded-xl">
                    <div 
                      className="text-2xl md:text-3xl font-bold text-foreground"
                      style={{ fontFamily: 'var(--font-oswald)' }}
                    >
                      10+
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Anos</div>
                  </div>
                  <div className="p-4 bg-background/50 rounded-xl">
                    <div 
                      className="text-2xl md:text-3xl font-bold text-foreground"
                      style={{ fontFamily: 'var(--font-oswald)' }}
                    >
                      500+
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Clientes</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
