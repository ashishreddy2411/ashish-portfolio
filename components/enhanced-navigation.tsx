"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, Home, User, Briefcase, FolderOpen, Mail, Github, Linkedin, ExternalLink } from "lucide-react"

interface NavigationProps {
  activeSection?: string
}

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "contact", label: "Contact", icon: Mail },
]

const socialLinks = [
  { name: "GitHub", url: "https://github.com/ashishreddy2411", icon: Github },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/ashishjaddu/", icon: Linkedin },
  { name: "Resume", url: "/ashish-reddy-jaddu-resume.pdf", icon: ExternalLink },
]

export function EnhancedNavigation({ activeSection = "home" }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        const navHeight = 80
        const elementPosition = element.offsetTop - navHeight
        window.scrollTo({ top: elementPosition, behavior: "smooth" })
      }
    }
    setIsOpen(false)
  }

  if (!mounted) return null

  return (
    <>
      {/* Skip to main content - accessibility */}
      <a 
        href="#main-content" 
        className="skip-link"
        onFocus={(e) => e.target.scrollIntoView()}
      >
        Skip to main content
      </a>

      {/* Main Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "glass-effect shadow-lg py-2" 
            : "bg-transparent py-4"
        }`}
        role="banner"
        aria-label="Main navigation"
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("home")}
              className="font-mono text-lg font-bold gradient-text hover:scale-105 transition-transform duration-200"
              aria-label="Go to home section"
            >
              <span className="text-blue-400">const</span> ashish = <span className="text-green-400">"developer"</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`nav-link group flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-200 ${
                      activeSection === item.id 
                        ? "text-primary bg-primary/10" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    aria-label={`Go to ${item.label} section`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </button>
                )
              })}
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center gap-2">
              {/* Social Links - Desktop */}
              <div className="hidden lg:flex items-center gap-2 mr-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <Button
                      key={link.name}
                      variant="ghost"
                      size="sm"
                      asChild
                      className="hover:scale-110 transition-transform duration-200"
                    >
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.name}
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    </Button>
                  )
                })}
              </div>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="hover:scale-110 transition-transform duration-200"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>

              {/* Mobile Menu Trigger */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="md:hidden">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    aria-label="Open navigation menu"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent 
                  side="right" 
                  className="w-[300px] sm:w-[400px]"
                  aria-label="Navigation menu"
                >
                  <div className="flex flex-col h-full">
                    {/* Mobile Logo */}
                    <div className="font-mono text-lg font-bold gradient-text mb-8 mt-4">
                      <span className="text-blue-400">const</span> ashish = <span className="text-green-400">"developer"</span>
                    </div>

                    {/* Mobile Navigation Links */}
                    <div className="flex flex-col space-y-4 flex-1">
                      {navItems.map((item) => {
                        const Icon = item.icon
                        return (
                          <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-md text-left transition-all duration-200 ${
                              activeSection === item.id 
                                ? "text-primary bg-primary/10" 
                                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                            }`}
                            aria-label={`Go to ${item.label} section`}
                          >
                            <Icon className="h-5 w-5" />
                            <span className="font-medium">{item.label}</span>
                          </button>
                        )
                      })}
                    </div>

                    {/* Mobile Social Links */}
                    <div className="border-t pt-6 mt-6">
                      <p className="text-sm font-medium text-muted-foreground mb-3">Connect with me</p>
                      <div className="flex flex-col space-y-2">
                        {socialLinks.map((link) => {
                          const Icon = link.icon
                          return (
                            <a
                              key={link.name}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 px-4 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors duration-200"
                              onClick={() => setIsOpen(false)}
                            >
                              <Icon className="h-4 w-4" />
                              <span>{link.name}</span>
                            </a>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
} 