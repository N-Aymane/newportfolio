"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          <span className="text-primary">Portfolio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </button>
        </nav>

        {/* Dark/Light Mode Toggle */}
        <div className="hidden md:block">
          <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container md:hidden py-4 pb-6 border-t">
          <nav className="flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contact
            </button>
            <div className="pt-2">
              <ModeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

