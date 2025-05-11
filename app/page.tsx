import { EnhancedHeroSection } from "@/components/enhanced-hero-section"
import { SolanaIntegration } from "@/components/solana-integration"
import { OpenSourceBanner } from "@/components/open-source-banner"
import { BlockchainFeatures } from "@/components/blockchain-features"
import { GrantsSection } from "@/components/grants-section"
import { AnimatedPage } from "@/components/framer-animations"

export default function Home() {
  return (
    <AnimatedPage>
      <div className="flex flex-col items-center">
        <EnhancedHeroSection />
        <BlockchainFeatures />
        <SolanaIntegration />
        <GrantsSection />
        <OpenSourceBanner />
      </div>
    </AnimatedPage>
  )
}
