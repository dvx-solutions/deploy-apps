import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Link from "next/link";

import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

import "@/main.css";
import { Providers } from "@/components/providers";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Devex Deploy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="h-screen w-screen p-8">
        <Providers>
          <header className="flex justify-between w-full mb-4 gap-2">
            <div>
              <Link href={"/"}>
                <Button variant="link">Deploy</Button>
              </Link>

              <Link href={"/portal"}>
                <Button variant="link">Portal</Button>
              </Link>
            </div>

            <ThemeToggle />
          </header>

          {children}
        </Providers>
      </body>
    </html>
  );
}
