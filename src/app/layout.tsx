import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TrollFactory",
  description: "An amazingly accurate fake personalities generator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
