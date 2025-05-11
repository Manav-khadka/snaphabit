import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FeatureCard } from "@/components/feature-card"
import { AnimatedPage } from "@/components/framer-animations"

export default function FeaturesPage() {
  return (
    <AnimatedPage>
      <div className="container px-4 py-12 md:px-6 md:py-24 lg:py-32">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Features</h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover how SnapHabit transforms your habit-building journey with powerful features and Solana
              integration.
            </p>
          </div>
        </div>

        <div className="grid gap-12 py-12">
          <FeatureCard
            title="Photo Check-ins"
            description="Verify your habits with visual proof. Take a photo to check in and build your streak. Our system ensures authenticity while respecting your privacy."
            imageSrc="/images/nftbadge.jpg"
            imageAlt="Photo Check-in Feature"
            direction="right"
          />

          <FeatureCard
            title="Groups & Social Accountability"
            description="Join habit groups with friends or the community. Share progress, encourage each other, and stay motivated through social accountability."
            imageSrc="/images/community.png"
            imageAlt="Groups Feature"
            direction="left"
          />

          <FeatureCard
            title="Gamification & Rewards"
            description="Earn points, badges, and Solana tokens as you build streaks. Compete on leaderboards and complete challenges to unlock special rewards."
            imageSrc="/images/nft-badges.png"
            imageAlt="Gamification Feature"
            direction="right"
          />

          <FeatureCard
            title="Institutional Utility"
            description="Organizations can create custom habit programs with verified completion. Perfect for wellness initiatives, education, and corporate challenges."
            imageSrc="/images/governance.png"
            imageAlt="Institutional Utility Feature"
            direction="left"
          />

          <FeatureCard
            title="Okto Wallet Integration"
            description="Seamlessly connect your Okto wallet to manage your Solana rewards, NFTs, and tokens earned through consistent habit building."
            imageSrc="/images/okto-wallet.png"
            imageAlt="Okto Wallet Integration"
            direction="right"
          />
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/technology">
            <Button size="lg" className="gap-2">
              Explore Our Technology
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
