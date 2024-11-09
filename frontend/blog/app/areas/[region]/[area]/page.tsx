import { notFound } from 'next/navigation'
import { getSkiAreas } from 'app/areas/utils'

export async function generateStaticParams() {
  // Generate all static paths for `[region]/[area]`
  const areas = getSkiAreas()
  return areas.map((area) => ({
    region: area.region,
    slug: area.slug,
  }))
}

export default function AreaPage({ params }: { params: { region: string; area: string } }) {
  const area = getSkiAreas().find(
    (area) => area.region === params.region && area.slug === params.area
  )

  if (!area) {
    notFound()
  }

  return (
    <section>
      <h1>{area.name}</h1>
    </section>
  )
}