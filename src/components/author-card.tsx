import { Twitter, Github, Linkedin, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Author } from "@/types/blog"

interface AuthorCardProps {
  author: Author
}

export function AuthorCard({ author }: AuthorCardProps) {
  const socialIcons = {
    twitter: Twitter,
    github: Github,
    linkedin: Linkedin,
    website: Globe,
  }

  return (
    <Card className="bg-muted/50">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback className="text-lg">
              {author.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1 space-y-3">
            <div>
              <h3 className="text-lg font-semibold">{author.name}</h3>
              <p className="text-muted-foreground">{author.bio}</p>
            </div>
            
            {author.social && (
              <div className="flex space-x-2">
                {Object.entries(author.social).map(([platform, url]) => {
                  const Icon = socialIcons[platform as keyof typeof socialIcons]
                  if (!Icon || !url) return null
                  
                  return (
                    <Button
                      key={platform}
                      variant="outline"
                      size="icon"
                      asChild
                      className="h-8 w-8"
                    >
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${author.name} on ${platform}`}
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    </Button>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}