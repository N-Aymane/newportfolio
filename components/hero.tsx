"use client"

import { ArrowDownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative flex items-center min-h-[calc(100vh-4rem)] py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up order-2 lg:order-1">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm">
              Frontend Developer
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Crafting <span className="text-primary">digital</span> experiences
            </h1>
            <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl">
              I design and build beautiful, interactive websites that help businesses grow and users thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToProjects} size="lg" className="rounded-full">
                View My Work
              </Button>
              <Button variant="outline" size="lg" className="rounded-full">
                Download Resume
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px] animate-slide-in-right order-1 lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl transform rotate-3"></div>
            <div className="absolute inset-0 bg-card border border-border rounded-3xl shadow-xl transform -rotate-3 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Hero Image"
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDownIcon className="h-6 w-6 text-primary" />
      </div>
    </section>
  )
}

