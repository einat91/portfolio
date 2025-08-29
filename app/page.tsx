"use client"

import { useEffect } from "react"
import Image from "next/image"
import {
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Github,
  Bitcoin,
  Users,
  Presentation as PresentationChart,
  Cloud,
  Shield,
  Calculator,
  TrendingUp,
  Trophy,
  Heart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CVModal } from "@/components/cv-modal"

// Custom LinkedIn Icon Component
const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-linkedin-icon lucide-linkedin"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

// Custom Sparkles Icon Component
const SparklesIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="0.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`lucide lucide-sparkles-icon lucide-sparkles ${className}`}
  >
    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
    <path d="M20 2v4" />
    <path d="M22 4h-4" />
    <circle cx="4" cy="20" r="2" />
  </svg>
)

export default function Portfolio() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll(".fade-in-up")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "Bitcoin History Analysis",
      description:
        "An analysis of Bitcoin price movements from 2015-2025 using real market data from investing.com. I performed extensive SQL data processing and transformation to clean and structure the cryptocurrency data, then created interactive Tableau dashboards showcasing price volatility, trend analysis, and market correlation patterns.",
      technologies: ["SQL", "Tableau", "Financial Analysis"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bitcoin-a5Mwr36IsxRD8hBr8DAqECN6ZEHJAo.png",
      link: "https://public.tableau.com/app/profile/einat.ehrlich1896/viz/BitcoinHistoryChangeBetween2015-2025/Dashboard1",
      icon: Bitcoin,
    },
    {
      title: "Monthly User Activity Report",
      description:
        "Built and designed a user activity tracking report, from the database design, through Google Sheets integration to final Tableau visualization. I created custom SQL queries to analyze user engagement patterns and activity trends.",
      technologies: ["SQL", "Google Sheets", "Tableau"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Monthly%20User%20Activity%20Report-yS4n7BkBq3KomuxW9r63wuu8aRSPGd.png",
      link: "https://public.tableau.com/app/profile/einat.ehrlich1896/viz/MonthlyUserActivityReport/UserActivityReport",
      additionalLink: "portfolio/public/User_Activity_Project.pdf",
      icon: Users,
    },
    {
      title: "Executive Business Review for an E-commerce Company",
      description:
        "Conducted a comprehensive Year-End Performance Analysis for an e-commerce company, providing strategic recommendations based on thorough market research and data analysis.",
      technologies: ["Excel", "PowerPoint", "Market Research", "Business Analysis"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Executive%20Business%20Review-waAuiPSGv05QAZJ4wJ6WgVkCsS1g3a.png",
      link: "/Executive_Business_Review.pdf",
      icon: PresentationChart,
    },
    {
      title: "Cloud Costs Optimization",
      description:
        "Built a cost optimization report to optimize LLM token usage for both customer and internal operations. I used extensive SQL queries to clean log data and provide key visibility for tenant identification across log databases and Datadog reports. This data fed into a detailed Tableau dashboard that tracked token consumption patterns, enabling smarter resource management and significant cost savings.",
      technologies: ["SQL", "Tableau", "Datadog", "Cloud Analytics", "Cost Optimization"],
      image: "/placeholder.svg?height=200&width=300&text=Cloud+Costs",
      link: "#",
      icon: Cloud,
    },
    {
      title: "Fraud Detection Logic",
      description:
        "Created SQL-based fraud detection logic for a FinTech company. By analyzing patterns in user behavior, device fingerprinting, and transaction anomalies, this logic enabled the identification of suspicious activities.",
      technologies: ["SQL", "Fraud Detection", "Pattern Analysis", "Security"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fraud%20Detection%20Rules-d84CP3oyXrlP6IXXYM47neuqBV0T56.png",
      link: "/Fraud_Detection_Logic.pdf",
      icon: Shield,
    },
    {
      title: "Financial Performance Dashboard",
      description:
        "As Operations Lead and Data Analyst, I delivered an actionable Power BI dashboard to the CEO, addressing the critical need for real-time cost visibility. This system automated budget tracking and variance analysis, providing leadership with data-driven recommendations that led to significant cost optimization.",
      technologies: ["Power BI", "Excel", "Financial Analysis"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Budget-AjnY6Umv9OC0ENHa0sXJmhfeJMZW1h.png",
      link: "https://app.powerbi.com/view?r=eyJrIjoiOGM3NDkzYzktZTAzMS00ZGI1LTgyODYtZGM1M2Y2MTVhZTdiIiwidCI6IjAwZWIyMzU1LTRkYTItNDc0OS05ZTQ4LWE5OTAwYTFlYTMwMSIsImMiOjl9",
      icon: Calculator,
    },
    {
      title: "Sales Commissions Report",
      description:
        "At an InsurTech startup, I developed an end-to-end solution to automate and track sales commissions across multiple platforms. I built automated data flows using Make.com to seamlessly integrate Salesforce, Stripe, Google Sheets, and Power BI, which saved significant operational time and ensured accurate commission payouts.",
      technologies: ["Power BI", "Salesforce", "Stripe", "Google Sheets", "Make.com"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sales%20Commissions-qj3sJCAWQDHMD6QKZd9KZdUWoRTo5c.png",
      link: "https://app.powerbi.com/view?r=eyJrIjoiYjExYWJkMDgtNmIyOS00MWE5LWIxNmUtMmM4NjI3Mzk4OWI4IiwidCI6IjAwZWIyMzU1LTRkYTItNDc0OS05ZTQ4LWE5OTAwYTFlYTMwMSIsImMiOjl9",
      icon: TrendingUp,
    },
    {
      title: "World Football Results Analysis",
      description:
        "Inspired by my passion for English football and the excitement of the World Cup, I created an interactive dashboard analyzing international football results. This project combines my love for the game with data storytelling.",
      technologies: ["Excel", "Power BI", "Data Visualization"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/World%20Football-uLzynmPVb3jOAG7Q4vhALvy0Tl9vjA.png",
      link: "https://app.powerbi.com/view?r=eyJrIjoiMjVlZjI5OTEtNGJiYy00MDBhLWI5ZmEtN2QyNTllNzNhYjYzIiwidCI6IjAwZWIyMzU1LTRkYTItNDc0OS05ZTQ4LWE5OTAwYTFlYTMwMSIsImMiOjl9",
      icon: Trophy,
    },
    {
      title: "Bike Store Database Management",
      description:
        "This project was created as part of the Data Analysis course of SheCodes, an amazing initiative designed to help women develop their careers in tech. I designed the database using Draw.io, and built a database management system using Excel and SQL. Then, I summarized the project and its insights in a final Canva presentation.",
      technologies: ["Excel", "SQL", "Database Design"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bike%20Store-J17bOdhNhBKr5JRIfnLDvY1OAE9si4.png",
      link: "/Bike_Store_Management.zip",
      icon: TrendingUp,
    },
  ]

  const berryProject = {
    title: "Berry: Pet Care Tracker",
    description:
      "Motivated by the adoption of my sweet little dog, Berry, I built a web application to solve a common problem for pet owners: managing daily care. This tool helps track a pet's activities and ensures seamless communication among family members. The application was built using Vercel AI and Gemini, and it integrates a Firebase database with Google Authentication for secure, collaborative use.",
    technologies: ["Firebase", "Google Auth", "Vercel", "AI Integration", "React"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Berry-fdCDW9D1dU2DsyD9reumBMAAho31RL.png",
    link: "https://berry-come-home.vercel.app/",
    githubLink: "https://github.com/einat91/berry",
    icon: Heart,
    personal: true,
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F0EBE3" }}>
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 fade-in-up">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg border-2 border-white/50">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Einat-TovBCXMhVOTuH6MIZmMdbS0axDs7B9.jpeg"
                alt="Einat Ehrlich"
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2 baskervville">Einat Ehrlich</h1>
              <p className="text-lg text-slate-600 font-medium flex items-center gap-2 justify-center lg:justify-start mb-3">
                Data Analytics <SparklesIcon className="fill-current" /> Operations{" "}
                <SparklesIcon className="fill-current" /> Project Management
              </p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-slate-600">
                <a
                  href="https://linkedin.com/in/einat-ehrlich"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-stone-600 transition-colors"
                >
                  <LinkedinIcon />
                  <span>@einat-ehrlich</span>
                </a>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+972 (0) 54-2400129</span>
                </div>
                <a
                  href="mailto:einat91@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-stone-600 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>einat91@gmail.com</span>
                </a>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Tel Aviv, Israel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hello Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center fade-in-up baskervville">Hello :)</h2>
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 fade-in-up stagger-1">
            <CardContent className="p-8">
              <p className="text-slate-700 leading-relaxed text-base mb-6">
                I'm Einat 👋🏽 and I'm passionate about combining data and operations. With 6+ years of hands-on
                experience in dynamic early-stage startups, I know how to get things done and use data-driven decisions
                to achieve tangible results. I enjoy finding valuable patterns in data and translating them into
                actionable insights that fuel a team's success and growth. As a continuous self-learner, I'm always
                looking to explore new tools and methods. Let's connect!
              </p>
              <div className="flex justify-center">
                <CVModal />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center fade-in-up baskerville">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-500 bg-white/90 backdrop-blur-sm border-0 hover:-translate-y-1 fade-in-up stagger-${(index % 4) + 1}`}
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <div className="w-full h-48 bg-gradient-to-br from-stone-50 to-stone-100 border border-stone-200/50">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={300}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-5">
                  <CardTitle className="text-lg mb-3 text-slate-800 group-hover:text-stone-600 transition-colors baskerville">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 mb-4 leading-relaxed text-sm project-description">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs border-stone-200 text-stone-700 hover:bg-stone-50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group-hover:bg-stone-700 group-hover:text-white group-hover:border-stone-700 transition-all duration-300 bg-transparent"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </a>
                    </Button>
                    {project.additionalLink && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="group-hover:bg-stone-600 group-hover:text-white transition-colors bg-transparent"
                        asChild
                      >
                        <a href={project.additionalLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Berry Project - Centered */}
            <div className="md:col-span-2 lg:col-span-3 flex justify-center">
              <div className="w-full max-w-md">
                <Card className="group hover:shadow-xl transition-all duration-500 bg-white/90 backdrop-blur-sm border-0 hover:-translate-y-1 fade-in-up">
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <div className="w-full h-48 bg-gradient-to-br from-pink-50 to-rose-100 border border-pink-200/50">
                        <Image
                          src={berryProject.image || "/placeholder.svg"}
                          alt={berryProject.title}
                          width={300}
                          height={200}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-5">
                    <CardTitle className="text-lg mb-3 text-slate-800 group-hover:text-pink-600 transition-colors baskerville">
                      {berryProject.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 mb-4 leading-relaxed text-sm project-description">
                      {berryProject.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {berryProject.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs border-pink-200 text-pink-700 hover:bg-pink-50"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 group-hover:bg-pink-600 group-hover:text-white group-hover:border-pink-600 transition-all duration-300 bg-transparent"
                        asChild
                      >
                        <a href={berryProject.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View App
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="group-hover:bg-slate-800 group-hover:text-white transition-colors bg-transparent"
                        asChild
                      >
                        <a href={berryProject.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center fade-in-up">
          <h2 className="text-3xl font-bold text-slate-800 mb-6 baskerville">Get in Touch</h2>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            Want to hear more? Think I'm the right fit for your team? Let's talk :)
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-stone-700 hover:bg-stone-800 text-white px-8 py-3" asChild>
              <a href="mailto:einat91@gmail.com" target="_blank" rel="noopener noreferrer">
                <Mail className="w-5 h-5 mr-2" />
                Send me an email
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-stone-600 text-stone-600 hover:bg-stone-600 hover:text-white px-8 py-3 bg-transparent"
              asChild
            >
              <a href="https://linkedin.com/in/einat-ehrlich" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon />
                <span className="ml-2">Connect on LinkedIn</span>
              </a>
            </Button>
            <div className="phone-hover">
              <Button
                variant="outline"
                className="border-stone-600 text-stone-600 hover:bg-stone-600 hover:text-white px-8 py-3 bg-transparent cursor-default"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call me
              </Button>
              <div className="phone-tooltip">+972 (0) 54-2400129</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-12">
        <div className="text-center text-slate-600">
          <p className="text-xs">&copy; 2025 Einat Ehrlich. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
