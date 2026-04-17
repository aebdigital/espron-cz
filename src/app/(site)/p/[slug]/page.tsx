import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getVisualPageBySlug } from "@/lib/cms-visual-pages";
import { VisualElementTree } from "@/components/site/VisualElementRenderer";

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
  const page = await getVisualPageBySlug(slug, {
    includeDrafts: preview === "1",
  });
  if (!page) return {};
  return { title: page.title };
}

export default async function CmsVisualPage({
  params,
  searchParams,
}: PageProps) {
  const { slug } = await params;
  const { preview } = await searchParams;

  const page = await getVisualPageBySlug(slug, {
    includeDrafts: preview === "1",
  });

  if (!page) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-16">
      <VisualElementTree elements={page.elements ?? []} />
    </main>
  );
}
