import type { Project } from "@/types"

export const projects: Project[] = [
  {
    title: "SpotPark - Smart Parking Marketplace",
    description: "Mobile-first platform for smart parking management in Bucharest",
    longDescription:
      "SpotPark is a mobile-first platform designed to make parking in Bucharest easier and more efficient. Drivers can quickly find and book available spots, while owners can generate revenue by listing their spaces. The application includes secure JWT authentication, a built-in digital wallet for managing payments, and real-time reservation tracking starting from the current time. On the backend, SpotPark is powered by ASP.NET Core and SQL Server, following clean architecture and SOLID principles to ensure scalability and maintainability. The frontend is built with React Native, delivering a seamless mobile experience.",
    tech: ["ASP.NET Core Web API", "C#", "React Native", "SQL Server", "Entity Framework", "AutoMapper", "Stripe","Google OAuth","JWT Auth","Service-Repository Pattern","Wallet System"],
    github: "https://github.com/MihaiAlexandruF/SpotParkAPI",
    live: "#",
    image: "/projects/screenshots/spotpark/preview.jpg",
    video: "/projects/videos/spotpark-demo.mp4",
    featured: true,
  },
  {
    title: "Real Estate Platform – Direct Owner Marketplace ",
    description: "Full-stack platform connecting property owners directly with buyers and tenants",
    longDescription:
      "Engineered a full-stack real estate platform that connects property owners directly with buyers and tenants, eliminating the need for real estate agents. Solves a real-world market inefficiency by streamlining property discovery, communication, and transaction workflows. Built with Next.js for a fast, SEO-optimized frontend and Java Spring Boot with PostgreSQL for a scalable, secure backend. Features include advanced property search with filters, map-based browsing, zone-specific navigation, promoted listings, and metro proximity tracking. Implemented modular architecture, role-based authentication, image uploads, and GDPR-compliant data handling.",
    tech: ["Spring Boot", "Java", "Next.js", "PostgreSQL", "flyway", "lombok"],
    github: "https://github.com/MihaiAlexandruF/real-estate-platform",
    live: "#",
    image: "/projects/screenshots/realestate/preview.jpg",
    featured: true,
  },
  {
    title: "Student – Professor Dissertation Portal",
    description: "Web platform for managing dissertation workflows between students and professors",
    longDescription:
      "A web platform where students can choose supervisors, submit dissertation chapters, receive feedback, and track revisions. Professors can review documents, provide comments, and manage meeting schedules with their students — all in one streamlined workflow. Built with React and TypeScript for the frontend, using Supabase for authentication and database management.",
    tech: ["React", "TypeScript", "Supabase Auth", "Vite", "TailWind CSS"],
    github: "https://github.com/MihaiAlexandruF/dissertation-platform",
    live: "#",
    image: "/projects/screenshots/dissertation-platform/preview.jpg",
    featured: false,
  },
  {
    title: "HR Management App",
    description: "Desktop application for managing employee records and HR operations",
    longDescription:
      "Desktop application for managing employee records and HR operations. Allows viewing total, active, and inactive staff, adding new employees, tracking salaries, and handling key HR tasks like contract status and meeting notes — all in an intuitive Windows Forms interface. Built with C# and Windows Forms for a native desktop experience.",
    tech: ["C#", "Windows Forms", ".NET Framework", "SQL Server", "Entity Framework"],
    github: "https://github.com/MihaiAlexandruF/hr-management-app",
    live: "#",
    image: "/projects/screenshots/HR/preview.jpg",
    featured: false,
  },
]
