import Nabar from "@/components/Nabar";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HaZo Dashboard ",
  description: "Youssef HaZo Dashbaord",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nabar/>
        <div className="flex">
          <div className=" hidden md:block h-screen w-[300px]">
            <Sidebar/>
          </div>
          <div className="w-full md:max-w-[1140px] p-5 ">
            {children}
          </div>
        </div>
       
      </body>
    </html>
  );
}
