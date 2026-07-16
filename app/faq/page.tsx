import { ContentPage, pageMetadata } from "../site";

export const dynamic = "force-static";

export const metadata = pageMetadata.faq;

export default function Page() {
  return <ContentPage slug="faq" />;
}
