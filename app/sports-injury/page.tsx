import { ContentPage, pageMetadata } from "../site";

export const dynamic = "force-static";

export const metadata = pageMetadata["sports-injury"];

export default function Page() {
  return <ContentPage slug="sports-injury" />;
}
