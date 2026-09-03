import { ImageResponse } from 'next/og';
import { getAllPosts, getPostBySlug, getCategory } from '@/lib/blog';
import { getAuthor } from '@/lib/authors';

export const alt = 'CETRA — Artículo de Medicina Respiratoria y Trasplante';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  const title = post?.frontmatter.title ?? 'Artículo de Salud Respiratoria';
  const categorySlug = post?.frontmatter.category;
  const category = categorySlug ? getCategory(categorySlug) : null;
  const categoryLabel = category?.label ?? 'Medicina Respiratoria';

  const author = post?.frontmatter.author ? getAuthor(post.frontmatter.author) : null;
  const authorName = author?.name ?? 'Equipo Médico CETRA';
  const authorRole = author?.role ?? 'Especialista en Neumología';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          background: 'linear-gradient(135deg, #150928 0%, #2A104E 50%, #150928 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Subtle decorative border / frame */}
        <div
          style={{
            position: 'absolute',
            top: 24,
            left: 24,
            right: 24,
            bottom: 24,
            border: '1px solid rgba(216, 180, 254, 0.15)',
            borderRadius: 16,
            pointerEvents: 'none',
          }}
        />

        {/* Top Header: Brand & Category */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 8,
                background: 'linear-gradient(135deg, #A855F7 0%, #7C3AED 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                fontSize: 22,
                color: '#ffffff',
              }}
            >
              C
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  letterSpacing: '0.15em',
                  color: '#ffffff',
                }}
              >
                CETRA
              </span>
              <span
                style={{
                  fontSize: 11,
                  letterSpacing: '0.08em',
                  color: 'rgba(255, 255, 255, 0.65)',
                  textTransform: 'uppercase',
                }}
              >
                Medicina Respiratoria & Trasplante
              </span>
            </div>
          </div>

          <div
            style={{
              padding: '6px 16px',
              borderRadius: 9999,
              background: 'rgba(168, 85, 247, 0.18)',
              border: '1px solid rgba(192, 132, 252, 0.35)',
              fontSize: 14,
              fontWeight: 600,
              color: '#E9D5FF',
              letterSpacing: '0.03em',
            }}
          >
            {categoryLabel}
          </div>
        </div>

        {/* Center: Title & Description */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 1020 }}>
          <h1
            style={{
              fontSize: title.length > 55 ? 44 : 52,
              lineHeight: 1.15,
              fontWeight: 700,
              color: '#ffffff',
              margin: 0,
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </h1>
          {post?.frontmatter.description && (
            <p
              style={{
                fontSize: 20,
                lineHeight: 1.4,
                color: 'rgba(233, 213, 255, 0.85)',
                margin: 0,
                maxWidth: 960,
              }}
            >
              {post.frontmatter.description.length > 140
                ? `${post.frontmatter.description.slice(0, 140)}...`
                : post.frontmatter.description}
            </p>
          )}
        </div>

        {/* Bottom Footer: Author & Web URL */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            paddingTop: 20,
            borderTop: '1px solid rgba(255, 255, 255, 0.12)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 22,
                background: '#4C1D95',
                border: '2px solid rgba(192, 132, 252, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 18,
                fontWeight: 700,
                color: '#E9D5FF',
              }}
            >
              Dr
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: 16, fontWeight: 700, color: '#ffffff' }}>
                {authorName}
              </span>
              <span style={{ fontSize: 13, color: 'rgba(255, 255, 255, 0.65)' }}>
                {authorRole}
              </span>
            </div>
          </div>

          <div
            style={{
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: '0.04em',
              color: '#C084FC',
            }}
          >
            cetrapulmonar.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
