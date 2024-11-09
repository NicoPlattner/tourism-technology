// In 'app/[region]/page.tsx'

import {  getSkiAreas } from 'app/areas/utils';
import { AreaList } from 'app/components/AreaList';

type RegionPageProps = {
  params: {
    region: string;
  };
};

export const metadata = {
  title: 'Areas',
  description: 'Choose an area.',
};

export default async function RegionPage({ params }: RegionPageProps) {
  const { region } = params;
  const areas = getSkiAreas().filter((area) => area.region === region);

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Areas where we slide</h1>
      <AreaList areas={areas} regionSlug={region} />
    </section>
  );
}