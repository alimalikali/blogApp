import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import heroImage from "@/assets/blog-hero.jpg"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-blog-gradient">
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40" />
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern blog workspace"
          className="h-full w-full object-cover opacity-30"
        />
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[60vh] items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                BlogHub
              </span>
            </h1>
            
            <p className="mt-6 text-xl leading-8 text-blue-100">
              Discover insights, tutorials, and stories from developers, designers, and tech enthusiasts. 
              Join our community of creators sharing knowledge and building the future of web development.
            </p>
            
            <div className="mt-10 flex items-center gap-x-6">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Explore Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button variant="outline" size="lg" className="border-white text-black dark:text-white hover:bg-white/10 ">
                About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}