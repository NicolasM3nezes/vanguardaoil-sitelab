'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Carlos M.',
    text: 'Ótimo atendimento, ambiente limpo, preço justo e honestidade. Recomendo a todos!',
    rating: 5,
  },
  {
    name: 'Ana Paula S.',
    text: 'Equipe fantástica, muito perfeita e de confiança. Sempre volto para fazer a manutenção do meu carro.',
    rating: 5,
  },
  {
    name: 'Roberto L.',
    text: 'Trabalho impecável, preço justo e serviço transparente. A melhor oficina de Guarulhos!',
    rating: 5,
  },
  {
    name: 'Fernanda C.',
    text: 'Profissionais sérios e honestos. Explicaram tudo que fizeram no meu carro. Super indico!',
    rating: 5,
  },
  {
    name: 'Marcos V.',
    text: 'Excelente atendimento! Preço justo e serviço de qualidade. Meu carro saiu como novo.',
    rating: 5,
  },
  {
    name: 'Juliana R.',
    text: 'Finalmente encontrei uma oficina de confiança. Transparência total e pós-atendimento incrível.',
    rating: 5,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export function Reviews() {
  return (
    <section id="avaliacoes" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
            Avaliações
          </span>
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: 'var(--font-oswald)' }}
          >
            O que nossos <span className="text-primary">clientes</span> dizem
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Avaliações reais de clientes que confiam em nosso trabalho há anos.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-6 bg-card rounded-2xl border border-border transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-primary fill-primary"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review text */}
              <p className="text-foreground mb-6 leading-relaxed">
                {`"${review.text}"`}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{review.name}</div>
                  <div className="text-sm text-muted-foreground">Cliente verificado</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Google Reviews CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.google.com/search?kgmid=/g/11k1p3t9_4&hl=pt-BR&q=Vanguarda+oil+-+Troca+de+%C3%B3leo+e+Centro+automotivo+em+Cumbica&shem=rimspwouoe&shndl=30&source=sh/x/loc/osrp/m5/1&kgs=8ee4d8b9b44e52f7&utm_source=rimspwouoe,sh/x/loc/osrp/m5/1#lrd=0x94ce8ba83a855e97:0x7242d1f81dd5f59f,1,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-xl border border-border transition-all duration-300 hover:bg-secondary/80 hover:border-primary/30"
          >
            Ver todas as avaliações no Google
          </a>
        </motion.div>
      </div>
    </section>
  )
}
