"use client"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function OktoWalletDemo() {
  const [isConnected, setIsConnected] = useState(false)
  const [balance, setBalance] = useState("0.00")
  const [activeTab, setActiveTab] = useState("wallet")
  const demoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const demo = demoRef.current

    if (!demo) return

    const tl = gsap.timeline()

    tl.from(demo, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power3.out",
    })

    return () => {
      tl.kill()
    }
  }, [])

  const handleConnect = () => {
    setIsConnected(true)
    setBalance("5.23")

    const tl = gsap.timeline()

    tl.to(".wallet-balance", {
      scale: 1.1,
      duration: 0.3,
      ease: "power3.out",
    })

    tl.to(".wallet-balance", {
      scale: 1,
      duration: 0.3,
      ease: "power3.out",
    })
  }

  const handleDisconnect = () => {
    setIsConnected(false)
    setBalance("0.00")
  }

  return (
    <div ref={demoRef} className="mx-auto max-w-md">
      <Card className="border-2">
        <CardHeader className="bg-muted rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary"></div>
              <CardTitle>Okto Wallet</CardTitle>
            </div>
            {isConnected ? (
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="text-xs font-medium">Connected</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-muted-foreground"></div>
                <span className="text-xs font-medium">Disconnected</span>
              </div>
            )}
          </div>
          <CardDescription>Manage your Solana assets</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Tabs defaultValue="wallet" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="wallet">Wallet</TabsTrigger>
              <TabsTrigger value="send">Send</TabsTrigger>
              <TabsTrigger value="nfts">NFTs</TabsTrigger>
            </TabsList>
            <TabsContent value="wallet" className="p-6">
              <div className="flex flex-col items-center justify-center space-y-6">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">SOL Balance</p>
                  <h3 className="wallet-balance text-4xl font-bold">{balance}</h3>
                </div>

                {isConnected ? (
                  <Button variant="outline" onClick={handleDisconnect} className="w-full">
                    Disconnect Wallet
                  </Button>
                ) : (
                  <Button onClick={handleConnect} className="w-full">
                    Connect Wallet
                  </Button>
                )}
              </div>
            </TabsContent>
            <TabsContent value="send" className="p-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="recipient">Recipient Address</Label>
                  <Input id="recipient" placeholder="Enter Solana address" disabled={!isConnected} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount (SOL)</Label>
                  <Input id="amount" type="number" placeholder="0.00" disabled={!isConnected} />
                </div>
                <Button className="w-full" disabled={!isConnected}>
                  Send SOL
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="nfts" className="p-6">
              {isConnected ? (
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg border bg-card p-2">
                    <div className="aspect-square rounded-md bg-muted"></div>
                    <p className="mt-2 text-center text-sm font-medium">Habit Streak #1</p>
                  </div>
                  <div className="rounded-lg border bg-card p-2">
                    <div className="aspect-square rounded-md bg-muted"></div>
                    <p className="mt-2 text-center text-sm font-medium">Achievement #3</p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center space-y-4 py-8">
                  <p className="text-center text-muted-foreground">Connect your wallet to view NFTs</p>
                  <Button onClick={handleConnect}>Connect Wallet</Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="bg-muted rounded-b-lg flex justify-between p-4">
          <p className="text-xs text-muted-foreground">Powered by Okto</p>
          <p className="text-xs text-muted-foreground">Solana Mainnet</p>
        </CardFooter>
      </Card>
    </div>
  )
}
