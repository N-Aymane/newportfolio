"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, Twitter, MapPin, Calendar } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle form submission
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
    // Show success message
    alert("Message sent! I'll get back to you soon.")
  }

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-32 bg-muted/30 section-animate">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm">
            Contact
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Let's Work Together</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Have a project in mind or want to chat? I'd love to hear from you!
          </p>
        </div>

        <Card className="border-none shadow-xl overflow-hidden bg-gradient-to-br from-primary/5 to-background">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl">Send Me a Message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="rounded-lg border-border/40 bg-background/50"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="rounded-lg border-border/40 bg-background/50"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      className="min-h-[120px] rounded-lg border-border/40 bg-background/50"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full rounded-lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </div>

            <div className="bg-primary/10 p-8 lg:p-12 flex flex-col justify-center space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 mt-1">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">hello@example.com</p>
                      <p className="text-muted-foreground">contact@example.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 mt-1">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">New York, NY</p>
                      <p className="text-muted-foreground">United States</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 mt-1">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Availability</p>
                      <p className="text-muted-foreground">Monday - Friday</p>
                      <p className="text-muted-foreground">9:00 AM - 6:00 PM EST</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors"
                  >
                    <Github className="h-5 w-5 text-primary" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-primary" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors"
                  >
                    <Twitter className="h-5 w-5 text-primary" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link
                    href="mailto:hello@example.com"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors"
                  >
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="sr-only">Email</span>
                  </Link>
                </div>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-border/40 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Let's Collaborate</h3>
                <p className="text-muted-foreground">
                  Currently available for freelance projects and full-time positions. Let's discuss how I can help bring
                  your ideas to life.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

