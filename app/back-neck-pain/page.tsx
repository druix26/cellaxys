import { ContentPage, pageMetadata } from "../site";

export const dynamic = "force-static";

export const metadata = pageMetadata["back-neck-pain"];

export default function Page() {
  return <ContentPage slug="back-neck-pain" />;
}
