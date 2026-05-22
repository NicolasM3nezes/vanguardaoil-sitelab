'use client'

import { motion } from 'framer-motion'
import { 
  Eye, 
  Sparkles, 
  Users, 
  Zap, 
  Banknote, 
  HeartHandshake 
} from 'lucide-react'

const features = [
  {
    icon: Eye,
    title: 'Atendimento Transparente',
    description: 'Explicamos cada serviço antes de executar, sem surpresas.',
  },
  {
    icon: Sparkles,
    title: 'Oficina Limpa e Organizada',
    description: 'Ambiente profissional que reflete nosso cuidado com seu veículo.',
  },
  {
    icon: Users,
    title: 'Equipe Especializada',
    description: 'Profissionais qualificados e em constante atualização.',
  },
  {
    icon: Zap,
    title: 'Serviço Rápido',
    description: 'Agilidade sem comprometer a qualidade do trabalho.',
  },
  {
    icon: Banknote,
    title: 'Preço Justo',
    description: 'Orçamentos honestos e competitivos sem custos ocultos.',
  },
  {
    icon: HeartHandshake,
    title: 'Pós Atendimento',
    description: 'Suporte contínuo mesmo após o serviço realizado.',
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

export function Features() {
  return (
    <section id="diferenciais" className="py-24 md:py-32 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
            Diferenciais
          </span>
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: 'var(--font-oswald)' }}
          >
            Por que escolher a <span className="text-primary">Vanguarda Oil</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Oferecemos muito mais que serviços automotivos. Entregamos confiança 
            e tranquilidade em cada atendimento.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
