import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Montserrat, Manrope } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", 
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat", 
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope", 
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pacot Blog",
  description: "Personal blog website proudly developed by Evane Pacot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${inter.variable} 
          ${montserrat.variable} 
          ${manrope.variable}
          antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
