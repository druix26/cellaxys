import { ContentPage, pageMetadata } from "../site";

export const dynamic = "force-static";

export const metadata = pageMetadata.book;

export default function Page() {
  return <ContentPage slug="book" />;
}
