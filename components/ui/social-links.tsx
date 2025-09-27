import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SocialLinksProps {
  variant?: "default" | "footer"
  className?: string
}

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/MihaiAlexandruF",
    icon: Github,
    color: "hover:text-gray-400"
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/alexandru-mihail-f%C3%A2%C8%9B%C4%83-2a76b3267/",
    icon: Linkedin,
    color: "hover:text-blue-500"
  },
  {
    name: "Email",
    href: "mailto:mihai.4444@yahoo.com",
    icon: Mail,
    color: "hover:text-green-500"
  }
]

export const SocialLinks = ({ variant = "default", className = "" }: SocialLinksProps) => {
  if (variant === "footer") {
    return (
      <div className={`flex gap-6 ${className}`}>
        {socialLinks.map((link) => {
          const Icon = link.icon
          return (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-muted-foreground transition-colors ${link.color}`}
              aria-label={link.name}
            >
              <Icon className="h-5 w-5" />
            </a>
          )
        })}
      </div>
    )
  }

  return (
    <div className={`flex gap-4 ${className}`}>
      {socialLinks.map((link) => {
        const Icon = link.icon
        return (
          <Button
            key={link.name}
            variant="outline"
            size="sm"
            asChild
            className="group"
          >
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
              {link.name}
              <ExternalLink className="h-3 w-3 opacity-50" />
            </a>
          </Button>
        )
      })}
    </div>
  )
}