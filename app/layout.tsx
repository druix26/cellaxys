import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "cellaxys.com";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    title: {
      default: "Cellaxys | A Second Look Before Surgery",
      template: "%s | Cellaxys",
    },
    description: "Physician-led, imaging-based regenerative care in Las Vegas.",
    icons: {
      icon: "https://cellaxys.com/favicon.ico",
      shortcut: "https://cellaxys.com/favicon.ico",
    },
    openGraph: {
      type: "website",
      url: origin,
      siteName: "Cellaxys",
      title: "Cellaxys | A Second Look Before Surgery",
      description: "Physician-led regenerative care in Las Vegas.",
      images: [{ url: `${origin}/og.png`, width: 1731, height: 909, alt: "Cellaxys - A second look before surgery" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Cellaxys | A Second Look Before Surgery",
      description: "Physician-led regenerative care in Las Vegas.",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
