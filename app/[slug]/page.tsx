import type { Metadata } from "next";
import { ContentPage, pageMetadata, pageSlugs, type PageSlug } from "../site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return pageSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = pageMetadata[slug as PageSlug];
  if (!page) return { title: "Page Not Found | Cellaxys" };
  return page;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!pageSlugs.includes(slug as PageSlug)) {
    return (
      <main className="not-found-page">
        <h1>That page could not be found.</h1>
        <a href="/">Return to Cellaxys</a>
      </main>
    );
  }
  return <ContentPage slug={slug as PageSlug} />;
}
