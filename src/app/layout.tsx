import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chin Wag",
  description: "chin-wag",
  metadataBase: new URL("https://chinwag-eta.vercel.app/"),
  openGraph: {
    images: ["/home-meta-img.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
