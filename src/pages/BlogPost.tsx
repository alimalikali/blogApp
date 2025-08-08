import { useParams, Link } from "react-router-dom"
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AuthorCard } from "@/components/author-card"
import { SocialShare } from "@/components/social-share"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { blogPosts } from "@/data/blog-data"

export default function BlogPost() {
  const { id } = useParams<{ id: string }>()
  const post = blogPosts.find(p => p.id === id)

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const currentUrl = window.location.href

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Button variant="ghost" asChild className="mb-8">
                <Link to="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Articles
                </Link>
              </Button>
              
              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{post.category}</Badge>
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      <Tag className="mr-1 h-3 w-3" />
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  {post.title}
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime} min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Article Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-4 gap-12">
                {/* Main Content */}
                <article className="lg:col-span-3">
                  {post.image && (
                    <div className="aspect-video mb-8 overflow-hidden rounded-lg">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                  
                  <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-primary prose-strong:text-foreground prose-code:text-primary prose-pre:bg-muted prose-pre:border">
                    {post.content.split('\n').map((paragraph, index) => {
                      if (paragraph.startsWith('# ')) {
                        return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{paragraph.slice(2)}</h1>
                      }
                      if (paragraph.startsWith('## ')) {
                        return <h2 key={index} className="text-2xl font-bold mt-6 mb-3">{paragraph.slice(3)}</h2>
                      }
                      if (paragraph.startsWith('### ')) {
                        return <h3 key={index} className="text-xl font-bold mt-4 mb-2">{paragraph.slice(4)}</h3>
                      }
                      if (paragraph.startsWith('```')) {
                        return <pre key={index} className="bg-muted p-4 rounded-lg overflow-x-auto my-4"><code>{paragraph.slice(3)}</code></pre>
                      }
                      if (paragraph.startsWith('- ')) {
                        return <li key={index} className="ml-4">{paragraph.slice(2)}</li>
                      }
                      if (paragraph.trim() === '') {
                        return <br key={index} />
                      }
                      return <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>
                    })}
                  </div>
                  
                  <Separator className="my-8" />
                  
                  {/* Social Share */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <SocialShare
                      title={post.title}
                      url={currentUrl}
                      description={post.excerpt}
                    />
                  </div>
                </article>
                
                {/* Sidebar */}
                <aside className="lg:col-span-1 space-y-8">
                  <AuthorCard author={post.author} />
                  
                  {/* Related Categories */}
                  <div className="sticky top-24">
                    <h3 className="font-semibold mb-4">Related Topics</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}