import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carnice Cakes",
  description: "Creating Sweet Moments Of Life - Custom celebration cakes that bring your dreams to life.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
