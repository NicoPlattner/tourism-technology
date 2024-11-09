import { List } from 'app/components/List'
import { getSkiRegions } from 'app/areas/utils'

export const metadata = {
  title: 'Areas',
  description: 'Choose an area.',
}

export default async function RegionPage() {
  const regions = getSkiRegions()

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Areas where we slide</h1>
      <List regions={regions} />
    </section>
  )
}