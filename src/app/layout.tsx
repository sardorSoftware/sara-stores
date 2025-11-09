import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/styles/globals.css"
import { ProductProvider } from "@/context/ProductContext"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sara Store",
  description: "E-commerce catalog built with Next.js",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ProductProvider>
          <Header />
          <main className="main-content">{children}</main>
          <Footer />
        </ProductProvider>
      </body>
    </html>
  )
}
