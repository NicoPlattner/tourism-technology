import Link from 'next/link'

type ListItem = {
  slug: string
  name: string
}

type ListProps = {
  regions: ListItem[]
}

export function List({ regions }: ListProps) {
  return (
    <div>
      {regions.map((region) => (
        <Link
          key={region.slug}
          className="flex flex-col space-y-1 mb-4"
          href={`/areas/${region.slug}`}
        >
          <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
            <p className="text-neutral-900 tracking-tight">
              {region.name}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}