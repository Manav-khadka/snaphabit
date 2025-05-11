"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/framer-animations"

export function GrantsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    })

    tl.from(".grants-title", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out",
    })

    tl.from(
      ".grants-description",
      {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.6",
    )

    tl.from(
      ".grants-card",
      {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.6",
    )

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill()
      }
      tl.kill()
    }
  }, [])

  return (
    <div ref={sectionRef} className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="grants-title text-3xl font-bold tracking-tighter sm:text-5xl">
              Funding Our Vision with Grants
            </h2>
            <p className="grants-description max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              SnapHabit is actively pursuing grants to accelerate development and bring innovative habit tracking to the
              Solana ecosystem.
            </p>
          </div>
        </div>

        <div className="grid gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            className="grants-card flex flex-col h-full rounded-lg border bg-card p-6 shadow-sm"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
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
                className="h-6 w-6"
              >
                <path d="M12 2v20"></path>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Solana Foundation Grants</h3>
            <p className="text-muted-foreground flex-grow">
              We plan to apply for the Solana Foundation's developer ecosystem grants to support our core development
              and blockchain integration.
            </p>
            <div className="mt-4 pt-4 border-t">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Grant Status:</span>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-blue-500/10 text-blue-500 border-blue-500/20">
                  Planning Phase
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grants-card flex flex-col h-full rounded-lg border bg-card p-6 shadow-sm"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
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
                className="h-6 w-6"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Superteam Grants</h3>
            <p className="text-muted-foreground flex-grow">
              We aim to partner with Superteam India to open opportunities for specialized grants focused on regional
              adoption and community building.
            </p>
            <div className="mt-4 pt-4 border-t">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Grant Status:</span>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                  Initial Outreach
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grants-card flex flex-col h-full rounded-lg border bg-card p-6 shadow-sm"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
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
                className="h-6 w-6"
              >
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Health & Wellness Innovation Fund</h3>
            <p className="text-muted-foreground flex-grow">
              We're exploring grants from health innovation funds to research and develop effective habit formation
              techniques enhanced by blockchain incentives.
            </p>
            <div className="mt-4 pt-4 border-t">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Grant Status:</span>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-purple-500/10 text-purple-500 border-purple-500/20">
                  Concept Stage
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <FadeIn direction="up" delay={0.3} className="mt-8">
          <div className="rounded-lg border bg-card p-8 shadow-md">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">Our Grant Roadmap</h3>
                <p className="text-muted-foreground mb-6">
                  We're strategically planning to apply for grants to fund different aspects of SnapHabit's development
                  and growth. Here's how we plan to utilize grant funding:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <p>
                      <span className="font-medium">Core Development:</span> Enhancing our photo verification algorithm
                      and blockchain integration
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <p>
                      <span className="font-medium">User Acquisition:</span> Marketing campaigns and onboarding
                      initiatives to grow our user base
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <p>
                      <span className="font-medium">Research:</span> Studying habit formation effectiveness with
                      blockchain incentives
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <p>
                      <span className="font-medium">Community Building:</span> Creating educational content and
                      developer resources
                    </p>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden border">
                  <Image src="/images/collab.png" alt="Superteam Collaboration" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                    <h4 className="text-white text-xl font-bold mb-2">Superteam Collaboration</h4>
                    <p className="text-white/80 text-sm">
                      We plan to partner with Superteam India to gain access to specialized grants and a network of
                      Solana developers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="flex justify-center mt-12">
          <Link href="/get-involved">
            <Button size="lg" className="gap-2">
              Join Our Grant Journey
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
                className="h-4 w-4"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
