import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import TimelineContextProvider from "@/lib/contexts/TimelineContextProvider";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KeenKeeper",
  description:
    "KeenKeeper helps you manage and stay connected with your friends by tracking interactions, reminders, and meaningful relationships.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAFAFA]">
        <Navbar />
        <main className="container mx-auto space-y-20 ">
          <TimelineContextProvider>{children}</TimelineContextProvider>
        </main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
