import { getSkiAreas } from 'app/areas/utils'

export const baseUrl = 'https://portfolio-blog-starter.vercel.app'

export default async function sitemap() {
  let blogs = getSkiAreas().map((post) => ({
    url: `${baseUrl}/areas/${post.slug}`,
  }))

  let routes = ['', '/areas'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
