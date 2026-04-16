import type { ReactNode } from "react";
import PageHeader from "@/components/site/PageHeader";
import PageFooter from "@/components/site/PageFooter";
import CtaBanner from "@/components/site/CtaBanner";

export default function SiteLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <PageHeader />
      {children}
      <CtaBanner />
      <PageFooter />
    </>
  );
}
