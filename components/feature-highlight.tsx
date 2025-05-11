"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

interface FeatureHighlightProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  direction?: "left" | "right"
}

export function FeatureHighlight({
  title,
  description,
  imageSrc,
  imageAlt,
  direction = "right",
}: FeatureHighlightProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    })

    const textElements = section.querySelectorAll(".feature-text")
    const imageElement = section.querySelector(".feature-image")

    if (direction === "right") {
      tl.from(textElements, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      })

      tl.from(
        imageElement,
        {
          x: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6",
      )
    } else {
      tl.from(textElements, {
        x: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      })

      tl.from(
        imageElement,
        {
          x: -50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6",
      )
    }

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill()
      }
      tl.kill()
    }
  }, [direction])

  return (
    <div ref={sectionRef} className="grid gap-6 py-8 md:grid-cols-2 md:gap-12">
      {direction === "right" ? (
        <>
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="feature-text text-3xl font-bold tracking-tighter">{title}</h2>
            <p className="feature-text text-muted-foreground">{description}</p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={imageSrc || "/placeholder.svg"}
              width={500}
              height={400}
              alt={imageAlt}
              className="feature-image rounded-lg object-cover"
            />
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center justify-center md:order-last">
            <Image
              src={imageSrc || "/placeholder.svg"}
              width={500}
              height={400}
              alt={imageAlt}
              className="feature-image rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="feature-text text-3xl font-bold tracking-tighter">{title}</h2>
            <p className="feature-text text-muted-foreground">{description}</p>
          </div>
        </>
      )}
    </div>
  )
}
