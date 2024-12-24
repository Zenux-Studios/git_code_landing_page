import { Button } from "@/components/ui/button";
import { HeroVideoDialog } from "@/components/ui/VideoDialog";
import { Code } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background flex justify-center items-center">
        <div className="container px-4 md:px-6 text-center">
          <div className="flex flex-col items-center space-y-6">
            <Code className="h-16 w-16 mb-4" />
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              From Remote git to the Local Code
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              A chrome extension that bridges the repository and your workspace.
            </p>
            <div className="flex space-x-4">
              <Button asChild size="lg">
                <a
                  href="https://github.com/pratyushsingha/Git_Code"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Install Extension
                </a>
              </Button>
              <HeroVideoDialog
                className="block"
                animationStyle="top-in-bottom-out"
                videoSrc="https://www.youtube.com/embed/EJkLJwgYyfA"
                thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
                thumbnailAlt="Hero Video"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
