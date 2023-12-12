import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Philipp Jonczyk",
  description:
    "Philipp Jonczyk is a software engineer who builds accessible, modern products and digital experiences for the web.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={
          "bg-slate-900 text-slate-400 leading-relaxed selection:bg-teal-300 selection:text-teal-900" +
          " " +
          inter.className
        }
      >
        <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24 pt-8 sm:pt-0">
          {children}
        </div>
      </body>
    </html>
  );
}
