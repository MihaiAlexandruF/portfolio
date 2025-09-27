"use client"

import { useEffect, useState } from "react"
import { technologies } from "@/data/technologies"
import type { Technology } from "@/types"

const matrixChars =
  "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

interface RainDrop {
  id: number
  x: number
  chars: string[]
  speed: number
}

export const MatrixTechSection = () => {
  const [rainDrops, setRainDrops] = useState<RainDrop[]>([])
  const [visibleTechs, setVisibleTechs] = useState<string[]>([])

  useEffect(() => {
    // Create rain drops
    const drops = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      chars: Array.from({ length: 15 }, () => 
        matrixChars[Math.floor(Math.random() * matrixChars.length)]
      ),
      speed: Math.random() * 3 + 2,
    }))
    setRainDrops(drops)

    // Show all techs immediately (no animation)
    const allTechs = Object.values(technologies).flat().map(tech => tech.name)
    setVisibleTechs(allTechs)
  }, [])

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-background/80">
      {/* Digital Rain Background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {rainDrops.map((drop) => (
          <div
            key={drop.id}
            className="absolute top-0 text-primary/20 text-xs font-mono leading-tight"
            style={{
              left: `${drop.x}%`,
              animation: `matrix-rain ${drop.speed}s linear infinite`,
            }}
          >
            {drop.chars.map((char, i) => (
              <div 
                key={i} 
                className="opacity-40" 
                style={{ 
                  animationDelay: `${i * 0.1}s`,
                  filter: `hue-rotate(${i * 20}deg)`
                }}
              >
                {char}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-mono">
            <span className="text-primary matrix-glow">&gt; TECH_STACK</span>
            <span className="block text-secondary matrix-glow">.INITIALIZE()</span>
          </h2>
        </div>

        {/* Tech Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(technologies).map(([category, techs]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-xl font-bold text-primary uppercase tracking-wider border-b border-primary/30 pb-2 font-mono">
                [{category.toUpperCase()}]
              </h3>
              <div className="space-y-2">
                {techs.map((tech: Technology) => (
                  <div
                    key={tech.name}
                    className={`
                      p-3 bg-card/30 border border-primary/20 rounded-md backdrop-blur-sm
                      transition-all duration-700 font-mono text-sm
                      ${
                        visibleTechs.includes(tech.name)
                          ? "opacity-100 translate-x-0 text-primary matrix-glow border-primary/50"
                          : "opacity-0 translate-x-4 text-muted-foreground"
                      }
                      hover:bg-primary/10 hover:border-primary/70 hover:shadow-lg hover:shadow-primary/20
                      hover:scale-105 transform cursor-pointer
                    `}
                  >
                    <span className="text-secondary">&gt;</span> {tech.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Status Footer */}
        <div className="text-center mt-16">
          
          <div className="mt-4 flex justify-center items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes matrix-rain {
          0% {
            transform: translateY(-100vh);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  )
}