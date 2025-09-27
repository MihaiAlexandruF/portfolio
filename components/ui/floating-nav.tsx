"use client"

import { scrollToSection } from "@/lib/utils"

const navItems = ["About", "Skills", "Projects", "Contact"]

export const FloatingNav = () => {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-background/90 backdrop-blur-xl border tech-border rounded-full px-6 py-3 shadow-lg shadow-primary/20">
        <div className="flex items-center space-x-6">
          <div className="font-bold text-lg bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </div>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-3 py-1 rounded-full hover:bg-muted/50"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
