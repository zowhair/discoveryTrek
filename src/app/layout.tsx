import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./component/navbar/nav";
import Footer from "./component/footer/footer";
import Messege from "./component/messege/messege";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        
        {children}
        {/* <Messege /> */}
        
        <Footer />
        </body>
    </html>
  );
}
