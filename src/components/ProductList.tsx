"use client"

import { useState } from "react"
import { useProducts } from "@/context/ProductContext"
import ProductCard from "./ProductCard"

interface ProductListProps {
  category: "all" | "iphone" | "accessories"
}

export default function ProductList({ category }: ProductListProps) {
  const { products } = useProducts()
  const [visibleProducts, setVisibleProducts] = useState(3)

  const filteredByCategory =
    category === "all"
      ? products
      : products.filter((product) => product.category === category)

  const displayedProducts = filteredByCategory.slice(0, visibleProducts)

  const loadMore = () => setVisibleProducts((prev) => prev + 3)

  return (
    <div className="product-list-container">
      <div className="product-list">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {visibleProducts < filteredByCategory.length && (
        <button onClick={loadMore} className="load-more-btn">
          View more
        </button>
      )}
    </div>
  )
}
