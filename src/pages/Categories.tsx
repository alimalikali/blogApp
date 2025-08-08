import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogCard } from "@/components/blog-card"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { categories, blogPosts } from "@/data/blog-data"

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  
  const filteredPosts = selectedCategory
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-blog-gradient-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-blog-gradient text-white mb-6">Categories</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Explore by Category
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Browse our curated collection of articles organized by topics that matter to developers
              </p>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {/* All Categories */}
              <Card 
                className={`cursor-pointer transition-all hover:shadow-blog ${
                  selectedCategory === null ? 'ring-2 ring-primary bg-blog-gradient-muted' : ''
                }`}
                onClick={() => setSelectedCategory(null)}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">All Articles</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Browse all our articles across every topic
                  </p>
                  <div className="text-xs text-muted-foreground">
                    {blogPosts.length} articles
                  </div>
                </CardContent>
              </Card>

              {/* Individual Categories */}
              {categories.map((category) => (
                <Card
                  key={category.id}
                  className={`cursor-pointer transition-all hover:shadow-blog ${
                    selectedCategory === category.name ? 'ring-2 ring-primary bg-blog-gradient-muted' : ''
                  }`}
                  onClick={() => setSelectedCategory(category.name)}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">
                      {category.description}
                    </p>
                    <div className="text-xs text-muted-foreground">
                      {category.postCount} article{category.postCount !== 1 ? 's' : ''}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Active Filter */}
            {selectedCategory && (
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm text-muted-foreground">Showing articles in:</span>
                  <Badge variant="secondary">{selectedCategory}</Badge>
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="text-sm text-primary hover:underline ml-2"
                  >
                    Clear filter
                  </button>
                </div>
              </div>
            )}

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>

            {/* No Results */}
            {filteredPosts.length === 0 && selectedCategory && (
              <div className="text-center py-16">
                <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                <p className="text-muted-foreground mb-4">
                  We couldn't find any articles in the "{selectedCategory}" category.
                </p>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="text-primary hover:underline"
                >
                  View all articles
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}