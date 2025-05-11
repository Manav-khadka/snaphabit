import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TechStack } from "@/components/tech-stack"
import { OktoWalletDemo } from "@/components/okto-wallet-demo"
import { AnimatedPage } from "@/components/framer-animations"

export default function TechnologyPage() {
  return (
    <AnimatedPage>
      <div className="container px-4 py-12 md:px-6 md:py-24 lg:py-32">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Technology</h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Powered by cutting-edge technology, SnapHabit combines mobile development with blockchain innovation.
            </p>
          </div>
        </div>

        <TechStack />

        <section className="py-12 md:py-24">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Okto Wallet Integration</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Experience seamless Solana transactions with our Okto wallet integration. Manage your rewards, tokens,
                and NFTs with ease.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <OktoWalletDemo />
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Solana Blockchain</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We've built SnapHabit on Solana for its speed, low transaction costs, and energy efficiency. This
                enables us to provide real-time rewards and verifiable habit tracking.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
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
                  <path d="M13 2 L18 2 L18 7"></path>
                  <path d="M18 2 L8 12"></path>
                  <path d="M2 22 L8 22 L22 8 L16 2 L2 16 L2 22 Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Fast Transactions</h3>
              <p className="text-muted-foreground mt-2">
                Solana processes thousands of transactions per second, ensuring your rewards are delivered instantly.
              </p>
            </div>

            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
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
                  <path d="M12 2v20"></path>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Low Fees</h3>
              <p className="text-muted-foreground mt-2">
                Minimal transaction costs mean more value goes directly to users as rewards for their habit consistency.
              </p>
            </div>

            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
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
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Verifiable Proof</h3>
              <p className="text-muted-foreground mt-2">
                Blockchain provides immutable records of habit completion, creating a trustworthy history of your
                achievements.
              </p>
            </div>
          </div>
        </section>

        <div className="flex justify-center mt-8">
          <Link href="/roadmap">
            <Button size="lg" className="gap-2">
              View Our Roadmap
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
