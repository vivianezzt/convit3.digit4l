import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const font = Inter ({
  subsets: ['latin-ext']
})

export const metadata: Metadata = {
  title: "Seu evento começa aqui",
  description: "Aplicação de eventos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
