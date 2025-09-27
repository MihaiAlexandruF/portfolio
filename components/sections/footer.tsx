import { SocialLinks } from "@/components/ui/social-links"

export const Footer = () => {
  return (
    <footer className="py-8 border-t bg-background/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="text-muted-foreground">© 2025 Mihail Alexandru Fâță. Crafted with passion and code.</div>
            <div className="text-sm text-muted-foreground">Built with Next.js • TypeScript • Tailwind CSS</div>
          </div>
          <SocialLinks variant="footer" />
        </div>
      </div>
    </footer>
  )
}
