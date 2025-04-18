"use client"

import { useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function About() {
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

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "UI/UX Design",
    "Figma",
    "Git",
    "Responsive Design",
  ]

  const experiences = [
    "5+ years of frontend development",
    "Worked with 20+ clients",
    "Delivered 30+ successful projects",
    "Expertise in modern frameworks",
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 bg-muted/30 section-animate">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm">
            About Me
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Journey & Expertise</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Passionate about creating exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-none shadow-none bg-transparent">
                <CardContent className="p-6 bg-card/50 backdrop-blur-sm border border-border/40 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Education</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">Bachelor of Computer Science</p>
                      <p className="text-sm text-muted-foreground">University of Technology, 2015-2019</p>
                    </div>
                    <div>
                      <p className="font-medium">Web Development Certification</p>
                      <p className="text-sm text-muted-foreground">Frontend Masters, 2020</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-none bg-transparent">
                <CardContent className="p-6 bg-card/50 backdrop-blur-sm border border-border/40 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Experience</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">Senior Frontend Developer</p>
                      <p className="text-sm text-muted-foreground">TechCorp Inc., 2021-Present</p>
                    </div>
                    <div>
                      <p className="font-medium">UI/UX Designer</p>
                      <p className="text-sm text-muted-foreground">Design Studio, 2019-2021</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-none shadow-none bg-transparent">
              <CardContent className="p-6 bg-card/50 backdrop-blur-sm border border-border/40 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Who I Am</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm a passionate frontend developer with 5 years of experience creating modern web applications. I
                    specialize in building responsive, accessible, and performant user interfaces that deliver
                    exceptional user experiences.
                  </p>
                  <p>
                    My journey in web development started when I built my first website in college. Since then, I've
                    worked with startups and established companies to deliver digital solutions that help businesses
                    grow and connect with their audiences.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div>
              <h3 className="text-xl font-bold mb-4">My Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-sm py-1 px-3 rounded-full bg-background">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative mx-auto">
              <div className="relative rounded-3xl overflow-hidden w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl transform rotate-3 -z-10"></div>
                <div className="absolute inset-0 bg-card border border-border rounded-3xl shadow-xl transform -rotate-3 overflow-hidden -z-10"></div>
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Profile"
                  width={400}
                  height={400}
                  className="object-cover rounded-3xl"
                />
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border/40 rounded-xl p-3"
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{exp}</span>
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

