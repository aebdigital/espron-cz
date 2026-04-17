import { supabaseServer } from "./supabase-server";

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  reading_time: string;
  cover_image: string | null;
  content_html: string;
  is_published: boolean;
  created_at: string;
  updated_at: string;
};

export async function listBlogPosts(
  { includeDrafts = false }: { includeDrafts?: boolean } = {},
): Promise<BlogPost[]> {
  let query = supabaseServer
    .from("espron_blog_posts")
    .select("*")
    .order("updated_at", { ascending: false });
  if (!includeDrafts) {
    query = query.eq("is_published", true);
  }
  const { data, error } = await query;
  if (error) {
    console.error("listBlogPosts failed", error);
    return [];
  }
  return (data ?? []) as BlogPost[];
}

export async function getBlogPostBySlug(
  slug: string,
  { includeDrafts = false }: { includeDrafts?: boolean } = {},
): Promise<BlogPost | null> {
  let query = supabaseServer
    .from("espron_blog_posts")
    .select("*")
    .eq("slug", slug);
  if (!includeDrafts) {
    query = query.eq("is_published", true);
  }
  const { data, error } = await query.maybeSingle();
  if (error) {
    console.error("getBlogPostBySlug failed", error);
    return null;
  }
  return (data as BlogPost) ?? null;
}
