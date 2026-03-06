import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CraftPageClient from "@/components/CraftPageClient";
import { craftItems, getCraftBySlug, getCraftSlugs } from "@/lib/craftData";

export function generateStaticParams() {
  return getCraftSlugs();
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const craft = getCraftBySlug(params.slug);

  if (!craft) {
    return {
      title: "Craft — Bakerist",
      description: "Explore the Bakerist craft selection.",
    };
  }

  return {
    title: `${craft.title} — Bakerist`,
    description: craft.sub,
    openGraph: {
      title: `${craft.title} — Bakerist`,
      description: craft.sub,
      images: [craft.img],
    },
  };
}

export default function CraftPage({
  params,
}: {
  params: { slug: string };
}) {
  const craft = getCraftBySlug(params.slug);
  if (!craft) notFound();

  const otherCrafts = craftItems.filter((c) => c.slug !== craft.slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <CraftPageClient craft={craft} otherCrafts={otherCrafts} />
      <Footer />
    </>
  );
}

