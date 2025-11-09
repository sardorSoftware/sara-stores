// components/ClientProviderWrapper.tsx (client component)
"use client"

import { ProductProvider } from "@/context/ProductContext"

export default function ClientProviderWrapper({ children }: { children: React.ReactNode }) {
  return <ProductProvider>{children}</ProductProvider>
}
