import type { Metadata } from "next";
import { HomePage } from "./site";

export const metadata: Metadata = {
  title: "Cellaxys | A Second Look Before Surgery",
  description: "Physician-led, imaging-based Stem Cell Therapy in Las Vegas for knee, back and neck, and sports injury patients.",
};

export default function Home() {
  return <HomePage />;
}
