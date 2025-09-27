import { Button } from "@/components/ui/button"
import { SocialLinks } from "@/components/ui/social-links"
import { Mail, Download } from "lucide-react"

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Let’s build
              <span className="block bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                something that lasts.
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Available for roles where full-stack versatility, backend depth, and clean code are valued.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
              asChild
            >
              <a href="mailto:mihai.4444@yahoo.com?subject=Job Opportunity - Junior Fullstack Developer">
                <Mail className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                Get In Touch
              </a>
            </Button>
            <Button variant="outline" size="lg" className="group bg-transparent" asChild>
              <a href="/documents/Mihail-Alexandru-CV.pdf" download>
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download CV
              </a>
            </Button>
          </div>

          <div className="pt-8">
            <SocialLinks className="justify-center" />
          </div>
        </div>
      </div>
    </section>
  )
}
