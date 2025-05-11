"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CheckCircle2, Circle } from "lucide-react"

interface RoadmapItem {
  title: string
  description: string
  date: string
  completed: boolean
}

export function RoadmapTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null)

  const roadmapItems: RoadmapItem[] = [
    {
      title: "Concept & Research",
      description: "Initial concept development, market research, and technology stack selection.",
      date: "Q1 2023",
      completed: true,
    },
    {
      title: "MVP Development",
      description: "Development of core features including photo check-ins and basic habit tracking.",
      date: "Q2-Q3 2023",
      completed: true,
    },
    {
      title: "Solana Integration",
      description: "Integration with Solana blockchain for rewards and verification.",
      date: "Q4 2023",
      completed: true,
    },
    {
      title: "Beta Testing",
      description: "Limited release to beta testers for feedback and improvements.",
      date: "Q1-Q2 2024",
      completed: false,
    },
    {
      title: "Mobile App Launch",
      description: "Official launch of the mobile application with full feature set.",
      date: "Q3 2024",
      completed: false,
    },
    {
      title: "Institutional Partnerships",
      description: "Partnerships with organizations for custom habit programs and challenges.",
      date: "Q4 2024",
      completed: false,
    },
    {
      title: "Global Expansion",
      description: "Expansion to international markets with localization and regional features.",
      date: "Q1 2025",
      completed: false,
    },
  ]

  useEffect(() => {
    const timeline = timelineRef.current

    if (!timeline) return

    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: timeline,
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    })

    tl.from(".roadmap-line", {
      scaleY: 0,
      transformOrigin: "top center",
      duration: 1.5,
      ease: "power3.out",
    })

    tl.from(
      ".roadmap-item",
      {
        opacity: 0,
        x: -30,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=1",
    )

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill()
      }
      tl.kill()
    }
  }, [])

  return (
    <div ref={timelineRef} className="relative mx-auto max-w-3xl py-8">
      <div className="roadmap-line absolute left-4 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-ml-0.5"></div>

      {roadmapItems.map((item, index) => (
        <div
          key={index}
          className={`roadmap-item relative mb-12 md:mb-8 ${
            index % 2 === 0 ? "md:ml-auto md:pl-8" : "md:mr-auto md:pr-8"
          }`}
          style={{ width: "calc(100% - 2rem)", maxWidth: "calc(50% - 1rem)" }}
        >
          <div className="absolute left-0 top-3 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border bg-background md:left-auto md:right-0 md:translate-x-1/2">
            {item.completed ? (
              <CheckCircle2 className="h-6 w-6 text-primary" />
            ) : (
              <Circle className="h-6 w-6 text-muted-foreground" />
            )}
          </div>

          <div className="rounded-lg border bg-card p-4 shadow-sm">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="font-bold">{item.title}</h3>
              <span className="text-xs text-muted-foreground">{item.date}</span>
            </div>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
