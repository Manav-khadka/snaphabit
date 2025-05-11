"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { gsap } from "gsap"
import { motion } from "framer-motion"
import { AnimatedGradientText, FadeIn } from "@/components/framer-animations"

export function   EnhancedHeroSection() {
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

    // Add floating animation to the app mockup
    gsap.to(".hero-image", {
      y: 15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <section ref={sectionRef} className="w-full py-12  relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-start space-y-4">
            <div className="space-y-2">
              <h1 className="hero-title text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          Track Habits with Photos, <AnimatedGradientText>Earn on Solana</AnimatedGradientText>
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
          <div className="hero-image flex items-start justify-center lg:justify-end pt-0 mt-0">
            <div className="relative h-[350px] w-[300px] sm:h-[400px] sm:w-[350px] md:h-[450px] md:w-[400px] lg:h-[500px] lg:w-[450px]">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-solana-purple to-solana-green opacity-20 blur-3xl"></div>
              <Image
          src="/images/hero.jpg"
          width={450}
          height={500}
          alt="SnapHabit App"
          className="relative z-10 rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>

        <FadeIn direction="up" delay={0.5}>
          <div className="xl:mt-32 md:mt-24 sm:mt-16 mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 py-16">
            <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border">
              <div className="text-xl font-semibold text-primary mb-2">Track Daily Progress</div>
              <div className="text-sm text-muted-foreground">Capture photo evidence of your daily habits and build consistency.</div>
            </div>
            <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border">
              <div className="text-xl font-semibold text-primary mb-2">Earn Rewards</div>
              <div className="text-sm text-muted-foreground">Get tokens on Solana blockchain as you maintain your habit streaks.</div>
            </div>
            <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border">
              <div className="text-xl font-semibold text-primary mb-2">Join Community</div>
              <div className="text-sm text-muted-foreground">Connect with others on similar journeys and stay motivated together.</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
