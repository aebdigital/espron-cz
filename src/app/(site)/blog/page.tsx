import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { listBlogPosts } from "@/lib/cms-blog-posts";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog | ESPRON",
  description:
    "Tipy, postupy a naše zkušenosti ze světa zateplování, rekonstrukcí a stavebních prací.",
};

const FALLBACK_COVER =
  "/images/realizacie/b0408c_2883303b07a4489798740af9878cc2db~mv2.avif";

export default async function BlogPage() {
  const posts = await listBlogPosts();

  return (
    <main>
      {/* Header */}
      <section className="relative overflow-hidden bg-primary-dark pb-18 pt-28 text-white md:pb-24 md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_34%),linear-gradient(120deg,rgba(255,255,255,0.06),transparent_26%)]" />
        <div className="relative mx-auto w-[92%]">
          <p className="animate-fade-up text-[11px] font-semibold uppercase tracking-[0.3em] text-white/55">Blog</p>
          <h1 className="animate-fade-up-delay-1 mt-5 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            Tipy, postupy a naše zkušenosti
          </h1>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 md:py-28">
        <div className="mx-auto w-[92%]">
          {posts.length === 0 ? (
            <p className="text-center text-foreground/60">Zatím tu nejsou žádné články.</p>
          ) : (
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {posts.map((post, idx) => (
                <AnimateOnScroll key={post.id} delay={idx * 40}>
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-3xl">
                      <Image
                        src={post.cover_image || FALLBACK_COVER}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 92vw, (max-width: 1024px) 46vw, 30vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      <span className="absolute left-5 top-5 rounded-full bg-primary/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary md:text-2xl">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="mb-5 text-sm leading-7 text-foreground/65 line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Číst článek
                      <svg
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </Link>
                </AnimateOnScroll>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
