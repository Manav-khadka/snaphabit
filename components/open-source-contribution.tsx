"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, GitBranch, GitPullRequest } from "lucide-react"

export function OpenSourceContribution() {
  const [activeTab, setActiveTab] = useState("code")

  return (
    <Card className="mt-4">
      <CardHeader className="pb-2">
        <CardTitle>Ways to Contribute</CardTitle>
        <CardDescription>Join our open source community</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="code" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="code">
              <Code className="mr-2 h-4 w-4" />
              Code
            </TabsTrigger>
            <TabsTrigger value="issues">
              <GitBranch className="mr-2 h-4 w-4" />
              Issues
            </TabsTrigger>
            <TabsTrigger value="prs">
              <GitPullRequest className="mr-2 h-4 w-4" />
              PRs
            </TabsTrigger>
          </TabsList>
          <TabsContent value="code" className="p-4">
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Contribute to our codebase by implementing new features, fixing bugs, or improving performance.
              </p>
              <div className="rounded-md bg-muted p-4">
                <pre className="text-xs">
                  <code>
                    {`git clone https://github.com/snaphabit/snaphabit.git
cd snaphabit
npm install
npm run dev`}
                  </code>
                </pre>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="issues" className="p-4">
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Help us identify bugs, suggest new features, or improve documentation by creating issues.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="font-medium">Bug Reports:</span> Include steps to reproduce, expected vs. actual
                  behavior
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-medium">Feature Requests:</span> Describe the feature and why it would be
                  valuable
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-medium">Documentation:</span> Help improve our guides and API documentation
                </li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="prs" className="p-4">
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Submit pull requests to contribute code changes, fix issues, or add new features.
              </p>
              <div className="rounded-md bg-muted p-4">
                <pre className="text-xs">
                  <code>
                    {`git checkout -b feature/your-feature-name
# Make your changes
git commit -m "Add feature: description"
git push origin feature/your-feature-name
# Open a PR on GitHub`}
                  </code>
                </pre>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between pt-2">
        <Button variant="outline" size="sm">
          View Guidelines
        </Button>
        <Button size="sm">Join Discord</Button>
      </CardFooter>
    </Card>
  )
}
