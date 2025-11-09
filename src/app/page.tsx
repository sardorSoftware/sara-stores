"use client"

import ProductList from "@/components/ProductList"

export default function HomePage() {
  return (
    <div className="home-page">
      <section id="all" className="section-block">
        <div className="section-header">
          <h2>All Products</h2>
          <div className="arrows">
            <span>→</span>
          </div>
        </div>
        <ProductList category="all" />
      </section>

      <section id="iphone" className="section-block">
        <div className="section-header">
          <h2>iPhones</h2>
          <div className="arrows">
            <span>→</span>
          </div>
        </div>
        <ProductList category="iphone" />
      </section>

      <section id="accessories" className="section-block">
        <div className="section-header">
          <h2>Accessories</h2>
          <div className="arrows">
            <span>→</span>
          </div>
        </div>
        <ProductList category="accessories" />
      </section>
    </div>
  )
}
