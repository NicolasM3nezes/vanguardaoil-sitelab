'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export function CTA() {
  const whatsappLink = 'https://wa.me/5511992029239?text=Olá! Gostaria de agendar um serviço.'

  return (
    <section className="py-24 md:py-32 bg-card/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
            Agende Agora
          </span>
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6"
            style={{ fontFamily: 'var(--font-oswald)' }}
          >
            Pronto para cuidar do seu <span className="text-primary">veículo</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Entre em contato pelo WhatsApp e agende seu serviço. Atendimento 
            rápido, preço justo e transparência total.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar pelo Wha
            </a>
            <a
              href="tel:+5511992029239"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-xl border border-border transition-all duration-300 hover:bg-secondary/80 hover:border-primary/30"
            >
              Ligar: (11) 99202-9239
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
