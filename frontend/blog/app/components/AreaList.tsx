// In 'app/components/AreaList.tsx'

import Link from 'next/link';

type Area = {
  publishedAt: string;
  region: string;
  slug: string;
  name: string;
  summary: string;
  image?: string;
};

type AreaListProps = {
  areas: Area[];
  regionSlug?: string;
};

export function AreaList({ areas, regionSlug }: AreaListProps) {
  return (
    <div>
      {areas.map((area) => (
        <Link
          key={area.slug}
          className="flex flex-col space-y-1 mb-4"
          href={`/areas/${regionSlug ?? area.region}/${area.slug}`} 
        >
          <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {area.name}
            </p>
            <p className="text-neutral-500">{area.region}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}