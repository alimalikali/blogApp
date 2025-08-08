import { Link } from "react-router-dom"
import { Clock, User } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BlogPost } from "@/types/blog"

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const cardClass = featured 
    ? "group overflow-hidden transition-all duration-300 hover:shadow-blog-lg border-0 bg-gradient-to-br from-card via-card to-muted/30" 
    : "group overflow-hidden transition-all duration-300 hover:shadow-blog"

  return (
    <Card className={cardClass}>
      <Link to={`/post/${post.id}`} className="block">
        {post.image && (
          <div className="aspect-video overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        
        <CardHeader className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="text-xs">
              {post.category}
            </Badge>
            {featured && (
              <Badge className="bg-blog-gradient text-white text-xs">
                Featured
              </Badge>
            )}
          </div>
          
          <h3 className={`font-bold leading-tight group-hover:text-primary transition-colors ${
            featured ? "text-xl lg:text-2xl" : "text-lg"
          }`}>
            {post.title}
          </h3>
          
          <p className="text-muted-foreground line-clamp-3">
            {post.excerpt}
          </p>
        </CardHeader>
        
        <CardContent className="pt-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>
                  {post.author.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                <User className="h-3 w-3" />
                <span>{post.author.name}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>{post.readTime} min read</span>
              </div>
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </time>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}