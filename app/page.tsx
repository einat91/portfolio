"use client"

import { useEffect } from "react"
import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Download,
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
        "A comprehensive analysis of Bitcoin price movements from 2015-2025 using real market data from investing.com. I performed extensive SQL data processing and transformation to clean and structure the cryptocurrency data, then created interactive Tableau dashboards showcasing price volatility, trend analysis, and market correlation patterns.",
      technologies: ["SQL", "Tableau", "Financial Analysis", "Time Series"],
      image: "/placeholder.svg?height=200&width=300&text=Bitcoin+Analysis",
      link: "https://public.tableau.com/app/profile/einat.ehrlich1896/viz/BitcoinHistoryChangeBetween2015-2025/Dashboard1",
      category: "Analytics",
      icon: Bitcoin,
    },
    {
      title: "Monthly User Activity Report",
      description:
        "Built a comprehensive user activity tracking system from the ground up, starting with database design and moving through Google Sheets integration to final Tableau visualization. I created custom SQL queries to analyze user engagement patterns, retention rates, and activity trends.",
      technologies: ["SQL", "Google Sheets", "Tableau", "Database Design"],
      image: "/placeholder.svg?height=200&width=300&text=User+Activity",
      link: "https://public.tableau.com/app/profile/einat.ehrlich1896/viz/MonthlyUserActivityReport/UserActivityReport",
      category: "Analytics",
      icon: Users,
    },
    {
      title: "Executive Business Review - E-commerce",
      description:
        "Conducted a comprehensive Year-End Performance Analysis for Dynamite Clothing, providing strategic recommendations based on thorough market research and data analysis. Using mock-up data combined with real market insights, I created detailed Excel models and executive presentations.",
      technologies: ["Excel", "PowerPoint", "Market Research", "Business Analysis"],
      image: "/placeholder.svg?height=200&width=300&text=Business+Review",
      link: "#",
      category: "Business Intelligence",
      icon: PresentationChart,
    },
    {
      title: "Cloud Costs Optimization",
      description:
        "Built a comprehensive cost optimization system for LLM token usage across customer and internal operations. Using SQL queries on log databases and Datadog integration for tenant identification, I created detailed Tableau dashboards that track token consumption patterns.",
      technologies: ["SQL", "Tableau", "Datadog", "Cloud Analytics", "Cost Optimization"],
      image: "/placeholder.svg?height=200&width=300&text=Cloud+Costs",
      link: "#",
      category: "Cloud Analytics",
      icon: Cloud,
    },
    {
      title: "Fraud Detection Rules Engine",
      description:
        "Developed sophisticated SQL-based fraud detection rules for a security company, analyzing patterns in user behavior, device fingerprinting, and transaction anomalies. I created multiple detection algorithms that identified suspicious activities with high precision.",
      technologies: ["SQL", "Fraud Detection", "Pattern Analysis", "Security"],
      image: "/placeholder.svg?height=200&width=300&text=Fraud+Detection",
      link: "#",
      category: "Security Analytics",
      icon: Shield,
    },
    {
      title: "Budget vs Actuals Dashboard",
      description:
        "As Operations Lead and Data Analyst reporting directly to the CEO, I identified the critical need to track actual costs against budgets in real-time. I created a comprehensive Power BI dashboard that automated budget tracking, variance analysis, and cost optimization recommendations.",
      technologies: ["Power BI", "Excel", "Financial Analysis"],
      image: "/placeholder.svg?height=200&width=300&text=Budget+Dashboard",
      link: "#",
      category: "Dashboard",
      icon: Calculator,
    },
    {
      title: "Sales Commissions Report",
      description:
        "Working at an insurtech startup, I developed an end-to-end solution to track sales commissions across multiple platforms. I built automated data flows using Make.com to seamlessly integrate Salesforce, Stripe, and Google Sheets.",
      technologies: ["Power BI", "Salesforce", "Stripe", "Google Sheets", "Make.com"],
      image: "/placeholder.svg?height=200&width=300&text=Sales+Commissions",
      link: "#",
      category: "Dashboard",
      icon: TrendingUp,
    },
    {
      title: "World Football Results Analysis",
      description:
        "Inspired by my passion for English football and the excitement of the World Cup, I created an interactive dashboard analyzing international football results. This project combines my love for the beautiful game with data storytelling.",
      technologies: ["Excel", "Power BI", "Data Visualization"],
      image: "/placeholder.svg?height=200&width=300&text=Football+Analysis",
      link: "#",
      category: "Dashboard",
      icon: Trophy,
    },
    {
      title: "Bike Store Database Management",
      description:
        "This project was part of the transformative 'She Codes' program - an amazing initiative designed to help women develop their careers in tech. I built a comprehensive database management system using Excel and SQL.",
      technologies: ["Excel", "SQL", "Database Design"],
      image: "/placeholder.svg?height=200&width=300&text=Bike+Store+DB",
      link: "#",
      category: "Database",
      icon: TrendingUp,
    },
    {
      title: "Berry - Pet Care Tracker",
      description:
        "A personal project born from adopting my sweet dog Berry! I built a full-stack web application using Firebase and Google authentication to help families track their pet's daily activities. Sometimes the best projects come from solving your own problems! 🐕",
      technologies: ["Firebase", "Google Auth", "Vercel", "AI Integration", "React"],
      image: "/placeholder.svg?height=200&width=300&text=Berry+Pet+Tracker",
      link: "#",
      githubLink: "#",
      category: "Bonus Personal Project",
      icon: Heart,
      personal: true,
    },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F0EBE3" }}>
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 fade-in-up">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">EINAT EHRLICH</h1>
            <p className="text-lg text-slate-600 font-medium">Data Analyst | Project Management | Operations</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 text-sm text-slate-600">
            <a
              href="https://linkedin.com/in/einat-ehrlich"
              className="flex items-center gap-2 hover:text-stone-600 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>@einat-ehrlich</span>
            </a>
            <a
              href="mailto:einat91@gmail.com"
              className="flex items-center gap-2 hover:text-stone-600 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>einat91@gmail.com</span>
            </a>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+972 (0) 54-2400129</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Tel Aviv, Israel</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hello Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center fade-in-up">Hello :)</h2>
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 fade-in-up stagger-1">
            <CardContent className="p-8">
              <p className="text-slate-700 leading-relaxed text-base mb-6">
                I'm a passionate data analyst who thrives on transforming complex data into actionable insights that
                drive real business impact. With a unique blend of analytical expertise and operational leadership, I've
                spent years building systems, optimizing workflows, and creating data-driven solutions that help
                organizations make smarter decisions.
              </p>
              <p className="text-slate-700 leading-relaxed text-base mb-8">
                From developing fraud detection algorithms to creating executive dashboards that influence strategic
                decisions, I love the challenge of finding patterns in data and translating them into stories that
                matter. Let's connect and explore how data can transform your business!
              </p>
              <div className="flex justify-center">
                <Button className="bg-stone-700 hover:bg-stone-800 text-white px-6 py-2">
                  <Download className="w-4 h-4 mr-2" />
                  View CV
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center fade-in-up">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-500 bg-white/90 backdrop-blur-sm border-0 hover:-translate-y-1 fade-in-up stagger-${(index % 4) + 1}`}
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <div className="w-full h-48 bg-gradient-to-br from-stone-50 to-stone-100 flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="w-16 h-16 bg-stone-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                          <project.icon className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-slate-600 font-medium text-sm">[Screenshot Placeholder]</p>
                      </div>
                    </div>
                    <Badge
                      className={`absolute top-3 left-3 ${
                        project.personal ? "bg-pink-500 text-white" : "bg-white/90 text-slate-700"
                      }`}
                    >
                      {project.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-5">
                  <CardTitle className="text-lg mb-3 text-slate-800 group-hover:text-stone-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 mb-4 line-clamp-3 leading-relaxed text-sm">
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
                    {project.githubLink && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="group-hover:bg-slate-800 group-hover:text-white transition-colors bg-transparent"
                        asChild
                      >
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center fade-in-up">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Get in Touch</h2>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            Ready to turn your data into actionable insights? I'd love to hear about your next project and explore how
            we can work together to drive meaningful results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-stone-700 hover:bg-stone-800 text-white px-8 py-3" asChild>
              <a href="mailto:einat91@gmail.com">
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
                <Linkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-12">
        <div className="text-center text-slate-600">
          <p>&copy; 2025 Einat Ehrlich. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
