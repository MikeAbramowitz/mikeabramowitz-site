import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mike Abramowitz | Relationships, Systems, Results",
  description:
    "I help businesses grow through relationships and systems. 20+ years building sales organizations, launching communities, and helping business owners create predictable growth.",
  openGraph: {
    title: "Mike Abramowitz | Relationships, Systems, Results",
    description:
      "I help businesses grow through relationships and systems. 20+ years building sales organizations, launching communities, and helping business owners create predictable growth.",
    type: "website",
    url: "https://mikeabramowitz.com",
    /* Replace with Mike's OG image (1200x630) */
    // images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
