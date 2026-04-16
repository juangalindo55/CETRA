import { getClinicSchema } from '@/lib/site';

export default function SeoSchema() {
  const schema = getClinicSchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
