import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import { Provider } from "@/providers/nextUIProvider";
import "./globals.css";

import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "IT-Аутсорсинг компания Udevs - IT консалтинг, разработка мобильных приложений",
  description: "Description of the project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="shortcut icon"
          href="/udevs-logo.svg"
          type="image/x-icon"
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
