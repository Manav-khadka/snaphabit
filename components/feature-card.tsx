"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { motion } from "framer-motion"

interface FeatureCardProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  direction?: "left" | "right"
}

export function FeatureCard({ title, description, imageSrc, imageAlt, direction = "right" }: FeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current

    if (!card) return

    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    })

    tl.from(card, {
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
    <motion.div
      ref={cardRef}
      className="rounded-lg border bg-card shadow-sm overflow-hidden"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="grid md:grid-cols-2">
        {direction === "right" ? (
          <>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">{title}</h3>
              <p className="text-muted-foreground">{description}</p>
            </div>
            <div className="bg-muted relative h-64 md:h-auto">
              <Image
                src={imageSrc || "/placeholder.svg?height=400&width=600"}
                fill
                alt={imageAlt}
                className="object-cover"
              />
            </div>
          </>
        ) : (
          <>
            <div className="bg-muted md:order-last relative h-64 md:h-auto">
              <Image
                src={imageSrc || "/placeholder.svg?height=400&width=600"}
                fill
                alt={imageAlt}
                className="object-cover"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">{title}</h3>
              <p className="text-muted-foreground">{description}</p>
            </div>
          </>
        )}
      </div>
    </motion.div>
  )
}
