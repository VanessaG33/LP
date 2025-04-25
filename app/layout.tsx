import Nav from "@/components/Nav";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "La conciergerie",
  description: "Developed by LaLanding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <script
        type="text/javascript"
        src="https://app.iclosed.io/assets/widget.js"
        async
      ></script>
      <body className={`${nunito.variable} `}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
