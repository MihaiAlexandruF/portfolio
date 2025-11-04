import { Button } from "@/components/ui/button"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { CodeSnippet } from "@/components/ui/code-snippet"
import { FloatingElements } from "@/components/ui/floating-elements"
import { Sparkles, ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import type { MousePosition } from "@/types"

interface HeroSectionProps {
  mousePosition: MousePosition
}

export const HeroSection = ({ mousePosition }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <AnimatedBackground mousePosition={mousePosition} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                Available for opportunities
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent matrix-glow">
                  Software Engineer
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
Software Engineer with a strong foundation in computer science, focused on building full-stack systems that solve real problems. I design and ship scalable APIs, reliable backend services, and polished mobile experiences. Experienced with ASP.NET Core, Java Spring Boot, React / React Native, and relational databases. Fast learner, team player, and passionate about clean architecture and measurable impact.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
              >
                <span>View My Work</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group bg-transparent" asChild>
                <a href="/documents/Mihail-Alexandru-CV.pdf" download>
                  <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Download CV
                </a>
              </Button>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform rounded-full" asChild>
                <a href="https://github.com/MihaiAlexandruF" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform rounded-full" asChild>
                <a href="https://www.linkedin.com/in/alexandru-mihail-f%C3%A2%C8%9B%C4%83-2a76b3267/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform rounded-full" asChild>
                <a href="mailto:mihai.4444@yahoo.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <CodeSnippet />
              <FloatingElements />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
