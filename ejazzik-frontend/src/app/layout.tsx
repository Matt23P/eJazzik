import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "rsuite/dist/rsuite.css";
import CookieConsent from "@/components/global/cookie";

const inter = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "eJazzik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <CookieConsent />
    </html>
  );
}
