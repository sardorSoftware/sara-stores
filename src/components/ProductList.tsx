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

  if (!products) {
    return <p>Loading products...</p>
  }

  const filteredByCategory =
    category === "all"
      ? products
      : products.filter((product) => product.category === category)

  if (filteredByCategory.length === 0) {
    return <p>No products found in this category.</p>
  }

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
