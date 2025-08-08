import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Heart, Zap } from "lucide-react"

export default function About() {
  const values = [
    {
      icon: Users,
      title: "Community First",
      description: "We believe in building a supportive community where developers can learn, share, and grow together.",
    },
    {
      icon: Target,
      title: "Quality Content",
      description: "Every article is carefully curated to provide practical, actionable insights that help you advance your skills.",
    },
    {
      icon: Heart,
      title: "Passion Driven",
      description: "Our authors are passionate practitioners who share their real-world experiences and lessons learned.",
    },
    {
      icon: Zap,
      title: "Innovation Focus",
      description: "We explore cutting-edge technologies and methodologies to keep you at the forefront of development.",
    },
  ]

  const stats = [
    { label: "Articles Published", value: "500+" },
    { label: "Community Members", value: "10K+" },
    { label: "Countries Reached", value: "50+" },
    { label: "Years of Experience", value: "5+" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-blog-gradient-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-blog-gradient text-white mb-6">About BlogHub</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Empowering Developers Through Knowledge Sharing
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                BlogHub is a platform where developers, designers, and tech enthusiasts come together 
                to share insights, learn from each other, and build the future of web development.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    We believe that knowledge should be accessible to everyone. Our mission is to create 
                    a platform where experienced developers can share their expertise, and newcomers can 
                    find the guidance they need to succeed in their careers.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Through high-quality articles, tutorials, and case studies, we aim to bridge the gap 
                    between theory and practice, helping developers build real-world skills that matter.
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <Card key={index} className="text-center p-6">
                      <CardContent className="p-0">
                        <div className="text-3xl font-bold text-primary mb-2">
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at BlogHub
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-blog transition-shadow">
                  <CardContent className="p-0 space-y-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blog-gradient mx-auto">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
              
              <div className="prose prose-lg max-w-none dark:prose-invert mx-auto">
                <p className="text-lg leading-relaxed mb-6">
                  BlogHub was born from a simple idea: the best way to learn is by sharing knowledge 
                  with others. Our founders, experienced developers themselves, noticed that while there 
                  was plenty of documentation available, there was a lack of practical, real-world 
                  guidance for developers at all stages of their careers.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  What started as a small collection of articles has grown into a thriving community 
                  of developers, designers, and tech enthusiasts from around the world. We've published 
                  hundreds of articles, helped thousands of developers advance their careers, and built 
                  a platform that values quality, authenticity, and practical application.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Today, BlogHub continues to evolve, always with our core mission in mind: to empower 
                  developers through knowledge sharing and create a more inclusive, supportive tech community.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}