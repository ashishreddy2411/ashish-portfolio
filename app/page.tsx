"use client"

import { useState, useEffect } from "react"
import { EnhancedNavigation } from "@/components/enhanced-navigation"
import { HeroSection } from "@/components/hero-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Mail, MapPin, Github, Linkedin,
  ChevronRight, Award,
  Calendar, TrendingUp, User
} from "lucide-react"
import { toast } from "sonner"
import { GridPattern } from "@/components/magicui/grid-pattern"

// Enhanced Skills Component
function SkillsSection() {
  const [visibleSkills, setVisibleSkills] = useState(new Set())

  const skillCategories = {
    "Architecture & Infrastructure": [
      { name: "Cloud Architecture", proficiency: "Expert", description: "Design and deploy Azure/GCP infrastructure with VNets, App Services, and serverless functions", icon: "☁️" },
      { name: "AI System Design", proficiency: "Expert", description: "Build RAG pipelines, vector databases (Pinecone, Azure AI Search), and LLM orchestration with LangChain", icon: "🤖" },
      { name: "API & Backend", proficiency: "Expert", description: "Python/Django REST APIs with caching, rate-limiting, and database optimization for production scale", icon: "🔧" },
      { name: "Security & Data Privacy", proficiency: "Expert", description: "Implement VNet isolation, encryption, and compliance controls for sensitive legal data", icon: "🔒" },
    ],
    "Generative AI & LLMs": [
      { name: "OpenAI & Azure OpenAI", proficiency: "Expert", description: "Production LLM integration, prompt engineering, AI agents", icon: "🤖" },
      { name: "RAG Systems", proficiency: "Expert", description: "Vector embeddings, semantic search, retrieval pipelines", icon: "🔍" },
      { name: "Vertex AI & Fine-tuning", proficiency: "Advanced", description: "Model training, API-based fine-tuning, 82%→87% accuracy", icon: "📈" },
      { name: "Vector Databases", proficiency: "Advanced", description: "Pinecone, Azure AI Search, embeddings storage", icon: "🗄️" },
      { name: "LangChain & LangGraph", proficiency: "Advanced", description: "AI workflow orchestration, multi-step agents", icon: "⛓️" },
    ],
    "Backend & APIs": [
      { name: "Python/Django", proficiency: "Expert", description: "REST APIs, ORM, 30% performance optimization", icon: "🐍" },
      { name: "Azure Functions", proficiency: "Advanced", description: "Durable Functions, serverless workflows", icon: "⚡" },
      { name: "Node.js/Express", proficiency: "Advanced", description: "RESTful services, real-time SignalR integration", icon: "🟢" },
      { name: "API Optimization", proficiency: "Expert", description: "Caching, query tuning, rate-limiting", icon: "🚀" },
    ],
    "Cloud & Infrastructure": [
      { name: "Azure", proficiency: "Expert", description: "App Services, VNet, Azure SQL, AI Search, private endpoints", icon: "☁️" },
      { name: "Google Cloud", proficiency: "Advanced", description: "Compute Engine, Cloud Run, Vertex AI", icon: "🌐" },
      { name: "Docker & Kubernetes", proficiency: "Advanced", description: "Containerization, orchestration, production deployments", icon: "🐳" },
      { name: "Redis & Caching", proficiency: "Advanced", description: "Query caching, session management, performance", icon: "⚡" },
    ],
    "Frontend & Mobile": [
      { name: "Next.js/React", proficiency: "Expert", description: "SSR, Zustand state management, component architecture", icon: "⚛️" },
      { name: "TypeScript", proficiency: "Expert", description: "Type-safe applications, advanced patterns", icon: "📘" },
      { name: "React Native", proficiency: "Advanced", description: "iOS & Android apps published on App Store & Play Store", icon: "📱" },
      { name: "Real-time UI", proficiency: "Advanced", description: "Azure SignalR, live dashboard updates", icon: "🔄" },
    ]
  }

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case "Executive": return "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 border-amber-200 dark:border-amber-800"
      case "Expert": return "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/50 border-green-200 dark:border-green-800"
      case "Advanced": return "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-800"
      case "Proficient": return "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/50 border-purple-200 dark:border-purple-800"
      default: return "text-muted-foreground bg-muted border-border"
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSkills(prev => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.3 }
    )

    document.querySelectorAll('[data-skill]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="section-padding relative">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 overflow-hidden">
        <GridPattern
          width={60}
          height={60}
          x={-1}
          y={-1}
          className="fill-muted/20 stroke-muted/20 dark:fill-muted/10 dark:stroke-muted/10"
          squares={[
            [2, 3],
            [4, 6],
            [8, 2],
            [12, 8],
            [15, 4],
            [18, 12],
            [22, 6],
            [25, 10],
          ]}
        />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            👨‍💻 About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Building <span className="gradient-text">Innovative Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Startup CTO with 4+ years of experience building LLM-powered legal-tech products at LegiSimple/Trails,
            from GPT-based research to production RAG systems. I architect secure Azure/GCP backends, fine-tune AI models,
            and ship MVPs that transform complex workflows into intuitive software law firms actually use.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <div className="space-y-6">
            <Card className="interactive-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  My Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  My journey began in 2020 at HCL Technologies in India, building RESTful APIs and optimizing
                  databases. After earning my Master's in Applied Computer Science from Concordia University
                  (2022-2024), I joined the startup world as Chief Technology Officer.
                </p>
                <p>
                  At <span className="text-primary font-semibold">LegiSimple</span>, I own the technical roadmap
                  and architecture decisions for an AI-native legal-tech startup. I've led 4 product pivots—from
                  GPT-based legal research to Canadian/US case law search to workflow automation—shipping MVPs at
                  each stage and validating them directly with lawyers.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">🚀 Startup CTO</Badge>
                  <Badge variant="secondary">🤖 LLM Engineering</Badge>
                  <Badge variant="secondary">📊 RAG Systems</Badge>
                  <Badge variant="secondary">⚡ MVP Velocity</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="interactive-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Impact & Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "RAG-Based Legal Research",
                      description: "Built GPT-powered semantic search across Canadian & US case law using embeddings, vector search, and Vertex AI fine-tuning (1K→5K records, 82%→87% accuracy)",
                      icon: "🔍",
                      badge: "AI/ML"
                    },
                    {
                      title: "Workflow Automation Impact",
                      description: "End-to-end sanction workflow platform cutting manual 3-hour process to 15-30 minutes with mobile apps, AI analysis, and real-time dashboards",
                      icon: "⚡",
                      badge: "Product Innovation"
                    },
                    {
                      title: "API Performance & Security",
                      description: "Optimized Python/Django APIs with caching and query tuning (30% faster), added rate-limiting and Cloudflare protection for sensitive legal data",
                      icon: "🚀",
                      badge: "Backend Excellence"
                    },
                    {
                      title: "Azure Architecture",
                      description: "Architected secure Azure backend (App Services, Durable Functions, Azure SQL) with Azure OpenAI + AI Search in private VNet",
                      icon: "☁️",
                      badge: "Cloud Infrastructure"
                    },
                  ].map((achievement, index) => (
                    <div key={index} className="p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-200 group">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl group-hover:scale-110 transition-transform">{achievement.icon}</span>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                            <Badge variant="secondary" className="text-xs">{achievement.badge}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills Grid */}
          <div className="space-y-8">
            {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
              <Card key={category} className="interactive-card">
                <CardHeader>
                  <CardTitle className="text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skills.map((skill, index) => (
                    <div 
                      key={skill.name}
                      id={`skill-${categoryIndex}-${index}`}
                      data-skill
                      className={`p-4 rounded-lg border transition-all duration-300 group ${
                        visibleSkills.has(`skill-${categoryIndex}-${index}`) 
                          ? 'translate-y-0 opacity-100' 
                          : 'translate-y-4 opacity-0'
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-xl group-hover:scale-110 transition-transform">{skill.icon}</span>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-foreground">{skill.name}</h4>
                            <Badge 
                              className={`text-xs font-medium border ${getProficiencyColor(skill.proficiency)}`}
                              variant="outline"
                            >
                              {skill.proficiency}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Enhanced Experience Section
function ExperienceSection() {
  const experiences = [
    {
      id: "legisimple",
      company: "LegiSimple/Trails",
      role: "Chief Technology Officer",
      location: "Montreal, Canada",
      period: "July 2024 - Present",
      type: "Full-time",
      achievements: [
        "Architected and shipped 4 complete product pivots in 18 months (GPT-based legal research → Canadian case law → US case law → workflow automation), building and deploying full-stack MVPs at each stage",
        "Built RAG-based legal research platform: Python NLP for document parsing, OpenAI embeddings for semantic search, Vertex AI fine-tuning (1K→5K training records boosted accuracy 82%→87%), automated retraining pipelines",
        "Developed end-to-end multi-channel workflow automation: React Native mobile apps (iOS/Android live in stores), Python/Django backend with Azure Durable Functions, real-time SignalR dashboards—reduced 3hr manual process to 15min",
        "Designed and deployed Azure infrastructure: App Services, Durable Functions orchestration, Azure SQL databases, Azure OpenAI + AI Search in private VNet for law-firm data security",
        "Optimized production APIs: implemented Redis caching, query optimization, connection pooling (30% faster responses), memory reduction (25%), rate-limiting, and Cloudflare DDoS protection",
        "Built Next.js/React frontends with TypeScript, Zustand state management, Azure SignalR real-time updates, and analytics instrumentation (Mixpanel, PostHog) to identify and fix UX friction points"
      ],
      technologies: ["Python", "Django", "Azure", "Azure OpenAI", "Vertex AI", "Next.js", "React", "Zustand", "SignalR", "Azure SQL", "Pinecone", "LangChain"],
      logo: "⚖️"
    },
    {
      id: "hcl",
      company: "HCL Technologies",
      role: "Software Engineer",
      location: "Hyderabad, India",
      period: "Oct 2020 - Jan 2022",
      type: "Full-time",
      achievements: [
        "Developed and deployed RESTful APIs powering internal React applications, optimized MySQL queries improving page-load by ~20% and reducing DB response times by ~10%",
        "Debugged complex production issues across frontend and backend services, created database-backed defect catalog boosting QA effectiveness by ~40%",
        "Streamlined deployments for 5 web apps on Heroku, improving configuration and resource usage to cut hosting costs by ~15%"
      ],
      technologies: ["Node.js", "React", "RESTful APIs", "MySQL", "Heroku"],
      logo: "💻"
    }
  ]

  return (
    <section id="experience" className="section-padding bg-muted/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            💼 Professional Journey
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Where I've <span className="gradient-text">Made Impact</span>
          </h2>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={exp.id} className="interactive-card">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{exp.logo}</div>
                    <div>
                      <CardTitle className="text-xl">{exp.role}</CardTitle>
                      <CardDescription className="text-base">
                        <span className="text-primary font-semibold">{exp.company}</span> • {exp.location}
                      </CardDescription>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3 group">
                        <ChevronRight className="h-4 w-4 text-primary mt-0.5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Enhanced Projects Section
function ProjectsSection() {
  const projects = [
    {
      id: "sanction-workflow",
      title: "AI Sanction Workflow Automation",
      category: "Legal Tech Product",
      challenge: "Law firm partner faced 3-hour manual sanction process requiring field visits, document review, and coordination across multiple stakeholders—creating bottlenecks and compliance risks.",
      solution: "Built end-to-end workflow platform with React Native mobile apps for field capture, Azure Durable Functions orchestrating AI analysis via Azure OpenAI, and Next.js dashboard with SignalR for real-time updates and audit trails.",
      result: "Saved 12 paralegals 3 hours each per case—reduced process time from 3 hours to 15-30 minutes (83% faster), eliminated manual handoffs, and logged all actions for compliance audits.",
      technologies: ["Azure", "Python", "Durable Functions", "Azure OpenAI", "React Native", "Next.js", "SignalR"]
    },
    {
      id: "rag-legal-research",
      title: "RAG-Powered Legal Research Platform",
      category: "AI/ML Application",
      challenge: "Lawyers needed semantic search across 1,000+ Canadian & US case law documents, but keyword matching was insufficient and manual review cost hours per query.",
      solution: "Architected RAG pipeline with NLP document parsing, OpenAI embeddings stored in Pinecone/Azure AI Search, and Vertex AI fine-tuning loop fed by lawyer feedback—scaling to 5,000 records with automated retraining.",
      result: "Enabled instant case law retrieval for 50+ lawyers—improved accuracy from 82% to 87% through fine-tuning, enabled natural language queries, and cut research time from hours to seconds via semantic search.",
      technologies: ["OpenAI", "Vertex AI", "Python", "Vector Search", "Pinecone", "Azure AI Search", "NLP"]
    },
    {
      id: "mobile-apps",
      title: "Lychii Mobile Apps (iOS & Android)",
      category: "Mobile Development",
      challenge: "Field workers needed to capture complaints and deliver documents on-site, but web-only access limited mobility and created data-entry delays.",
      solution: "Built cross-platform React Native apps (published on App Store & Play Store) with offline-first architecture, Azure real-time sync, and push notifications for status updates—integrated with backend workflow APIs.",
      result: "Empowered 30+ field workers with mobile-first workflows—reduced data entry lag through offline capture, provided multi-channel access to legal documents, and enabled real-time case updates in the field.",
      technologies: ["React Native", "TypeScript", "Azure", "Real-time Sync", "Push Notifications"]
    }
  ]

  return (
    <section id="projects" className="section-padding relative">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 overflow-hidden">
        <GridPattern
          width={80}
          height={80}
          x={-1}
          y={-1}
          className="fill-primary/5 stroke-primary/10 dark:fill-primary/5 dark:stroke-primary/5"
          squares={[
            [1, 2],
            [3, 8],
            [6, 4],
            [10, 12],
            [14, 6],
            [17, 9],
            [20, 3],
            [24, 11],
          ]}
        />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            🚀 Featured Work
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Projects That <span className="gradient-text">Make a Difference</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills and passion for creating impactful solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.id} className="interactive-card group">
              <CardHeader>
                <div className="mb-2">
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors mb-4">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2 flex items-center gap-2">
                    <span className="text-red-500">●</span> Challenge
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.challenge}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2 flex items-center gap-2">
                    <span className="text-blue-500">●</span> Solution
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
                </div>

                <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-sm text-foreground mb-2 flex items-center gap-2">
                    <span className="text-green-500">✓</span> Result
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.result}</p>
                </div>

                <div className="flex flex-wrap gap-1 pt-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section
function ContactSection() {
  const handleContactSubmit = (type: string) => {
    switch (type) {
      case "email":
        window.location.href = "mailto:ashishjaddu@gmail.com"
        toast.success("Opening email client...")
        break
      case "linkedin":
        window.open("https://www.linkedin.com/in/ashishjaddu/", "_blank")
        toast.success("Opening LinkedIn...")
        break
      default:
        break
    }
  }

  return (
    <section id="contact" className="section-padding bg-muted/20 relative">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 overflow-hidden">
        <GridPattern
          width={50}
          height={50}
          x={-1}
          y={-1}
          className="fill-accent/10 stroke-accent/20 dark:fill-accent/5 dark:stroke-accent/10"
          squares={[
            [3, 2],
            [7, 5],
            [11, 3],
            [15, 8],
            [19, 4],
            [23, 9],
            [27, 6],
            [31, 2],
          ]}
        />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            💬 Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Whether you have a question 
            or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="interactive-card group cursor-pointer" onClick={() => handleContactSubmit("email")}>
              <CardContent className="p-8 text-center">
                <Mail className="h-10 w-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-muted-foreground">ashishjaddu@gmail.com</p>
              </CardContent>
            </Card>

            <Card className="interactive-card group cursor-pointer" onClick={() => handleContactSubmit("linkedin")}>
              <CardContent className="p-8 text-center">
                <Linkedin className="h-10 w-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg mb-2">LinkedIn</h3>
                <p className="text-muted-foreground">Connect with me</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              onClick={() => handleContactSubmit("email")}
              className="btn-primary"
            >
              <Mail className="h-5 w-5 mr-2" />
              Start a Conversation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Main Portfolio Component
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "contact"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      <EnhancedNavigation activeSection={activeSection} />
      
      <main id="main-content">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="border-t py-8 bg-background/50 backdrop-blur-sm">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © 2025 Ashish Reddy Jaddu. CTO @ LegiSimple. Built with Next.js, React & Tailwind CSS.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://github.com/ashishreddy2411" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://www.linkedin.com/in/ashishjaddu/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
