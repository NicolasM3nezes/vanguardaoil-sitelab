'use client'

import Link from 'next/link'
import { Phone, MapPin, Mail, Instagram, Facebook } from 'lucide-react'

const quickLinks = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#localizacao', label: 'Localização' },
]

const services = [
  'Troca de Óleo',
  'Freios',
  'Radiador',
  'Câmbio Automático',
  'Alinhamento',
  'Balanceamento',
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl" style={{ fontFamily: 'var(--font-oswald)' }}>V</span>
              </div>
              <div>
                <div className="font-bold text-xl text-foreground" style={{ fontFamily: 'var(--font-oswald)' }}>
                  VANGUARDA OIL
                </div>
                <div className="text-xs text-muted-foreground">Centro Automotivo</div>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Troca de óleo e serviços automotivos com transparência, 
              confiança e preço justo em Guarulhos.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Serviços</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+5511992029239"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  (11) 99202-9239
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=R.+Landulfo+de+Almeida+Filho,+58+-+Cumbica,+Guarulhos+-+SP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>
                    R. Landulfo de Almeida Filho, 58<br />
                    Cumbica, Guarulhos - SP
                  </span>
                </a>
              </li>
              <li className="pt-2">
                <div className="text-muted-foreground text-sm">
                  <strong className="text-foreground">Horário:</strong><br />
                  Seg-Sex: 8h às 18h<br />
                  Sábado: 8h às 13h
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {currentYear} Vanguarda Oil. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground text-xs">
            Centro Automotivo em Guarulhos - SP
          </p>
        </div>
      </div>
    </footer>
  )
}
