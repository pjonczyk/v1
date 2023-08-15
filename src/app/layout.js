import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Philipp Jonczyk",
  description:
    "Philipp Jonczyk is a software engineer who builds accesible, modern products and digital experiences for the web.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"bg-slate-900 text-slate-400 " + inter.className}>
        {children}
      </body>
    </html>
  );
}
