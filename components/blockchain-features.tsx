"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { motion } from "framer-motion"
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/framer-animations"

export function BlockchainFeatures() {
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

    tl.from(".blockchain-title", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out",
    })

    tl.from(
      ".blockchain-description",
      {
        opacity: 0,
        y: 20,
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
    <div ref={sectionRef} className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="blockchain-title text-3xl font-bold tracking-tighter sm:text-5xl">
              Beyond Rewards: Blockchain Innovation
            </h2>
            <p className="blockchain-description max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              SnapHabit leverages Solana's blockchain technology for more than just token rewards. Discover how we're
              revolutionizing habit tracking with decentralized technology.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <StaggerChildren className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <StaggerItem>
              <div className="rounded-lg border bg-card p-6 shadow-sm h-full">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative w-full h-48 mb-4 overflow-hidden rounded-md">
                    <Image src="/images/nftbadge.jpg" alt="NFT Achievement Badges" fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold">NFT Achievement Badges</h3>
                  <p className="text-muted-foreground">
                    Earn unique, tradable NFT badges for achieving milestones and completing challenges. Showcase your
                    achievements and build a collection that proves your consistency.
                  </p>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="rounded-lg border bg-card p-6 shadow-sm h-full">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative w-full h-48 mb-4 overflow-hidden rounded-md">
                    <Image src="/images/community.jpg" alt="Community Governance" fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold">Community Governance</h3>
                  <p className="text-muted-foreground">
                    Participate in decentralized decision-making through our DAO. Vote on new features, challenge
                    designs, and reward distributions using your earned tokens as voting power.
                  </p>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="rounded-lg border bg-card p-6 shadow-sm h-full">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative w-full h-48 mb-4 overflow-hidden rounded-md">
                    <Image src="/images/onchain.png" alt="On-chain Verification" fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold">On-chain Verification</h3>
                  <p className="text-muted-foreground">
                    Your habit completion data is securely stored on-chain, creating an immutable record of your
                    progress. This provides transparent, tamper-proof verification of your achievements.
                  </p>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="rounded-lg border bg-card p-6 shadow-sm h-full">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative w-full h-48 mb-4 overflow-hidden rounded-md">
                    <Image src="/images/identity.png" alt="Decentralized Identity" fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold">Decentralized Identity</h3>
                  <p className="text-muted-foreground">
                    Control your personal data with blockchain-based identity. Choose what to share and with whom,
                    without relying on centralized services that might compromise your privacy.
                  </p>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="rounded-lg border bg-card p-6 shadow-sm h-full">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative w-full h-48 mb-4 overflow-hidden rounded-md">
                    <Image
                      src="/images/ecosystem.png"
                      alt="Ecosystem Integration"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Ecosystem Integration</h3>
                  <p className="text-muted-foreground">
                    Seamlessly connect with other Solana applications and services. Use your SnapHabit tokens and NFTs
                    across the growing Solana ecosystem for additional benefits and opportunities.
                  </p>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="rounded-lg border bg-card p-6 shadow-sm h-full">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative w-full h-48 mb-4 overflow-hidden rounded-md">
                    <Image src="/images/incentive.png" alt="Programmable Incentives" fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold">Programmable Incentives</h3>
                  <p className="text-muted-foreground">
                    Create custom reward structures with smart contracts. Design habit challenges with automated
                    incentives that execute instantly when conditions are met, without intermediaries.
                  </p>
                </div>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </div>

        <FadeIn direction="up" delay={0.3} className="mt-12">
          <div className="rounded-lg border bg-card p-8 shadow-md">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">How Users Will Earn on Solana</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <p>
                      <span className="font-medium">Daily Check-ins:</span> Earn micro-rewards for consistent daily
                      habit verification through photo check-ins
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <p>
                      <span className="font-medium">Streak Bonuses:</span> Receive increasing rewards as you build
                      longer streaks of consistent habit completion
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <p>
                      <span className="font-medium">Challenge Completion:</span> Join time-limited challenges with
                      larger reward pools distributed to successful participants
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <p>
                      <span className="font-medium">Community Validation:</span> Earn by participating in the
                      verification process for other users' habit check-ins
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <p>
                      <span className="font-medium">NFT Rewards:</span> Collect and trade unique NFTs that may
                      appreciate in value as the platform grows
                    </p>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <motion.div
                  className="rounded-lg overflow-hidden border shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-primary/10 p-6 text-center">
                    <h4 className="text-xl font-bold mb-2">Proposed Reward Tokenomics</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Our sustainable reward system aims to ensure long-term value for users
                    </p>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Daily Check-ins</span>
                        <span>40%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "40%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Streak Bonuses</span>
                        <span>25%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "25%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Challenges</span>
                        <span>20%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "20%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Community Validation</span>
                        <span>10%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "10%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Ecosystem Growth</span>
                        <span>5%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "5%" }}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
