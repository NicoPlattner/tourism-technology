import Link from 'next/link'
import { getSkiRegions } from 'app/areas/utils'

export function SkiRegions() {
  let regions = getSkiRegions()

  return (
    <div>
      {regions
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/areas/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.name}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
