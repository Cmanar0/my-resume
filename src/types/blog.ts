export interface Topic {
  id: string | null
  topic: string
  active: boolean
}

export interface Author {
  id: string | null
  name: string
  active: boolean
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
  description: string
  content: string
  _status: string
  _firstPublishedAt: string
  author: Author | null
  topics: Topic[]
  seo?: {
    title: string
    description: string
    image?: {
      url: string
    }
    noIndex: boolean
    twitterCard: string
  }
  featuredImage?: {
    url: string
    alt?: string
    width?: number
    height?: number
  }
}

export interface BlogResponse {
  allArticles: Post[]
} 