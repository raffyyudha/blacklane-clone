import type { Metadata } from "next";
import "./globals.css";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

export const metadata: Metadata = {
  title: "The Global Chauffeur Service | Blacklane",
  description: "Professional chauffeurs for business and leisure across 60+ countries. We'll take care of the details so you can arrive at your best.",
  icons: {
    icon: "https://ext.same-assets.com/3320819198/211296241.ico",
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
