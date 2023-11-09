import type { Metadata } from "next";

import { Inter as FontSans } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

import "@/main.css";
import { AddApplicationPopover } from "@/components/add-application-popover";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="flex justify-end w-full mb-16 gap-2">
            <AddApplicationPopover />
            <ThemeToggle />
          </header>

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
