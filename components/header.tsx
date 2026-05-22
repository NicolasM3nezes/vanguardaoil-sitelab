'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Menu, X, Phone, MapPin } from 'lucide-react'

const navLinks = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#localizacao', label: 'Localização' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const whatsappLink = 'https://wa.me/5511992029239?text=Olá! Gostaria de agendar um serviço.'

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-lg border-b border-border/50" />
      
      <nav className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg" style={{ fontFamily: 'var(--font-oswald)' }}>V</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-lg text-foreground" style={{ fontFamily: 'var(--font-oswald)' }}>
                VANGUARDA OIL
              </div>
              <div className="text-xs text-muted-foreground -mt-1">Centro Automotivo</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+5511992029239"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              (11) 99202-9239
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-lg transition-all duration-300 hover:bg-primary/90"
            >
              Agendar Agora
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-foreground font-medium py-2"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-border space-y-3">
              <a
                href="tel:+5511992029239"
                className="flex items-center gap-2 text-muted-foreground"
              >
                <Phone className="w-4 h-4" />
                (11) 99202-9239
              </a>
              <a
                href="https://maps.google.com/?q=R.+Landulfo+de+Almeida+Filho,+58+-+Cumbica,+Guarulhos+-+SP"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground"
              >
                <MapPin className="w-4 h-4" />
                Cumbica, Guarulhos - SP
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-5 py-3 bg-primary text-primary-foreground font-semibold rounded-lg"
              >
                Agendar pelo WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </nav>
    </header>
  )
}
