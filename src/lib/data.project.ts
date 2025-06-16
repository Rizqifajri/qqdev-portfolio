export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  category: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Nortis Academy - DOT Intern Project",
    description: "Article platform with focus on readability, performance, and content management.",
    image: "./projects/nortis.png",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "",
    githubUrl: "",
    category: "Web App",
  },
  {
    id: 2,
    title: "Savvy - Financial Management Web App Promotion",
    description: "Financial Management Web App Promotion using React, Node.js, PostgreSQL, Express",
    image: "./projects/savvy.png",
    technologies: ["React", "Node.js", "PostgreSQL", "Express"],
    liveUrl: "",
    githubUrl: "",
    category: "Financial Management",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Clean and minimal portfolio website showcasing projects with smooth animations and responsive design.",
    image: "./projects/portfolio.png",
    technologies: ["Next.js", "Framer Motion", "MagicUI", "Tailwind", "Vercel"],
    liveUrl: "",
    githubUrl: "",
    category: "Portfolio",
  },
  {
    id: 4,
    title: "MINDES - Administration Digital Platform",
    description: "",
    image: "./projects/mindes.png",
    technologies: ["React", "API", "Chart.js", "CSS"],
    liveUrl: "",
    githubUrl: "",
    category: "Administration Platform",
  },
  {
    id: 5,
    title: "Prodemy - Blog Platform",
    description: "Simple blogging platform with focus on readability, performance, and content management.",
    image: "./projects/prodemy.png",
    technologies: ["Next.js", "Payload", "Tailwind", "Vercel"],
    liveUrl: "",
    githubUrl: "",
    category: "Content",
  },
  {
    id: 6,
    title: "UPZ Gunadarma - Web Company Profile",
    description: "Article platform with focus on readability, performance, and content management.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "Express", "Tailwind", "Frammer Motion"],
    liveUrl: "",
    githubUrl: "",
    category: "Content",
  },
]
