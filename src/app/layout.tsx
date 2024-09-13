import type { Metadata } from "next";

import { Poppins } from "next/font/google";

import "./globals.css";

import { cn } from "@/lib/utils";
import Footer from "@/components/Footer/footer";
import SideHeader from "@/components/Header/side-header";
import TopHeader from "@/components/Header/top-header";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Avis Car Rental",

  description:
    "Avis Car Rental, LLC is an American car rental company headquartered in Parsippany, New Jersey. Along with Budget Rent a Car, Budget Truck Rental and Zipcar, Avis is a unit of Avis Budget Group.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen antalised", poppins.className)}>
        <TopHeader />
        <SideHeader />
        {children}

        <Footer />
      </body>
    </html>
  );
}
