export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: Author
  publishedAt: string
  readTime: number
  tags: string[]
  category: string
  image?: string
  featured?: boolean
}

export interface Author {
  id: string
  name: string
  bio: string
  avatar: string
  social?: {
    twitter?: string
    github?: string
    linkedin?: string
    website?: string
  }
}

export interface Category {
  id: string
  name: string
  description: string
  postCount: number
}