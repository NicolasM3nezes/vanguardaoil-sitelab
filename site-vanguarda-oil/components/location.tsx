'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Navigation } from 'lucide-react'

export function Location() {
  const address =
    "R. Landulfo de Almeida Filho, 58, Cumbica, Guarulhos - SP, 07181-150";

  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    address
  )}&z=17&output=embed`;

  return (
    <section id="localizacao" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
            Localização
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: 'var(--font-oswald)' }}
          >
            Venha nos <span className="text-primary">visitar</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Estamos localizados em Cumbica, Guarulhos, com fácil acesso e
            estacionamento próprio.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden border border-border h-[400px] lg:h-full min-h-[400px]"
          >
            <iframe
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Vanguarda Oil"
              className="absolute inset-0"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl border border-border p-8 md:p-10"
          >
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Endereço</h3>
                  <p className="text-muted-foreground">
                    R. Landulfo de Almeida Filho, 58<br />
                    Cumbica, Guarulhos - SP<br />
                    CEP: 07181-150
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Telefone</h3>
                  <a
                    href="tel:+5511992029239"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    (11) 99202-9239
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Horário de Funcionamento</h3>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 8h às 18h<br />
                    Sábado: 8h às 13h
                  </p>
                </div>
              </div>

              {/* CTA */}
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-primary text-primary-foreground font-semibold rounded-xl transition-all duration-300 hover:bg-primary/90 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25"
              >
                <Navigation className="w-5 h-5" />
                Como chegar
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
