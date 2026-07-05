import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Heebo, Rubik } from 'next/font/google'
import './globals.css'

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  variable: '--font-heebo',
  display: 'swap',
})

const rubik = Rubik({
  subsets: ['hebrew', 'latin'],
  weight: ['500', '600', '700', '800', '900'],
  variable: '--font-rubik',
  display: 'swap',
})

export const metadata: Metadata = {
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
  generator: 'v0.app',
  openGraph: {
    title: 'עידן בניית אתרים | אתרים שמביאים תוצאות',
    description:
      'בניית אתרי תדמית, דפי נחיתה וקידום דיגיטלי ברמה הגבוהה ביותר.',
    locale: 'he_IL',
    type: 'website',
  },
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
    <html lang="he" dir="rtl" className={`${heebo.variable} ${rubik.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
