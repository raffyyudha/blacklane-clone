import type { Metadata } from "next";
import "./globals.css";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

export const metadata: Metadata = {
  title: "The Global Chauffeur Service | AMAQ",
  description: "Professional chauffeurs for business and leisure across 60+ countries. We'll take care of the details so you can arrive at your best.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
