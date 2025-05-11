"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"
import { gsap } from "gsap"
import { useMobile } from "@/hooks/use-mobile"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false)
    }

    const tl = gsap.timeline()

    tl.from(".nav-item", {
      opacity: 0,
      y: -20,
      stagger: 0.1,
      duration: 0.6,
      ease: "power3.out",
    })

    tl.from(
      ".nav-button",
      {
        opacity: 0,
        y: -20,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.4",
    )

    return () => {
      tl.kill()
    }
  }, [isMobile])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo-snaphabit.png"
              alt="SnapHabit Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
            <span className="text-2xl font-bold">SnapHabit</span>
          </Link>
        </div>

        {isMobile ? (
          <>
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="md:hidden">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>

            {isMenuOpen && (
              <div className="fixed inset-0 top-16 z-50 bg-background p-6 md:hidden">
                <nav className="flex flex-col space-y-6">
                  <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">
                    Home
                  </Link>
                  <Link href="/features" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">
                    Features
                  </Link>
                  <Link href="/technology" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">
                    Technology
                  </Link>
                  <Link href="/roadmap" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">
                    Roadmap
                  </Link>
                  <Link href="/get-involved" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">
                    Get Involved
                  </Link>
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full">Join Beta</Button>
                  </Link>
                </nav>
              </div>
            )}
          </>
        ) : (
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="nav-item text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/features" className="nav-item text-sm font-medium transition-colors hover:text-primary">
              Features
            </Link>
            <Link href="/technology" className="nav-item text-sm font-medium transition-colors hover:text-primary">
              Technology
            </Link>
            <Link href="/roadmap" className="nav-item text-sm font-medium transition-colors hover:text-primary">
              Roadmap
            </Link>
            <Link href="/get-involved" className="nav-item text-sm font-medium transition-colors hover:text-primary">
              Get Involved
            </Link>
            <div className="nav-button flex items-center gap-4">
              <ModeToggle />
              <Link href="/contact">
                <Button>Join Beta</Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
