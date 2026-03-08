import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import { WhatsappButton } from '@/components/whatsapp-button'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: 'SmarterOS | Sistema Operativo Comercial para Chile',
  description: 'Automatización y centralización operativa para Pymes en Chile. WhatsApp Business, CRM, Elia IA, Facturación Electrónica SII y Cobros Integrados.',
  keywords: ['SmarterOS', 'Elia IA', 'CRM Chile', 'ERP Chile', 'Facturación Electrónica SII', 'Automatización de ventas', 'WhatsApp Business API', 'Cobros Flow', 'Pymes Chile', 'Sercotec', 'Corfo', 'Software de gestión'],
  authors: [{ name: 'Smarter SPA' }],
  creator: 'Smarter SPA',
  openGraph: {
    title: 'SmarterOS | Sistema Operativo Comercial para Chile',
    description: 'Automatización y centralización operativa para Pymes en Chile. WhatsApp Business, CRM, Elia IA, Facturación Electrónica SII y Cobros Integrados.',
    url: 'https://smarteros.cl',
    siteName: 'SmarterOS',
    locale: 'es_CL',
    type: 'website',
  },
  icons: {
    icon: '/icon.jpg',
    apple: '/icon.jpg',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a2332',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <WhatsappButton />
        <Analytics />
        <Script id="chatwoot" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `
            (function(d,t) {
              var BASE_URL="https://chat.smarterbot.cl";
              var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
              g.src=BASE_URL+"/packs/js/sdk.js";
              g.async = true;
              s.parentNode.insertBefore(g,s);
              g.onload=function(){
                window.chatwootSDK.run({
                  websiteToken: 'm4MrioCa5mCNzrsMHTMQrFsP',
                  baseUrl: BASE_URL
                })
              }
            })(document,"script");
          `
        }} />
      </body>
    </html>
  )
}
