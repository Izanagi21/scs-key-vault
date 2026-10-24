import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/data/site";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], display: "swap", variable: "--font-jetbrains" });
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: site.title,
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: `${site.school}, ${site.college}` }],
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_PH", url: "/", siteName: site.name, title: site.title, description: site.description, images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: site.ogAlt }] },
  twitter: { card: "summary_large_image", title: site.title, description: site.description, images: ["/images/og-image.png"] },
  icons: { icon: [{ url: "/favicon.ico", sizes: "32x32" }, { url: "/logo.svg", type: "image/svg+xml" }] },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: "#0a0a0f", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${inter.variable} ${mono.variable}`}><body id="top">
    <a className="skip-link" href="#main-content">{site.skip}</a><Navbar />{children}<Footer />
  </body></html>;
}
