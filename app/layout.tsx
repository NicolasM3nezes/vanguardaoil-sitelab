import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const oswald = Oswald({ 
  subsets: ["latin"],
  variable: '--font-oswald',
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Vanguarda Oil - Troca de Óleo e Centro Automotivo em Guarulhos',
  description: 'Troca de óleo, manutenção preventiva e serviços automotivos com transparência, confiança e preço justo em Guarulhos. Oficina mecânica em Cumbica com nota 4.9 no Google.',
  keywords: 'troca de óleo em Guarulhos, centro automotivo em Cumbica, oficina mecânica em Guarulhos, troca de óleo perto de mim, manutenção automotiva Guarulhos',
  
  openGraph: {
    title: 'Vanguarda Oil - Troca de Óleo e Centro Automotivo',
    description: 'Troca de óleo, manutenção preventiva e serviços automotivos com transparência, confiança e preço justo em Guarulhos.',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${inter.variable} ${oswald.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
