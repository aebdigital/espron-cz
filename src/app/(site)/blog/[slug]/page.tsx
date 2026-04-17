import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { getBlogPostBySlug } from "@/lib/cms-blog-posts";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ preview?: string }>;
};

export async function generateMetadata({
  params,
  searchParams,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const { preview } = await searchParams;
  const post = await getBlogPostBySlug(slug, {
    includeDrafts: preview === "1",
  });
  if (!post) return {};
  return {
    title: `${post.title} | ESPRON`,
    description: post.excerpt || undefined,
  };
}

export default async function BlogPostPage({
  params,
  searchParams,
}: PageProps) {
  const { slug } = await params;
  const { preview } = await searchParams;

  const post = await getBlogPostBySlug(slug, {
    includeDrafts: preview === "1",
  });

  if (!post) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-dark pb-18 pt-28 text-white md:pb-24 md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_34%),linear-gradient(120deg,rgba(255,255,255,0.06),transparent_26%)]" />
        <div className="relative mx-auto w-[92%]">
          <Link
            href="/blog"
            className="animate-fade-up mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/50 transition-colors hover:text-white"
          >
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Blog
          </Link>
          <p className="animate-fade-up-delay-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/55">
            {post.category}
          </p>
          <h1 className="animate-fade-up-delay-2 mt-4 max-w-4xl text-3xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            {post.title}
          </h1>
          {post.reading_time && (
            <p className="animate-fade-up-delay-3 mt-5 text-xs text-white/50">
              {post.reading_time} čítania
            </p>
          )}
        </div>
      </section>

      {/* Cover image */}
      {post.cover_image && (
        <div className="mx-auto w-[92%] max-w-5xl -mt-8 md:-mt-12">
          <div className="relative aspect-[16/7] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={post.cover_image}
              alt={post.title}
              fill
              sizes="(max-width: 1024px) 92vw, 1024px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* Article */}
      <article className="mx-auto w-[92%] max-w-3xl py-16 md:py-24">
        {post.excerpt && (
          <AnimateOnScroll>
            <p className="mb-10 text-base leading-8 text-foreground/75">
              {post.excerpt}
            </p>
          </AnimateOnScroll>
        )}

        <AnimateOnScroll delay={40}>
          <div
            className="espron-blog-body"
            dangerouslySetInnerHTML={{ __html: post.content_html }}
          />
        </AnimateOnScroll>

        <AnimateOnScroll className="mt-16" delay={80}>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-opacity hover:opacity-70"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Späť na blog
          </Link>
        </AnimateOnScroll>
      </article>

      <style>{`
        .espron-blog-body h2 {
          margin: 2.75rem 0 1.25rem;
          font-size: 1.25rem;
          font-weight: 700;
          line-height: 1.3;
          color: var(--color-foreground);
        }
        .espron-blog-body h3 {
          margin: 2rem 0 0.75rem;
          font-size: 1rem;
          font-weight: 700;
          color: var(--color-foreground);
        }
        .espron-blog-body p {
          margin: 0 0 1rem;
          font-size: 0.875rem;
          line-height: 1.75;
          color: color-mix(in oklab, var(--color-foreground) 75%, transparent);
        }
        .espron-blog-body strong {
          font-weight: 700;
          color: var(--color-foreground);
        }
        .espron-blog-body em { font-style: italic; }
        .espron-blog-body ul {
          margin: 1rem 0 1.5rem;
          padding-left: 1.25rem;
          list-style: none;
        }
        .espron-blog-body ul li {
          position: relative;
          padding-left: 1.25rem;
          font-size: 0.875rem;
          line-height: 1.75;
          color: color-mix(in oklab, var(--color-foreground) 75%, transparent);
          margin-bottom: 0.5rem;
        }
        .espron-blog-body ul li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.6rem;
          width: 0.45rem;
          height: 0.45rem;
          border-radius: 9999px;
          background: var(--color-primary);
        }
        .espron-blog-body a {
          color: var(--color-primary);
          text-decoration: underline;
          text-underline-offset: 3px;
        }
      `}</style>
    </>
  );
}
