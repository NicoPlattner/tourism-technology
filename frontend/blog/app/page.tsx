import { getSkiAreas } from './areas/utils';
import { AreaList } from './components/AreaList'
import { get } from 'http'

export default function Page() {
  const areas = getSkiAreas();
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Peak LookOut 
      </h1>
      <p className="mb-4">
        {`Take a glance at who's sliding down right now.`}
      </p>
      <div className="my-8">
        <AreaList areas={areas} />
      </div>
    </section>
  )
}
