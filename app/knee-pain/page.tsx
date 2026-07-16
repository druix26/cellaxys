import { ContentPage, pageMetadata } from "../site";

export const dynamic = "force-static";

export const metadata = pageMetadata["knee-pain"];

export default function Page() {
  return <ContentPage slug="knee-pain" />;
}
