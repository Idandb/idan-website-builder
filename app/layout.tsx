import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Assistant, Rubik } from 'next/font/google'
import { PHONE_INTL, SITE_URL } from '@/lib/site'
import './globals.css'

const assistant = Assistant({
  subsets: ['hebrew', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-assistant',
  display: 'swap',
})

const rubik = Rubik({
  subsets: ['hebrew', 'latin'],
  weight: ['500', '600', '700', '800', '900'],
  variable: '--font-rubik',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'עידן בניית אתרים | בניית אתרים, דפי נחיתה וקידום דיגיטלי',
  description:
    'עידן בניית אתרים — בונים אתרי תדמית מרשימים, דפי נחיתה ממירים וקידום דיגיטלי שמביא לקוחות. אתרים שגורמים למבקרים להגיד וואו. התקשרו עכשיו לייעוץ חינם.',
  keywords: [
    'בניית אתרים',
    'עידן בניית אתרים',
    'דפי נחיתה',
    'קידום אתרים',
    'שיווק דיגיטלי',
    'עיצוב אתרים',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'עידן בניית אתרים | אתרים שמביאים תוצאות',
    description:
      'בניית אתרי תדמית, דפי נחיתה וקידום דיגיטלי ברמה הגבוהה ביותר.',
    locale: 'he_IL',
    type: 'website',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'עידן בניית אתרים',
  description:
    'בניית אתרי תדמית מרשימים, דפי נחיתה ממירים וקידום דיגיטלי לעסקים.',
  url: SITE_URL,
  telephone: `+${PHONE_INTL}`,
  areaServed: 'IL',
  priceRange: '$$',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b1220',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="he" dir="rtl" className={`${assistant.variable} ${rubik.variable} bg-background`}>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-primary-foreground"
        >
          דלג לתוכן
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
