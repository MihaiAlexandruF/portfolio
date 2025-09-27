import type React from "react"
import { Code2, Terminal, Globe, Sparkles, Zap } from "lucide-react"
import { technologies } from "@/data/technologies"
import type { Technology } from "@/types"

interface TechCategoryProps {
  title: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  techs: Technology[]
  gradient: string
}

const TechCategory = ({ title, icon: Icon, color, techs, gradient }: TechCategoryProps) => (
  <div className="space-y-6">
    <div className="text-center">
      <div
        className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}
      >
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h3 className={`text-xl font-bold mb-4 text-${color}`}>{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {techs?.map((tech) => (
        <div
          key={tech.name}
          className="group px-4 py-2 bg-background/50 rounded-full border tech-border hover:scale-105 hover:shadow-lg transition-all duration-300 text-center backdrop-blur-sm flex-shrink-0"
        >
          <div className="text-sm font-medium text-foreground tech-item whitespace-nowrap">
            {tech.name}
          </div>
        </div>
      )) || <div>No technologies found</div>}
    </div>
  </div>
)

const specializations = [
  {
    icon: Sparkles,
    title: "Frontend Development",
    description: "Responsive UI/UX with React, Next.js and modern CSS frameworks",
    color: "purple-500",
  },
  {
    icon: Zap,
    title: "Backend Development",
    description: "RESTful APIs, authentication, and database integration",
    color: "primary",
  },
  {
    icon: Globe,
    title: "Full-Stack Integration",
    description: "Connecting frontend and backend for seamless user experiences",
    color: "orange-500",
  },
]

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Technical
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent matrix-glow">
              Skills
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full-stack development skills covering frontend, backend, databases and development tools
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          <TechCategory
            title="Frontend"
            icon={Sparkles}
            color="purple-500"
            techs={technologies.frontend}
            gradient="from-purple-500 to-pink-500"
          />
          <TechCategory
            title="Backend"
            icon={Code2}
            color="primary"
            techs={technologies.backend}
            gradient="from-primary to-green-500"
          />
          <TechCategory
            title="Databases"
            icon={Terminal}
            color="blue-500"
            techs={technologies.databases}
            gradient="from-blue-500 to-purple-500"
          />
          <TechCategory
            title="Tools & Others"
            icon={Globe}
            color="orange-500"
            techs={technologies.tools}
            gradient="from-orange-500 to-red-500"
          />
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {specializations.map((spec) => (
            <div key={spec.title} className="text-center p-6 bg-background/30 rounded-2xl border tech-border">
              <div className={`w-12 h-12 bg-${spec.color}/20 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <spec.icon className={`h-6 w-6 text-${spec.color}`} />
              </div>
              <h4 className="font-bold text-lg mb-2">{spec.title}</h4>
              <p className="text-sm text-muted-foreground">{spec.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
