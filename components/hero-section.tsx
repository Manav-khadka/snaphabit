"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { gsap } from "gsap"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    const tl = gsap.timeline()

    tl.from(".hero-title", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power3.out",
    })

    tl.from(
      ".hero-subtitle",
      {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.4",
    )

    tl.from(
      ".hero-buttons",
      {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.4",
    )

    tl.from(
      ".hero-image",
      {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.4",
    )

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <section ref={sectionRef} className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="hero-title text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Track Habits with Photos, <span className="solana-gradient-text neon-glow">Earn on Solana</span>
              </h1>
              <p className="hero-subtitle max-w-[600px] text-muted-foreground md:text-xl">
                SnapHabit combines visual accountability with blockchain rewards to help you build lasting habits and
                earn while you grow.
              </p>
            </div>
            <div className="hero-buttons flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/features">
                <Button size="lg" className="w-full min-[400px]:w-auto">
                  Explore Features
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                  Join Beta
                </Button>
              </Link>
            </div>
          </div>
          <div className="hero-image mx-auto flex items-center justify-center lg:justify-end">
            <div className="relative h-[350px] w-[300px] sm:h-[400px] sm:w-[350px] md:h-[450px] md:w-[400px] lg:h-[500px] lg:w-[450px]">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-solana-purple to-solana-green opacity-20 blur-3xl"></div>
              <Image
                src="/placeholder.svg?height=500&width=450"
                width={450}
                height={500}
                alt="SnapHabit App"
                className="relative z-10 rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
