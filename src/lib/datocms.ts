import { GraphQLClient } from 'graphql-request'

const DATOCMS_API_TOKEN = import.meta.env.VITE_DATOCMS_API_TOKEN
const DATOCMS_API_URL = 'https://graphql.datocms.com'

// Debug: Check if token is loaded

if (!DATOCMS_API_TOKEN) {
  console.error('DatoCMS API token is missing. Please check your .env file.')
}

export const client = new GraphQLClient(DATOCMS_API_URL, {
  headers: {
    Authorization: `Bearer ${DATOCMS_API_TOKEN}`,
  },
})

export async function fetchAPI<T extends Record<string, any>>(query: string, variables = {}): Promise<T> {
  try {
    
    const data = await client.request<T>(query, variables)
    
    // Check if the response is empty or null
    if (!data || Object.keys(data).length === 0) {
      throw new Error('Empty response from DatoCMS')
    }
    
    // Check if the article field exists and is null
    if (data && typeof data === 'object' && 'article' in data && data.article === null) {
      throw new Error('Article not found in DatoCMS')
    }
    
    return data
  } catch (error) {
    console.error('Error fetching from DatoCMS:', error)
    
    // Check if it's a GraphQL error
    if (error instanceof Error) {
      if (error.message.includes('NOT_FOUND') || error.message.includes('not found')) {
        throw new Error('Article not found in DatoCMS')
      }
      if (error.message.includes('UNAUTHORIZED') || error.message.includes('unauthorized')) {
        throw new Error('Unauthorized access to DatoCMS. Please check your API token.')
      }
      if (error.message.includes('Empty response')) {
        throw new Error('No data returned from DatoCMS')
      }
    }
    
    throw error
  }
} 