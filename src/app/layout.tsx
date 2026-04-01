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
    "I help businesses grow through relationships and systems. Speaker, author, coach, and co-founder of the WARM Method.",
  openGraph: {
    title: "Mike Abramowitz | Relationships, Systems, Results",
    description:
      "I help businesses grow through relationships and systems. Speaker, author, coach, and co-founder of the WARM Method.",
    type: "website",
    url: "https://mikeabramowitz.com",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mike Abramowitz | Relationships, Systems, Results",
    description:
      "I help businesses grow through relationships and systems. Speaker, author, coach, and co-founder of the WARM Method.",
    images: ["/og-image.png"],
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
