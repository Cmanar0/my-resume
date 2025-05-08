export interface Topic {
  id: string | null
  topic: string
  active: boolean
}

export interface Author {
  name: string
}

export interface SEO {
  title?: string
  description?: string
  image?: {
    url: string
  }
  noIndex?: boolean
  twitterCard?: string
}

export interface Post {
  id: string
  title: string
  slug: string
  content: string
  _status: string
  _firstPublishedAt: string
  author: Author
  topics: Topic[]
  seo?: SEO
  featuredImage?: {
    alt: string
    url: string
  }
}

export interface BlogResponse {
  allArticles: Post[]
} 