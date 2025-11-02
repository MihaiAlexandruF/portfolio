import React from "react"
import experience from "@/data/experience"
import { Briefcase, Check } from "lucide-react"

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-transparent to-primary/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-primary/10 rounded-full text-primary">
              <Briefcase className="h-6 w-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>

        <div className="space-y-6">
          {experience.map((exp) => (
            <article
              key={exp.company}
              className="relative overflow-hidden p-6 rounded-2xl shadow-md border border-gray-200/10 bg-transparent transition-transform hover:-translate-y-1"
            >
              <div className="md:flex md:justify-between md:items-start">
                <div className="md:flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold leading-tight">{exp.role}</h3>
                        <div className="text-sm md:text-base text-muted-foreground">@ {exp.company}</div>
                    </div>
                    {/* right-side stack: date above location for clearer alignment */}
                    <div className="hidden md:flex md:flex-col md:items-end md:gap-1">
                      <div className="text-sm text-muted-foreground">{exp.start} — {exp.end ?? "Present"}</div>
                      {/* location intentionally shown once below (keep layout clean) */}
                    </div>
                  </div>

                  <div className="mt-4">
                    <ul className="space-y-3">
                        {exp.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <span className="mt-1 text-primary"><Check className="h-5 w-5" /></span>
                            <span className="text-base md:text-lg">{b}</span>
                          </li>
                        ))}
                    </ul>
                  </div>

                  {/* Tech chips shown below bullets for all sizes to reduce top clutter */}
                  <div className="mt-4 flex flex-wrap gap-2">
                      {exp.tech?.map((t) => (
                        <span key={t} className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-md">{t}</span>
                      ))}
                  </div>
                </div>

                {/* Location on the right for larger screens */}
                <div className="hidden md:flex md:flex-col md:items-end md:gap-3 md:ml-6">
                  <div className="text-sm text-muted-foreground">{exp.location}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
