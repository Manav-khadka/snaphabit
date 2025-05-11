import { ContactForm } from "@/components/contact-form"
import { SolanaBadge } from "@/components/solana-badge"
import { AnimatedPage } from "@/components/framer-animations"

export default function ContactPage() {
  return (
    <AnimatedPage>
      <div className="container px-4 py-12 md:px-6 md:py-24 lg:py-32">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Join the Beta</h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Be among the first to experience SnapHabit and help shape the future of habit tracking on Solana.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-2xl py-12">
          <ContactForm />
        </div>

        <div className="flex flex-col items-center justify-center space-y-4 text-center mt-12">
          <SolanaBadge />
          <p className="text-sm text-muted-foreground">
            SnapHabit is built on Solana, the fastest blockchain in the world and the fastest growing ecosystem in
            crypto.
          </p>
        </div>
      </div>
    </AnimatedPage>
  )
}
