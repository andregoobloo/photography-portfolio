import type { Metadata } from "next";
import { Bacasime_Antique } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbar";

const bacasime = Bacasime_Antique({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "Andre Holzthum | %s",
    default: "Andre Holzthum Photography",
  },
  description: "Photography Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bacasime.className} antialiased  text-zinc-100 bg-zinc-900`}
      >
        <header>
          <Navbar />
        </header>
        <main className="mb-10">{children}</main>
      </body>
    </html>
  );
}
