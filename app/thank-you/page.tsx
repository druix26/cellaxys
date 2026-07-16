import { ContentPage, pageMetadata } from "../site";

export const dynamic = "force-static";

export const metadata = pageMetadata["thank-you"];

export default function Page() {
  return <ContentPage slug="thank-you" />;
}
