import { getAllPosts } from '@/lib/blog';
import { SITE_NAME, getAbsoluteUrl } from '@/lib/site';

/** El feed se genera en build junto con el resto del sitio estático. */
export const dynamic = 'force-static';

const FEED_TITLE = `${SITE_NAME} — Blog clínico`;
const FEED_DESCRIPTION =
  'Artículos sobre trasplante pulmonar, enfermedades respiratorias y estudios diagnósticos, escritos y revisados por el equipo médico de CETRA.';

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function toRfc822(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00Z`).toUTCString();
}

export function GET() {
  const posts = getAllPosts();
  const feedUrl = getAbsoluteUrl('/blog/rss.xml');
  const lastBuildDate = posts.length > 0 ? toRfc822(posts[0].frontmatter.lastUpdated) : undefined;

  const items = posts
    .map((post) => {
      const url = getAbsoluteUrl(`/blog/${post.slug}`);

      return `    <item>
      <title><![CDATA[${post.frontmatter.title}]]></title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <pubDate>${toRfc822(post.frontmatter.publishedAt)}</pubDate>
      <category><![CDATA[${post.category.label}]]></category>
      <dc:creator><![CDATA[${post.author.name}]]></dc:creator>
      <description><![CDATA[${post.frontmatter.description}]]></description>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title><![CDATA[${FEED_TITLE}]]></title>
    <link>${escapeXml(getAbsoluteUrl('/blog'))}</link>
    <description><![CDATA[${FEED_DESCRIPTION}]]></description>
    <language>es-MX</language>
    <copyright>© ${new Date().getUTCFullYear()} ${escapeXml(SITE_NAME)}</copyright>
    <atom:link href="${escapeXml(feedUrl)}" rel="self" type="application/rss+xml" />
${lastBuildDate ? `    <lastBuildDate>${lastBuildDate}</lastBuildDate>\n` : ''}${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
