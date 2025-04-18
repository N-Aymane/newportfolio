"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
          }
        })
      },
      { threshold: 0.1 },
    )

    const section = sectionRef.current
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A modern e-commerce platform built with Next.js and Stripe integration for seamless online shopping experiences.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "Stripe", "Tailwind CSS"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A productivity app that helps users organize tasks, set priorities, and track progress with a clean, intuitive interface.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Firebase", "Redux"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A responsive weather application that provides real-time forecasts, interactive maps, and location-based weather alerts.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["JavaScript", "Weather API", "Chart.js"],
      demoUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" ref={sectionRef} className="py-20 md:py-32 section-animate">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm">
            Portfolio
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Explore some of my recent work and creative solutions
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-16">
          <Card className="overflow-hidden border-none shadow-xl bg-gradient-to-br from-primary/5 to-background">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative h-64 lg:h-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Featured Project"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                  Featured Project
                </div>
                <CardTitle className="text-2xl mb-4">E-commerce Platform Pro</CardTitle>
                <CardDescription className="text-base mb-6">
                  A comprehensive e-commerce solution with advanced features including real-time inventory management,
                  customer analytics, and multi-currency support. Built with Next.js, TypeScript, and integrated with
                  multiple payment gateways.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Next.js</span>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">TypeScript</span>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Stripe</span>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">MongoDB</span>
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="rounded-full" asChild>
                    <Link href="#">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" className="rounded-full" asChild>
                    <Link href="#">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden group transition-all duration-300 hover:shadow-lg border-border/40 bg-card/50 backdrop-blur-sm hover:bg-card"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" className="rounded-full" asChild>
                  <Link href={project.githubUrl}>
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
                <Button size="sm" className="rounded-full" asChild>
                  <Link href={project.demoUrl}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

