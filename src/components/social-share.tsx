import { Twitter, Linkedin, Facebook, Link, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"

interface SocialShareProps {
  title: string
  url: string
  description?: string
}

export function SocialShare({ title, url, description }: SocialShareProps) {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      toast({
        title: "Link copied!",
        description: "The article link has been copied to your clipboard.",
      })
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again or copy the URL manually.",
        variant: "destructive",
      })
    }
  }

  const shareData = {
    title,
    text: description,
    url,
  }

  const nativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch (err) {
        // User cancelled sharing
      }
    } else {
      copyToClipboard()
    }
  }

  const socialLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
  ]

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium text-muted-foreground">Share:</span>
      
      {socialLinks.map((social) => (
        <Button
          key={social.name}
          variant="outline"
          size="icon"
          asChild
          className="h-8 w-8"
        >
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Share on ${social.name}`}
          >
            <social.icon className="h-4 w-4" />
          </a>
        </Button>
      ))}
      
      <Button
        variant="outline"
        size="icon"
        onClick={copyToClipboard}
        className="h-8 w-8"
        aria-label="Copy link"
      >
        <Link className="h-4 w-4" />
      </Button>
      
      {navigator.share && (
        <Button
          variant="outline"
          size="icon"
          onClick={nativeShare}
          className="h-8 w-8"
          aria-label="Share via system"
        >
          <Share2 className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
}