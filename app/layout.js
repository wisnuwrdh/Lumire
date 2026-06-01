import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Lumière — Glow Serum untuk Kulit Sehat & Cerah",
  description: "Lumière Glow Serum dirancang khusus untuk perempuan usia 18–25 yang ingin kulit cerah, halus, dan sehat setiap hari.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${cormorant.variable} ${dmSans.variable} antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
