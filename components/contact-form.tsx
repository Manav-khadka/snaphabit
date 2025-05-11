"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/hooks/use-toast"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const form = formRef.current

    if (!form) return

    const tl = gsap.timeline()

    tl.from(form, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out",
    })

    return () => {
      tl.kill()
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      toast({
        title: "Success!",
        description: "Your application has been submitted. We'll be in touch soon!",
      })
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className="rounded-lg border bg-card p-8 shadow-sm">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-primary"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Application Submitted!</h3>
            <p className="text-muted-foreground">
              Thank you for your interest in SnapHabit. We'll review your application and get back to you soon.
            </p>
          </div>
          <Button onClick={() => setIsSubmitted(false)}>Submit Another Application</Button>
        </div>
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="rounded-lg border bg-card p-8 shadow-sm">
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" placeholder="Enter your full name" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email address" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="interest">Primary Interest</Label>
          <Select required>
            <SelectTrigger>
              <SelectValue placeholder="Select your primary interest" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="habit-tracking">Habit Tracking</SelectItem>
              <SelectItem value="solana-rewards">Solana Rewards</SelectItem>
              <SelectItem value="social-accountability">Social Accountability</SelectItem>
              <SelectItem value="institutional-use">Institutional Use</SelectItem>
              <SelectItem value="developer">Developer Contribution</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="experience">Experience with Solana</Label>
          <Select required>
            <SelectTrigger>
              <SelectValue placeholder="Select your experience level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">No experience</SelectItem>
              <SelectItem value="beginner">Beginner (have a wallet)</SelectItem>
              <SelectItem value="intermediate">Intermediate (used DApps)</SelectItem>
              <SelectItem value="advanced">Advanced (developed on Solana)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Why are you interested in SnapHabit?</Label>
          <Textarea id="message" placeholder="Tell us why you're interested in joining the beta" rows={4} />
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox id="terms" required />
          <Label
            htmlFor="terms"
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I agree to receive updates about SnapHabit and understand I can unsubscribe at any time.
          </Label>
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </Button>
      </div>
    </form>
  )
}
