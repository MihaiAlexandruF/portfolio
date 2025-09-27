import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { VideoModal } from "@/components/ui/video-modal"
import { Github, ExternalLink, Play } from "lucide-react"
import { projects } from "@/data/projects"
import type { Project } from "@/types"
import { useState } from "react"

interface FeaturedProjectProps {
  project: Project
  index: number
  onVideoOpen: (project: Project) => void
}

const FeaturedProject = ({ project, index, onVideoOpen }: FeaturedProjectProps) => (
  <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
    <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
      <div className="space-y-4">
        <Badge variant="secondary" className="w-fit">
          Featured Project
        </Badge>
        <h3 className="text-3xl font-bold">{project.title}</h3>
        <p className="text-lg text-muted-foreground leading-relaxed">{project.longDescription}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <Badge key={tech} variant="outline" className="bg-background/50">
            {tech}
          </Badge>
        ))}
      </div>

      <div className="flex gap-4">
        <Button 
          variant="outline" 
          className="group bg-transparent"
          asChild
        >
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
            View Code
          </a>
        </Button>
        {project.video && project.title.includes("SpotPark") ? (
          <Button 
            className="group bg-gradient-to-r from-primary to-purple-600"
            onClick={() => onVideoOpen(project)}
          >
            <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            Watch Demo
          </Button>
        ) : project.live !== "#" ? (
          <Button 
            className="group bg-gradient-to-r from-primary to-purple-600"
            asChild
          >
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Live Demo
            </a>
          </Button>
        ) : null}
      </div>
    </div>

    <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="relative w-full h-48 sm:h-64 md:h-80 object-cover object-center rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  </div>
)

interface ProjectCardProps {
  project: Project
  onVideoOpen: (project: Project) => void
}

const ProjectCard = ({ project, onVideoOpen }: ProjectCardProps) => (
  <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
    <div className="relative overflow-hidden">
      <img
        src={project.image || "/placeholder.svg"}
        alt={project.title}
        className="w-full h-48 sm:h-56 md:h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    <CardContent className="p-6">
      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.slice(0, 3).map((tech) => (
          <Badge key={tech} variant="secondary" className="text-xs">
            {tech}
          </Badge>
        ))}
        {project.tech.length > 3 && (
          <Badge variant="secondary" className="text-xs">
            +{project.tech.length - 3}
          </Badge>
        )}
      </div>
      <div className="flex gap-3">
        <Button 
          variant="outline" 
          size="sm" 
          className="flex-1 bg-transparent"
          asChild
        >
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            Code
          </a>
        </Button>
        {project.live !== "#" ? (
          <Button 
            size="sm" 
            className="flex-1"
            asChild
          >
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </a>
          </Button>
        ) : null}
      </div>
    </CardContent>
  </Card>
)

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  const handleVideoOpen = (project: Project) => {
    setSelectedProject(project)
    setIsVideoModalOpen(true)
  }

  const handleVideoClose = () => {
    setIsVideoModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent matrix-glow">
              Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my passion projects and technical experiments
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-16">
          {featuredProjects.map((project, index) => (
            <FeaturedProject key={project.title} project={project} index={index} onVideoOpen={handleVideoOpen} />
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {otherProjects.map((project) => (
            <ProjectCard key={project.title} project={project} onVideoOpen={handleVideoOpen} />
          ))}
        </div>

        {/* Additional Projects Section */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-8">
            <span className="text-muted-foreground">And</span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> More...</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4 bg-card/50 rounded-lg border hover:border-primary/50 hover:bg-card/70 transition-all duration-300">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-green-500">Android (Java)</span>
            </div>
            <h4 className="font-semibold mb-1">Cinema Booking</h4>
            <p className="text-sm text-muted-foreground">Seat selection & showtimes</p>
          </div>

          <div className="p-4 bg-card/50 rounded-lg border hover:border-primary/50 hover:bg-card/70 transition-all duration-300">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-sm font-medium text-yellow-500">Python & Selenium</span>
            </div>
            <h4 className="font-semibold mb-1">Real Estate Scraper</h4>
            <p className="text-sm text-muted-foreground">OLX & Storia automation</p>
          </div>

          <div className="p-4 bg-card/50 rounded-lg border hover:border-primary/50 hover:bg-card/70 transition-all duration-300">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-sm font-medium text-red-500">ESP32 (Embedded)</span>
            </div>
            <h4 className="font-semibold mb-1">Grade Monitor</h4>
            <p className="text-sm text-muted-foreground">LED & buzzer alerts</p>
          </div>

          <div className="p-4 bg-card/50 rounded-lg border hover:border-primary/50 hover:bg-card/70 transition-all duration-300">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
              <span className="text-sm font-medium text-cyan-500">Streamlit (Python)</span>
            </div>
            <h4 className="font-semibold mb-1">Titanic ML Analysis</h4>
            <p className="text-sm text-muted-foreground">Passenger survival prediction </p>
          </div>
        </div>

        {/* Video Modal */}
        {selectedProject && (
          <VideoModal
            isOpen={isVideoModalOpen}
            onClose={handleVideoClose}
            videoSrc={selectedProject.video || ''}
            title={selectedProject.title}
            posterSrc={selectedProject.image}
          />
        )}
      </div>
    </section>
  )
}
