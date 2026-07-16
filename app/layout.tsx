import type { Metadata } from "next";
import "./globals.css";

const siteOrigin =
  process.env.NEXT_PUBLIC_SITE_ORIGIN ??
  "https://cellaxys-storybrand.maureen-santos22.chatgpt.site";

export const dynamic = "force-static";

export const metadata: Metadata = {
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
    url: siteOrigin,
    siteName: "Cellaxys",
    title: "Cellaxys | A Second Look Before Surgery",
    description: "Physician-led regenerative care in Las Vegas.",
    images: [{ url: `${siteOrigin}/og.png`, width: 1731, height: 909, alt: "Cellaxys - A second look before surgery" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cellaxys | A Second Look Before Surgery",
    description: "Physician-led regenerative care in Las Vegas.",
    images: [`${siteOrigin}/og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
