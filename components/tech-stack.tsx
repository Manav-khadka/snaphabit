"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function TechStack() {
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

    tl.from(".tech-title", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out",
    })

    tl.from(
      ".tech-card",
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
    <div ref={sectionRef} className="py-12 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="tech-title text-3xl font-bold tracking-tighter sm:text-4xl">Our Tech Stack</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Built with cutting-edge technologies for performance, scalability, and user experience.
          </p>
        </div>
      </div>

      <div className="grid gap-6 py-8 md:grid-cols-3 md:gap-8">
        <div className="tech-card flex flex-col items-center space-y-4 rounded-lg border bg-card p-6 shadow-sm">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
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
              <rect width="20" height="14" x="2" y="5" rx="2"></rect>
              <line x1="2" x2="22" y1="10" y2="10"></line>
            </svg>
          </div>
          <h3 className="text-xl font-bold">Frontend</h3>
          <ul className="space-y-2 text-center">
            <li className="flex items-center justify-center gap-2">
              <span className="font-medium">React Native</span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="font-medium">Next.js</span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="font-medium">TailwindCSS</span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="font-medium">GSAP Animations</span>
            </li>
          </ul>
        </div>

        <div className="tech-card flex flex-col items-center space-y-4 rounded-lg border bg-card p-6 shadow-sm">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
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
              <path d="M2 9.5V5c0-1.1.9-2 2-2h3.5"></path>
              <path d="M2 14.5V19c0 1.1.9 2 2 2h3.5"></path>
              <path d="M22 9.5V5c0-1.1-.9-2-2-2h-3.5"></path>
              <path d="M22 14.5V19c0 1.1-.9 2-2 2h-3.5"></path>
              <path d="M7 12h10"></path>
              <path d="M12 7v10"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold">Backend</h3>
          <ul className="space-y-2 text-center">
            <li className="flex items-center justify-center gap-2">
              <span className="font-medium">Node.js</span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="font-medium">Express</span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="font-medium">MongoDB</span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="font-medium">Firebase</span>
            </li>
          </ul>
        </div>

        <div className="tech-card flex flex-col items-center space-y-4 rounded-lg border bg-card p-6 shadow-sm">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
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
              <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
              <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
              <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold">Blockchain</h3>
          <ul className="space-y-2 text-center">
            <li className="flex items-center justify-center gap-2">
              <span className="font-medium">Solana</span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="font-medium">Web3.js</span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="font-medium">Okto Wallet SDK</span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="font-medium">Anchor Framework</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
