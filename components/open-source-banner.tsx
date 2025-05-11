"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function OpenSourceBanner() {
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const banner = bannerRef.current

    if (!banner) return

    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: banner,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    })

    tl.from(banner, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill()
      }
      tl.kill()
    }
  }, [])

  return (
    <div ref={bannerRef} className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="rounded-lg border bg-card p-8 shadow-md">
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
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Open Source Project</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                SnapHabit is proudly open source. We believe in transparency and community-driven development.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/get-involved">
                <Button size="lg" className="w-full min-[400px]:w-auto">
                  Get Involved
                </Button>
              </Link>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                  GitHub Repository
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
