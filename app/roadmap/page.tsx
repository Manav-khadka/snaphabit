import { Button } from "@/components/ui/button"
import Link from "next/link"
import { RoadmapTimeline } from "@/components/roadmap-timeline"
import { AnimatedPage } from "@/components/framer-animations"

export default function RoadmapPage() {
  return (
    <AnimatedPage>
      <div className="container px-4 py-12 md:px-6 md:py-24 lg:py-32">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Roadmap</h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our journey to revolutionize habit tracking with blockchain technology and photo verification.
            </p>
          </div>
        </div>

        <div className="py-12 md:py-24">
          <RoadmapTimeline />
        </div>

        <div className="rounded-lg border bg-card p-8 shadow-md">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Current Development Phase</h2>
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                Beta Testing
              </div>
              <p className="text-muted-foreground">
                We're currently in the beta testing phase, refining our core features and optimizing the Solana
                integration.
              </p>
            </div>
            <div className="w-full max-w-md">
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-primary text-primary-foreground">
                      Progress
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-primary">65%</span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary/20">
                  <div
                    style={{ width: "65%" }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/get-involved">
            <Button size="lg" className="gap-2">
              Get Involved
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
