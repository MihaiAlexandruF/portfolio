import type { MousePosition } from "@/types"

interface AnimatedBackgroundProps {
  mousePosition: MousePosition
}

export const AnimatedBackground = ({ mousePosition }: AnimatedBackgroundProps) => {
  return (
    <div className="absolute inset-0 cyber-grid">
      <div className="absolute inset-0 matrix-bg" />
      <div
        className="absolute w-96 h-96 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-3xl transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
        }}
      />
    </div>
  )
}
