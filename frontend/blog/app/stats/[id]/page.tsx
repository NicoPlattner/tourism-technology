import { notFound } from 'next/navigation';
import { getUser } from 'app/areas/utils';
import SkierCard from 'app/components/SkierCard/SkierCard';

export default async function AreaPage({ params }: { params: { id: string } }) {
  const user = await getUser(params.id);

  if (!user) {
    notFound();
  }

  return (
    <section>
      <SkierCard data={user} />
    </section>
  );
}