"use client"

import { useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  useEffect(() => {
    // Add scroll animation observer
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

    // Observe all elements with section-animate class
    document.querySelectorAll(".section-animate").forEach((section) => {
      observer.observe(section)
    })

    return () => {
      document.querySelectorAll(".section-animate").forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

