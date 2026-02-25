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
  Calendar, TrendingUp, User, GraduationCap
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
      { name: "Vertex AI", proficiency: "Advanced", description: "Model evaluation pipelines, ground truth dataset creation, retrieval precision measurement and improvement", icon: "📈" },
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
            Founding AI Engineer with 3+ years building production RAG systems, LLM pipelines, and AI-powered workflow automation at LegiSimple/Trails.
            I architect hybrid search systems with custom relevance metrics, build agentic orchestration pipelines,
            and ship full-stack products on Azure + GCP that real users rely on.
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
                  (2022-2024), I joined LegiSimple as a founding engineer at the ground floor.
                </p>
                <p>
                  At <span className="text-primary font-semibold">LegiSimple</span>, I led technical architecture
                  for an AI-native legal-tech startup over 20 months. Shipped 4 product pivots—from
                  GPT-based legal research to a hybrid RAG system over 120K+ case law documents to AI-powered
                  workflow automation—iterating directly with law-firm partners at each stage.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">🤖 RAG Systems</Badge>
                  <Badge variant="secondary">⚡ Agentic Pipelines</Badge>
                  <Badge variant="secondary">🔧 Backend Engineering</Badge>
                  <Badge variant="secondary">🚀 Startup Velocity</Badge>
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
                      title: "Production RAG System",
                      description: "Built hybrid RAG pipeline over 120K+ legal cases: section-aware parsing, agentic chunking, custom relevance metric (cosine + citation count + recency + shepherdization). Ground truth eval improved from 82% → 87% retrieval precision. Sub-second latency.",
                      icon: "🔍",
                      badge: "AI/LLM Systems"
                    },
                    {
                      title: "Agentic Orchestration",
                      description: "Designed multi-agent system with an orchestrator coordinating specialized agents: case retrieval, citation validation, and overturned-case detection (shepherdization). Integrated guardrails to catch hallucinated citations.",
                      icon: "🤖",
                      badge: "AI Architecture"
                    },
                    {
                      title: "Workflow Automation Impact",
                      description: "End-to-end HR sanctions platform: Azure Durable Functions orchestrator gathers employee history + handbook + labor regulations, AI recommends action level, human-in-the-loop HR approval, auto-generates compliant letters. 3 hours → 15 minutes.",
                      icon: "⚡",
                      badge: "Product Engineering"
                    },
                    {
                      title: "Backend Performance & Security",
                      description: "Python/Django APIs optimized with Redis caching + query tuning (30% faster). Azure OpenAI + AI Search in private VNet. Cloudflare WAF protection for sensitive law-firm data. 99.9% uptime.",
                      icon: "🚀",
                      badge: "Backend Excellence"
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
      company: "LegiSimple / Trails Legal",
      role: "Founding Engineer",
      location: "Montreal, Canada",
      period: "July 2024 – Feb 2026",
      type: "Full-time",
      achievements: [
        "Shipped 4 product pivots in 20 months (GPT legal research → Canadian case law → US case law → workflow automation), owning architecture and delivery end-to-end across each stage",
        "Built hybrid RAG pipeline over 120K+ legal cases: section-aware parsing, agentic chunking for complex legal sections (citations, statutes, precedence), semantic chunking for simpler sections, custom relevance metric (cosine similarity + citation count + recency + quote level + shepherdization). Retrieval precision improved from 82% → 87%",
        "Designed agentic orchestration system: orchestrator coordinating specialized agents for case retrieval, citation validation, and overturned-case detection. Integrated guardrails to catch hallucinated citations against the database",
        "Built HR sanctions workflow automation: Azure Durable Functions orchestrator gathers employee history, company handbook, and labor regulations; AI recommends action level; human-in-the-loop HR approval; auto-generates legally compliant letters. Reduced 3-hour manual process to 15 minutes",
        "Architected Azure backend: App Services, Durable Functions, Azure SQL, Azure OpenAI + AI Search in private VNet with Cloudflare WAF — 99.9% uptime",
        "Optimized Python/Django APIs with Redis caching and SQL query tuning (30% faster responses, 25% memory reduction); built Next.js/React frontends with SignalR real-time updates and Mixpanel/PostHog analytics"
      ],
      technologies: ["Python", "Django", "LangChain", "Azure OpenAI", "Azure Durable Functions", "Pinecone", "Azure AI Search", "Next.js", "React", "React Native", "Vertex AI", "Redis", "Azure SQL"],
      logo: "⚖️"
    },
    {
      id: "keywords",
      company: "Keywords Studios",
      role: "Functional QA Engineer",
      location: "Montreal, Canada",
      period: "Jun 2023 – Jul 2024",
      type: "Full-time",
      achievements: [
        "Performed API testing and backend validation across multiple software products, verifying RESTful endpoint behavior, data integrity, and error handling",
        "Conducted AI/ML feature testing for AI-powered products, validating LLM-generated content quality, edge case handling, and response consistency",
        "Executed regression, smoke, integration, and exploratory testing across web applications, mobile apps, and gaming platforms — documented 200+ bugs with detailed reproduction steps",
        "Collaborated with development teams using Jira and Bugzilla to prioritize defects and ensure timely resolution before production releases"
      ],
      technologies: ["API Testing", "Jira", "Bugzilla", "Regression Testing", "AI/ML Testing", "QA"],
      logo: "🎮"
    },
    {
      id: "hcl",
      company: "HCL Technologies",
      role: "Software Engineer",
      location: "Hyderabad, India",
      period: "Oct 2020 – Jan 2022",
      type: "Full-time",
      achievements: [
        "Developed and deployed RESTful APIs powering internal React applications; optimized MySQL queries improving page-load performance by ~20% and reducing DB response times by ~10%",
        "Debugged production issues across frontend and backend services; built database-backed defect catalog boosting QA effectiveness by ~40%",
        "Managed deployments for 5 web applications on Heroku, improving configuration and resource usage to cut hosting costs by ~15%"
      ],
      technologies: ["Node.js", "Python", "React", "RESTful APIs", "MySQL", "Heroku", "CI/CD"],
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
      id: "rag-legal-research",
      title: "Hybrid RAG Legal Research System",
      category: "AI / Backend",
      challenge: "Law firm partners needed accurate semantic search across 120,000+ NY case law documents. Keyword search missed relevant precedents, and manual research took hours per query.",
      solution: "Architected a hybrid RAG pipeline: section-aware document parsing, agentic chunking for complex legal sections (preserving citations, statutes, precedence signals), and semantic chunking for simpler sections. Built a custom relevance metric combining cosine similarity with citation count, recency, quote level, and shepherdization (whether a case is still good law). Added an agentic orchestration layer with specialized agents for case retrieval, citation validation, and overturned-case detection. Guardrails cross-check LLM-generated citations against the database.",
      result: "85–90% retrieval relevance in production with sub-second latency. Ground truth evaluation improved from 82% to 87% through chunking strategy refinement and relevance metric tuning. Actively used in production for legal research.",
      technologies: ["Python", "LangChain", "OpenAI", "Pinecone", "Azure AI Search", "Vertex AI", "Django", "PostgreSQL"]
    },
    {
      id: "sanction-workflow",
      title: "HR Sanctions Workflow Automation",
      category: "Workflow Automation / Full-Stack",
      challenge: "An enterprise client's HR team handled employee disciplinary cases entirely manually: supervisors wrote warning letters inconsistently, with no compliance checks and no audit trail—creating compliance risk and 3-hour processing times.",
      solution: "Built an end-to-end workflow platform: supervisors log incidents via a React Native mobile app, triggering an Azure Durable Functions orchestrator. The orchestrator gathers employee incident history, company handbook, and government labor regulations, then uses Azure OpenAI to recommend an action level (verbal warning, written warning, suspension, or termination). HR reviews and approves or overrides. System auto-generates a legally compliant letter and logs every action for audit trails.",
      result: "Reduced 3-hour manual process to 15–30 minutes. Eliminated inconsistent letters through AI-assisted generation. Full audit trail created for every case. Human-in-the-loop design kept HR in control of every final decision.",
      technologies: ["Azure Durable Functions", "Azure OpenAI", "Python", "Django", "React Native", "Next.js", "Azure SignalR", "Azure SQL"]
    },
    {
      id: "mobile-apps",
      title: "Mobile Apps (iOS & Android)",
      category: "Mobile / React Native",
      challenge: "Field workers needed to capture incident reports and receive case documents on-site. Web-only access created delays and prevented real-time updates in the field.",
      solution: "Built cross-platform React Native apps (published on iOS App Store and Google Play Store) integrated with the workflow automation backend. Push notifications for status updates, real-time sync via Azure SignalR, and seamless handoff to the Next.js dashboard for HR reviewers.",
      result: "Enabled on-site incident capture and real-time document delivery for field workers. Provided the multi-channel access layer that made the HR sanctions workflow end-to-end.",
      technologies: ["React Native", "TypeScript", "Azure SignalR", "Push Notifications", "Django REST API"]
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

                <div className="flex items-center gap-2 pt-1 text-xs text-muted-foreground border-t border-border/50 mt-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 flex-shrink-0" />
                  Private codebase — happy to walk through architecture in detail
                </div>
              </CardContent>

            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Education Section
function EducationSection() {
  return (
    <section id="education" className="section-padding bg-muted/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            🎓 Education
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Academic <span className="gradient-text">Foundation</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="interactive-card">
            <CardHeader>
              <div className="flex items-start gap-4">
                <GraduationCap className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <CardTitle className="text-xl">Master of Science — Applied Computer Science</CardTitle>
                  <CardDescription className="text-base mt-1">
                    <span className="text-primary font-semibold">Concordia University</span> • Montreal, Canada
                  </CardDescription>
                  <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Sept 2022 – Apr 2024</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {[
                  "Advanced Programming Practices",
                  "Applied Artificial Intelligence",
                  "Distributed System Design",
                  "Data Communication & Networking",
                  "Algorithm Design & Analysis",
                ].map((course) => (
                  <Badge key={course} variant="secondary" className="text-xs">
                    {course}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="interactive-card">
            <CardHeader>
              <div className="flex items-start gap-4">
                <GraduationCap className="h-8 w-8 text-muted-foreground mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <CardTitle className="text-xl">Bachelor of Technology — Computer Science</CardTitle>
                  <CardDescription className="text-base mt-1">
                    <span className="text-primary font-semibold">Geetanjali College of Engineering and Technology</span> • Hyderabad, India
                  </CardDescription>
                  <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>June 2016 – Sept 2020</span>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
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
            I'm open to Backend, AI Engineering, and Full-Stack roles — Toronto-based and available for remote work too.
            Reach out directly and I'll get back to you.
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
      const sections = ["home", "about", "experience", "education", "projects", "contact"]
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
        <EducationSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="border-t py-8 bg-background/50 backdrop-blur-sm">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © 2026 Ashish Reddy Jaddu · Founding AI Engineer · Toronto, Canada · Open to new opportunities
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
