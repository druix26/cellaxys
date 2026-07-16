import { ContentPage, pageMetadata } from "../site";

export const dynamic = "force-static";

export const metadata = pageMetadata["how-it-works"];

export default function Page() {
  return <ContentPage slug="how-it-works" />;
}
