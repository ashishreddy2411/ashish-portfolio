"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, Download, ArrowDown, Play, Pause } from "lucide-react"
import { toast } from "sonner"
import { GridPattern } from "@/components/magicui/grid-pattern"

// Enhanced Terminal Animation
function InteractiveTerminal() {
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [showCursor, setShowCursor] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const terminalContentRef = useRef<HTMLDivElement>(null)

  const commands = [
    "$ whoami",
    "ashish-reddy-jaddu — Founding AI Engineer",
    "$ cat roles.txt",
    "Backend Engineer | AI Engineer | Full-Stack Engineer",
    "$ cat stack-in-production.yml",
    "cloud:",
    "  - Azure App Services (Python/Django APIs)",
    "  - Azure Durable Functions (workflow orchestration)",
    "  - Azure VNet (private endpoints for legal data)",
    "  - Azure OpenAI (GPT-4, embeddings)",
    "  - Azure AI Search (vector + hybrid search)",
    "ai_ml:",
    "  - Vertex AI (eval pipeline: 82% → 87% retrieval precision)",
    "  - Pinecone (120K+ case law embeddings)",
    "  - LangChain + LangGraph (multi-step agents)",
    "mobile:",
    "  - Mobile apps (React Native, iOS + Android)",
    "  - Published on iOS App Store + Google Play",
    "monitoring:",
    "  - Mixpanel + PostHog (product analytics)",
    "  - Azure SignalR (real-time dashboards)",
    "$ python rag_eval_pipeline.py --run-suite",
    "Running hallucination tests... ✓ 94% pass rate",
    "Validating retrieval accuracy... ✓ 87% precision",
    "Cost analysis: $0.12/query (optimized from $0.45)",
    "$ git log --oneline --graph -5",
    "* 3a9f2c1 perf: Cut API latency 30% via Redis caching",
    "* b7e4d18 feat: React Native offline-first architecture",
    "* 8c2a5f9 feat: Vertex AI eval pipeline, 82%→87% precision",
    "* d1f6e23 feat: Azure Durable Functions workflow engine",
    "* 2e9b7a4 feat: RAG pipeline with Pinecone + OpenAI",
    "$ _",
  ]

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        if (currentLine < commands.length - 1) {
          if (currentChar < commands[currentLine].length) {
            setCurrentChar((prev) => prev + 1)
          } else {
            setCurrentLine((prev) => prev + 1)
            setCurrentChar(0)
          }
        } else {
          // Reset animation
          setTimeout(() => {
            setCurrentLine(0)
            setCurrentChar(0)
          }, 2000)
        }
      }, 80)
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [currentLine, currentChar, commands.length, isPlaying])

  // Auto-scroll to bottom when new lines appear
  useEffect(() => {
    if (terminalContentRef.current && isPlaying) {
      terminalContentRef.current.scrollTop = terminalContentRef.current.scrollHeight
    }
  }, [currentLine, isPlaying])

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorTimer)
  }, [])

  const togglePlayback = () => {
    setIsPlaying(!isPlaying)
    toast(isPlaying ? "Terminal paused" : "Terminal resumed")
  }

  return (
    <div className="relative group">
      <div className="bg-gray-900/95 dark:bg-gray-950/95 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700/50 shadow-2xl">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-gray-800 dark:bg-gray-900 border-b border-gray-700">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-gray-400 text-sm ml-2">ashish@portfolio:~</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={togglePlayback}
            className="!bg-transparent hover:!bg-gray-700/50 !text-gray-400 hover:!text-white"
            aria-label={isPlaying ? "Pause animation" : "Play animation"}
          >
            {isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
          </Button>
        </div>
        
        {/* Terminal Content */}
        <div ref={terminalContentRef} className="p-6 font-mono text-sm h-80 overflow-y-auto relative">
          <div className="space-y-1">
            {commands.slice(0, currentLine + 1).map((command, index) => (
              <div 
                key={index} 
                className={`${
                  command.startsWith('$') 
                    ? 'text-blue-400' 
                    : command.includes('feat:') || command.includes('perf:') || command.includes('fix:')
                    ? 'text-green-400'
                    : command.includes('%') || command.includes('✨')
                    ? 'text-yellow-400'
                    : 'text-gray-300'
                } ${index === currentLine ? 'animate-pulse' : ''}`}
              >
                {index === currentLine 
                  ? command.slice(0, currentChar) + (showCursor && index === currentLine ? '|' : '') 
                  : command
                }
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  )
}

// Floating particles background component
function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
    }> = []

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: Math.random() > 0.5 ? '59, 130, 246' : '147, 51, 234', // Blue or Purple
      })
    }

    function animate() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${particle.color}, ${particle.opacity})`
        ctx.fill()
      })

      // Draw connections
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = `rgba(${particle.color}, ${0.1 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    window.addEventListener("resize", resizeCanvas)
    return () => window.removeEventListener("resize", resizeCanvas)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  )
}

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleEmailClick = () => {
    window.location.href = "mailto:ashishjaddu@gmail.com"
    toast.success("Opening email client...")
  }

  const handleDownloadResume = () => {
    // Replace with actual resume URL
    const resumeUrl = "/ashish-reddy-jaddu-resume.pdf"
    const link = document.createElement('a')
    link.href = resumeUrl
    link.download = "Ashish_Reddy_Jaddu_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    toast.success("Resume downloaded!")
  }

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      const navHeight = 80
      const elementPosition = element.offsetTop - navHeight
      window.scrollTo({ top: elementPosition, behavior: "smooth" })
    }
  }

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg"
      aria-label="Hero section"
    >
      {/* Grid Pattern Background */}
      <div className="absolute inset-0">
        <GridPattern
          width={100}
          height={100}
          x={-1}
          y={-1}
          className="fill-muted/10 stroke-muted/20 dark:fill-muted/5 dark:stroke-muted/10"
          squares={[
            [0, 1],
            [2, 4],
            [5, 2],
            [8, 6],
            [11, 3],
            [14, 8],
            [17, 5],
            [20, 9],
            [23, 2],
            [26, 7],
          ]}
        />
      </div>
      
      {/* Existing gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background" />
      
      {/* Main Content */}
      <div className="relative z-10 container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
          {/* Text Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            {/* Introduction */}
            <div className="space-y-4">
              <Badge
                variant="outline"
                className="border-primary/50 text-primary animate-glow"
              >
                👋 Welcome to my portfolio
              </Badge>

              <div className="space-y-3">
                <p className="text-primary font-mono text-lg">Hi, my name is</p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                  <span className="gradient-text">Ashish Reddy Jaddu</span>
                </h1>

                {/* Outcome-Driven Headline */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mt-4">
                  Founding Engineer shipping <span className="gradient-text">production AI systems</span>
                </h2>

                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  Backend · AI/LLM · Full-Stack — <span className="text-primary font-semibold">RAG, Azure, Vertex AI</span> · 4 pivots shipped
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty">
              Founding Engineer at{" "}
              <span className="text-primary font-semibold">LegiSimple</span> — 3+ years building production AI systems.
              I architect and ship RAG-powered legal research platforms, optimize LLM retrieval pipelines,
              and build full-stack applications from Python/Django APIs to React Native mobile apps.
              Shipped 4 product pivots in 20 months—from OpenAI-powered research tools to multi-channel workflow
              automation on Azure infrastructure.
            </p>

            {/* Key Metrics */}
            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl">
              {[
                { label: "Product Velocity", value: "4 pivots", desc: "shipped in 20 months", impact: "from idea to production MVP" },
                { label: "RAG System", value: "< 1 sec", desc: "query latency in production", impact: "hybrid search over 120K+ legal cases" },
                { label: "Workflow Impact", value: "3hr → 15min", desc: "end-to-end process time", impact: "HR sanctions automation" },
              ].map((stat) => (
                <div key={stat.label} className="group p-5 bg-muted/40 backdrop-blur-sm rounded-lg border border-border/50 hover:border-primary/50 hover:bg-muted/60 transition-all duration-300">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">{stat.label}</p>
                  <p className="text-2xl md:text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.desc}</p>
                  <p className="text-xs text-primary/80 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{stat.impact}</p>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 text-muted-foreground">
              <div className="flex items-center gap-2 hover:text-foreground transition-colors">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Toronto, Canada</span>
              </div>
              <button 
                onClick={handleEmailClick}
                className="flex items-center gap-2 hover:text-foreground transition-colors group"
                aria-label="Send email to ashishjaddu@gmail.com"
              >
                <Mail className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                <span>ashishjaddu@gmail.com</span>
              </button>
            </div>

                        {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <div className="relative">
                <Button
                  size="lg"
                  onClick={handleEmailClick}
                  className="btn-primary group"
                  aria-label="Get in touch via email"
                >
                  <Mail className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Get In Touch
                </Button>

              </div>
              
              <Button
                variant="outline"
                size="lg"
                onClick={handleDownloadResume}
                className="hover-scale"
                aria-label="Download resume"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Resume
              </Button>
            </div>

            {/* Scroll Indicator */}
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group mt-8"
              aria-label="Scroll to about section"
            >
              <span className="text-sm">Learn more about me</span>
              <ArrowDown className="h-4 w-4 animate-bounce group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Interactive Terminal */}
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'} delay-300`}>
            <InteractiveTerminal />
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-float delay-1000" />
    </section>
  )
} 