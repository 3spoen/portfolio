import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: " Omar Alali's Portfolio",
  description: "Discover Omar Alali's portfolio: a blend of innovative design and tech. See how creativity and expertise shape impactful digital experiences.",
  image:"https://www.3spoen.de/images/LOGO_2.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <Analytics />
      </body>
    </html>
  );
}
