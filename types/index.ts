export interface Technology {
  name: string
  icon: string
}

export interface TechnologyCategory {
  frontend: Technology[]
  backend: Technology[]
  databases: Technology[]
  tools: Technology[]
}

export interface Project {
  title: string
  description: string
  longDescription: string
  tech: string[]
  github: string
  live: string
  image: string
  video?: string
  featured: boolean
}

export interface MousePosition {
  x: number
  y: number
}
