"use client"

import { FloatingNav } from "@/components/ui/floating-nav"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { MatrixTechSection } from "@/components/sections/matrix-tech-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/sections/footer"
import { useMousePosition } from "@/hooks/useMousePosition"

export default function DeveloperPortfolio() {
  const mousePosition = useMousePosition()

  return (
    <div className="min-h-screen transition-all duration-500">
      <FloatingNav />
      <HeroSection mousePosition={mousePosition} />
      <AboutSection />
      <MatrixTechSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
