import "./globals.css";
import { ReactNode } from "react";
export const metadata = {
  title: "chin Wag",
  description: "chin-wag",
  metadataBase: new URL("https://herbert-1.vercel.app/"),
  openGraph: {
    images: "/home-meta-img.webp",
  },
};
interface RootLayoutProps {
  children: ReactNode;
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
