'use client'

import { motion } from 'framer-motion'
import { MessageCircle, ChevronDown } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
  const whatsappLink = 'https://wa.me/5511992029239?text=Olá! Gostaria de agendar um serviço.'

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Centro automotivo premium"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span id="inicio"className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
              Centro Automotivo Premium em Guarulhos
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6"
            style={{ fontFamily: 'var(--font-oswald)' }}
          >
            <span className="text-balance">Seu carro em</span>
            <br />
            <span className="text-primary">boas mãos</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed text-pretty"
          >
            Troca de óleo, manutenção preventiva e serviços automotivos com
            transparência, confiança e preço justo em Guarulhos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar pelo WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-xl border border-border transition-all duration-300 hover:bg-secondary/80 hover:border-primary/30"
            >
              Ver serviços
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {[
              { value: '4.9', label: 'Nota no Google' },
              { value: '78+', label: 'Avaliações' },
              { value: '10+', label: 'Anos de Experiência' },
              { value: '500+', label: 'Clientes Satisfeitos' },
            ].map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-primary" style={{ fontFamily: 'var(--font-oswald)' }}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute -bottom-0 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="block text-xs uppercase tracking-wider">Saiba mais</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}
