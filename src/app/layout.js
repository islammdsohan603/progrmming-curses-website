import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/comonentes/Navbar";
import Footer from "@/comonentes/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EduBangli | Course Platform",
  description: "বাংলা ভাষায় প্রজেক্ট-বেইজড টেক কোর্স ও মেন্টরশিপ প্ল্যাটফর্ম।",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="bn"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-950">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
