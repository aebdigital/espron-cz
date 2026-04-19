import type { LegacyGalleryItem } from "@/lib/legacy-gallery-data";

export const FEATURED_FACADE_IMAGE =
  "/images/realizacie/b0408c_2883303b07a4489798740af9878cc2db~mv2.avif";

type ServicePageMedia = {
  preview: string;
  items: LegacyGalleryItem[];
};

export const SERVICE_PAGE_MEDIA: Record<string, ServicePageMedia> = {};

export function getServicePreviewImage(
  href: string,
  fallback: string,
): string {
  return SERVICE_PAGE_MEDIA[href]?.preview ?? fallback;
}
