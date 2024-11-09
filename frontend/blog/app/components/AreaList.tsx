"use client";

import { useState } from "react";
import { AreaCard } from "./AreaCard";

type Area = {
  name: string;
  publishedAt: string;
  summary: string;
  image?: string;
  region: string;
  slug: string;
};

type AreaListProps = {
  areas: Area[];
  regionSlug?: string;
};

export function AreaList({ areas, regionSlug }: AreaListProps) {
  const [activeCard, setActiveCard] = useState<Area | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {areas.map((area) => (
        <AreaCard
          key={area.slug}
          area={area}
          regionSlug={regionSlug}
          isActive={activeCard?.slug === area.slug}
          setActiveCard={setActiveCard}
        />
      ))}
    </div>
  );
}