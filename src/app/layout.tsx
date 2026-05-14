import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "SaladGo - Fresh Salads Delivered in 20 Minutes",
  description: "Order fresh salads, vegetables, and healthy food delivered to your doorstep in 20 minutes",
  openGraph: {
    title: "SaladGo - Fresh Salads Delivered Fast",
    description: "Premium quality salads and farm vegetables",
    images: [{ url: "/og-image.jpg" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#16a34a" />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
