import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageSquare, Users, Zap } from "lucide-react"

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: "General Inquiries",
      description: "Questions about BlogHub or partnerships",
      contact: "hello@bloghub.dev",
      action: "Send Email"
    },
    {
      icon: MessageSquare,
      title: "Article Submissions",
      description: "Want to contribute to our blog?",
      contact: "writers@bloghub.dev",
      action: "Get Writing Guidelines"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Need help or want to connect?",
      contact: "Join our Discord",
      action: "Join Community"
    },
    {
      icon: Zap,
      title: "Technical Issues",
      description: "Report bugs or technical problems",
      contact: "support@bloghub.dev",
      action: "Report Issue"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-blog-gradient-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-blog-gradient text-white mb-6">Get in Touch</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                We'd Love to Hear From You
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Have questions, suggestions, or want to contribute? We're here to help and always 
                excited to connect with our community.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                  <Card>
                    <CardContent className="p-6">
                      <form className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                              First Name
                            </label>
                            <Input
                              id="firstName"
                              type="text"
                              placeholder="John"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                              Last Name
                            </label>
                            <Input
                              id="lastName"
                              type="text"
                              placeholder="Doe"
                              required
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email Address
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium mb-2">
                            Subject
                          </label>
                          <Input
                            id="subject"
                            type="text"
                            placeholder="What's this about?"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium mb-2">
                            Message
                          </label>
                          <Textarea
                            id="message"
                            placeholder="Tell us more about your inquiry..."
                            rows={6}
                            required
                          />
                        </div>
                        
                        <Button className="w-full bg-blog-gradient hover:opacity-90">
                          Send Message
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                {/* Contact Methods */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Other Ways to Connect</h2>
                  <div className="space-y-6">
                    {contactMethods.map((method, index) => (
                      <Card key={index} className="hover:shadow-blog transition-shadow">
                        <CardHeader className="pb-3">
                          <div className="flex items-start space-x-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blog-gradient">
                              <method.icon className="h-5 w-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-lg">{method.title}</CardTitle>
                              <p className="text-sm text-muted-foreground mt-1">
                                {method.description}
                              </p>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">{method.contact}</span>
                            <Button variant="outline" size="sm">
                              {method.action}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* FAQ Link */}
                  <Card className="mt-8 bg-muted/50">
                    <CardContent className="p-6 text-center">
                      <h3 className="font-semibold mb-2">Frequently Asked Questions</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Check out our FAQ section for quick answers to common questions.
                      </p>
                      <Button variant="outline">
                        View FAQ
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Response Time */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">We'll Get Back to You Soon</h2>
              <p className="text-muted-foreground mb-8">
                We typically respond to inquiries within 24-48 hours during business days. 
                For urgent matters, please use the appropriate contact method above.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">24-48h</div>
                  <div className="text-sm text-muted-foreground">General Inquiries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">1-2 weeks</div>
                  <div className="text-sm text-muted-foreground">Article Review</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">Same day</div>
                  <div className="text-sm text-muted-foreground">Technical Issues</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}