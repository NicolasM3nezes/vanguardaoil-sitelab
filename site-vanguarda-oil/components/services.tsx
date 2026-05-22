'use client'

import { motion } from 'framer-motion'
import { 
  Droplets, 
  Disc, 
  Thermometer, 
  Settings2, 
  Target, 
  CircleDot, 
  ClipboardCheck, 
  Wrench 
} from 'lucide-react'

const services = [
  {
    icon: Droplets,
    title: 'Troca de Óleo',
    description: 'Troca de óleo com produtos de qualidade e procedência garantida.',
  },
  {
    icon: Disc,
    title: 'Freios',
    description: 'Revisão completa do sistema de freios para sua segurança.',
  },
  {
    icon: Thermometer,
    title: 'Radiador',
    description: 'Manutenção e reparo do sistema de arrefecimento.',
  },
  {
    icon: Settings2,
    title: 'Câmbio Automático',
    description: 'Especialistas em manutenção de transmissões automáticas.',
  },
  {
    icon: Target,
    title: 'Alinhamento',
    description: 'Alinhamento de direção com equipamentos de precisão.',
  },
  {
    icon: CircleDot,
    title: 'Balanceamento',
    description: 'Balanceamento de rodas para maior conforto e durabilidade.',
  },
  {
    icon: ClipboardCheck,
    title: 'Revisão Preventiva',
    description: 'Revisão completa para prevenir problemas futuros.',
  },
  {
    icon: Wrench,
    title: 'Manutenção Geral',
    description: 'Serviços gerais de mecânica automotiva.',
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

export function Services() {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
            Nossos Serviços
          </span>
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: 'var(--font-oswald)' }}
          >
            Serviços <span className="text-primary">Especializados</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Oferecemos uma ampla gama de serviços automotivos com qualidade, 
            transparência e preço justo.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-6 bg-card rounded-2xl border border-border transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Glassmorphism effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
