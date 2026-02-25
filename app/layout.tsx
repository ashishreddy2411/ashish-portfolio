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
  title: 'Ashish Reddy Jaddu | Founding AI Engineer — RAG, LLM & Backend Systems',
  description: 'Founding AI Engineer with 3+ years building production RAG systems, LLM pipelines, and AI-powered workflow automation on Azure & GCP. Shipped 4 product pivots at a legal-tech startup. Open to backend, AI engineering, and full-stack IC roles.',
  keywords: [
    'Ashish Reddy Jaddu',
    'Founding AI Engineer',
    'Full Stack Engineer',
    'Backend Engineer',
    'AI Engineer',
    'LLM Engineer',
    'RAG',
    'Retrieval-Augmented Generation',
    'LangChain',
    'LangGraph',
    'OpenAI',
    'Azure OpenAI',
    'Vertex AI',
    'Pinecone',
    'Vector Search',
    'Python',
    'Django',
    'Next.js',
    'React',
    'TypeScript',
    'Node.js',
    'Toronto Developer',
    'Toronto',
    'Canada',
    'Legal Tech',
    'AI Workflow Automation',
    'Prompt Engineering',
    'Fine-tuning',
    'MLOps',
    'Vector Embeddings',
    'Azure',
    'GCP',
    'Docker',
    'Kubernetes',
    'Production AI',
    'Open to Work',
  ],
  authors: [{ name: 'Ashish Reddy Jaddu' }],
  creator: 'Ashish Reddy Jaddu',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ashishjaddu.dev',
    title: 'Ashish Reddy Jaddu | Founding AI Engineer — RAG, LLM & Backend Systems',
    description: 'Founding AI Engineer with production RAG systems, LLM pipelines, and AI-powered workflow automation on Azure & GCP. 4 product pivots shipped at legal-tech startup.',
    siteName: 'Ashish Reddy Jaddu Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashish Reddy Jaddu | Founding AI Engineer — RAG, LLM & Backend Systems',
    description: 'Founding AI Engineer building production RAG systems, LLM pipelines, and AI-powered workflow automation on Azure & GCP.',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Ashish Reddy Jaddu",
              "jobTitle": "Founding AI Engineer",
              "description": "Founding AI Engineer with 3+ years building production RAG systems, LLM pipelines, and AI-powered workflow automation on Azure & GCP. Open to backend, AI engineering, and full-stack IC roles.",
              "url": "https://ashishjaddu.dev",
              "email": "ashishjaddu@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Toronto",
                "addressRegion": "ON",
                "addressCountry": "CA"
              },
              "sameAs": [
                "https://github.com/ashishreddy2411",
                "https://www.linkedin.com/in/ashishjaddu/"
              ],
              "knowsAbout": [
                "Retrieval-Augmented Generation",
                "Large Language Models",
                "LangChain",
                "Azure OpenAI",
                "Vertex AI",
                "Python",
                "Django",
                "Next.js",
                "React",
                "Vector Databases",
                "Pinecone",
                "Prompt Engineering",
                "MLOps",
                "Backend Engineering",
                "Full Stack Development",
                "AI Workflow Automation"
              ],
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "Concordia University",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Montreal",
                  "addressRegion": "QC",
                  "addressCountry": "CA"
                }
              },
              "hasCredential": {
                "@type": "EducationalOccupationalCredential",
                "name": "Master of Science in Applied Computer Science",
                "credentialCategory": "degree",
                "recognizedBy": {
                  "@type": "CollegeOrUniversity",
                  "name": "Concordia University"
                }
              }
            })
          }}
        />
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
