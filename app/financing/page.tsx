import { ContentPage, pageMetadata } from "../site";

export const dynamic = "force-static";

export const metadata = pageMetadata.financing;

export default function Page() {
  return <ContentPage slug="financing" />;
}
