import { GraduationCap, Zap, Globe,Telescope,Cpu } from "lucide-react"

const aboutFeatures = [
  {
    icon: GraduationCap,
    title: "Computer Science Student",
    description: "Currently pursuing a Master’s in Computer Science and Business, with coursework in software architecture, digital platforms, and enterprise systems.",
    color: "primary",
  },
  {
    icon: Zap,
    title: "Fast Learner",
    description: "Quickly adapt to new technologies and frameworks",
    color: "green-500",
  },
  {
    icon: Cpu,
    title: "Tech Enthusiast",
    description: "I’m passionate about exploring cutting-edge technologies and applying them in real-world projects.",
    color: "purple-500",
  },
]

const stats = [
  { value: "10+", label: "Projects Built", gradient: "from-primary/10 to-purple-500/10", color: "primary" },
  { value: "12+", label: "Technologies Used", gradient: "from-green-500/10 to-blue-500/10", color: "green-500" },
  { value: "4+", label: "Years Learning", gradient: "from-orange-500/10 to-red-500/10", color: "orange-500" },
  { value: "100%", label: "Eager to Learn", gradient: "from-purple-500/10 to-pink-500/10", color: "purple-500" },
]

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Building Solutions,
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent matrix-glow">
                Not Just Code


                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I build full-stack applications that do more than run—they solve problems. From backend logic to frontend finesse, I focus on writing clean, scalable code that delivers real-world impact.
              </p>
            </div>

            <div className="space-y-6">
              {aboutFeatures.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 bg-${feature.color}/10 rounded-xl flex items-center justify-center flex-shrink-0`}
                  >
                    <feature.icon className={`h-6 w-6 text-${feature.color}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                {stats.slice(0, 2).map((stat) => (
                  <div key={stat.label} className={`bg-gradient-to-br ${stat.gradient} p-6 rounded-2xl`}>
                    <div className={`text-3xl font-bold text-${stat.color} mb-2`}>{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="space-y-6 pt-12">
                {stats.slice(2).map((stat) => (
                  <div key={stat.label} className={`bg-gradient-to-br ${stat.gradient} p-6 rounded-2xl`}>
                    <div className={`text-3xl font-bold text-${stat.color} mb-2`}>{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
