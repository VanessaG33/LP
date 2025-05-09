import Nav from "@/components/Nav";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "L’école des conciergeries",
  description: "Developed by LaLanding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${nunito.variable} `}>
        <Analytics />
        <Nav />
        {children}
      </body>
    </html>
  );
}
