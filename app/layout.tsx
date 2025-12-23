import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ashish Reddy Jaddu | CTO & Full-Stack AI Engineer',
  description: 'Startup CTO specializing in LLM-powered legal-tech solutions, RAG systems, and workflow automation. Led 4 product pivots from GPT-based legal research to AI workflow automation at LegiSimple/Trails.',
  keywords: [
    'Ashish Reddy Jaddu',
    'CTO',
    'Full Stack Developer',
    'Generative AI Engineer',
    'LLM',
    'RAG',
    'OpenAI',
    'Azure OpenAI',
    'Python',
    'Django',
    'Next.js',
    'React',
    'Montreal Developer',
    'LegiSimple',
    'Trails',
    'Legal Tech',
    'AI Workflow Automation',
    'Vector Embeddings',
    'Machine Learning',
    'Vertex AI'
  ],
  authors: [{ name: 'Ashish Reddy Jaddu' }],
  creator: 'Ashish Reddy Jaddu',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ashishjaddu.dev',
    title: 'Ashish Reddy Jaddu | CTO & Full-Stack AI Engineer',
    description: 'Startup CTO specializing in LLM-powered legal-tech solutions, RAG systems, and workflow automation. Building the future of legal tech with AI.',
    siteName: 'Ashish Reddy Jaddu Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ashish Reddy Jaddu - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashish Reddy Jaddu | CTO & Full-Stack AI Engineer',
    description: 'Startup CTO specializing in LLM-powered legal-tech solutions, RAG systems, and AI workflow automation.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://ashishjaddu.dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
