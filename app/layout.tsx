import type { Metadata } from "next";
import "./globals.css";
import { site } from "../config/site";

export const metadata: Metadata = {
  title: "Bean’s Lawn Care Services | Lawn Care in League City, TX",
  description:
    "Family-owned lawn care and landscaping in League City, TX. Mowing, trimming, edging, clean-ups, mulch, flower bed refreshes and shrub trimming. Request a free estimate.",
  robots: site.previewMode
    ? { index: false, follow: false, nocache: true }
    : { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
