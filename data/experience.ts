export type Experience = {
  company: string
  role: string
  start: string
  end?: string
  location?: string
  bullets: string[]
  tech?: string[]
  logo?: string
}

export const experience: Experience[] = [
  {
    company: "Lucian Soft",
    role: "Web Development Intern",
    start: "01/2024",
    end: "05/2024",
  location: "Bucharest",
    bullets: [
      "Built and shipped web features with C#, Java, ASP.NET, Spring and JavaScript — owned tasks end-to-end.",
      "Collaborated via pair programming and code reviews to ensure production-ready releases.",
      "Integrated and tested RESTful APIs with Postman and documented integration steps.",
      "Improved frontend performance and maintainability through refactors and reduced render-blocking assets.",
      "Tuned SQL Server queries and recommended indexing that reduced latency and improved reliability."
    ],
    tech: ["C#", "ASP.NET","Java", "JavaScript", "HTML", "CSS", "SQL Server", "Git", "Postman", "Responsive Design"],
  }
]

export default experience
