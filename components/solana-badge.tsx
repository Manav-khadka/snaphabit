"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import Link from "next/link"

export function SolanaBadge() {
  const badgeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const badge = badgeRef.current

    if (!badge) return

    const tl = gsap.timeline()

    tl.from(badge, {
      opacity: 0,
      scale: 0.9,
      duration: 0.6,
      ease: "power3.out",
    })

    // Add hover animation
    badge.addEventListener("mouseenter", () => {
      gsap.to(badge, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      })
    })

    badge.addEventListener("mouseleave", () => {
      gsap.to(badge, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      })
    })

    return () => {
      tl.kill()
      badge.removeEventListener("mouseenter", () => {})
      badge.removeEventListener("mouseleave", () => {})
    }
  }, [])

  return (
    <div ref={badgeRef} className="inline-flex items-center rounded-full border bg-card px-4 py-2 shadow-sm">
      <Link href="https://solana.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-solana-purple to-solana-green"></div>
        <span className="font-medium">Built on Solana</span>
      </Link>
    </div>
  )
}
