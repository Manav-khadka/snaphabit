import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { OpenSourceContribution } from "@/components/open-source-contribution"
import { AnimatedPage } from "@/components/framer-animations"
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/framer-animations"

export default function GetInvolvedPage() {
  return (
    <AnimatedPage>
      <div className="container px-4 py-12 md:px-6 md:py-24 lg:py-32">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Get Involved</h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join the SnapHabit community and help shape the future of habit tracking on Solana.
            </p>
          </div>
        </div>

        <div className="grid gap-12 py-12 md:grid-cols-2">
          <FadeIn direction="right">
            <div className="flex flex-col space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
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
                  className="h-6 w-6"
                >
                  <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                </svg>
              </div>
              <h2 className="text-3xl font-bold">Open Source</h2>
              <p className="text-muted-foreground">
                SnapHabit is proudly open source. We believe in transparency and community-driven development.
                Contribute to our codebase, suggest features, or help us improve our documentation.
              </p>
              <OpenSourceContribution />
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div className="flex flex-col space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
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
                  className="h-6 w-6"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h2 className="text-3xl font-bold">Superteam India Collaboration</h2>
              <p className="text-muted-foreground">
                We're proud to collaborate with Superteam India, a collective of top talent building on Solana. Join our
                workshops, hackathons, and community events to learn and contribute.
              </p>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/images/superteam.png"
                    width={80}
                    height={80}
                    alt="Superteam India Logo"
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-xl font-bold">Superteam India</h3>
                    <p className="text-sm text-muted-foreground">
                      A community of builders, creators, and contributors focused on accelerating Solana adoption in
                      India.
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="https://superteam.fun" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full">
                      Visit Superteam
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <section className="py-12 md:py-24">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Community Channels</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join our growing community across these platforms to stay updated and contribute.
              </p>
            </div>
          </div>

          <StaggerChildren className="mt-8 grid gap-6 md:grid-cols-3">
            <StaggerItem>
              <Link href="#" className="rounded-lg border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
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
                      className="h-5 w-5"
                    >
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">YouTube</h3>
                    <p className="text-sm text-muted-foreground">Tutorials & Updates</p>
                  </div>
                </div>
              </Link>
            </StaggerItem>

            <StaggerItem>
              <Link href="#" className="rounded-lg border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
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
                      className="h-5 w-5"
                    >
                      <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Twitter</h3>
                    <p className="text-sm text-muted-foreground">News & Announcements</p>
                  </div>
                </div>
              </Link>
            </StaggerItem>

            <StaggerItem>
              <Link href="#" className="rounded-lg border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
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
                      className="h-5 w-5"
                    >
                      <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Discord</h3>
                    <p className="text-sm text-muted-foreground">Community & Support</p>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          </StaggerChildren>
        </section>

        <div className="flex justify-center mt-8">
          <Link href="/contact">
            <Button size="lg" className="gap-2">
              Join Beta Program
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
                className="h-4 w-4"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </AnimatedPage>
  )
}
