import { GraphQLClient } from 'graphql-request'

// Debug: Log all environment variables
console.log('All env vars:', import.meta.env)

const DATOCMS_API_TOKEN = import.meta.env.VITE_DATOCMS_API_TOKEN
const DATOCMS_API_URL = 'https://graphql.datocms.com'

// Debug: Check if token is loaded
console.log('API Token exists:', !!DATOCMS_API_TOKEN)
console.log('API Token length:', DATOCMS_API_TOKEN?.length)

if (!DATOCMS_API_TOKEN) {
  console.error('DatoCMS API token is missing. Please check your .env file.')
}

export const client = new GraphQLClient(DATOCMS_API_URL, {
  headers: {
    Authorization: `Bearer ${DATOCMS_API_TOKEN}`,
  },
})

export async function fetchAPI<T>(query: string, variables = {}): Promise<T> {
  try {
    const data = await client.request<T>(query, variables)
    return data
  } catch (error) {
    console.error('Error fetching from DatoCMS:', error)
    throw error
  }
} 