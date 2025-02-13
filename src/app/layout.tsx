import type { Metadata } from "next";
import "./globals.css";
import Header from "./Components/Header";

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "Example Next.js app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className="flex flex-col min-h-screen">
        <Header />
        {children}
      </body>
    </html>
  );
}
