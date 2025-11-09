"use client"  // Client component ekanligini aniq belgilaymiz

import Image from "next/image"
import Link from "next/link"
import { useProducts, Product } from "@/context/ProductContext"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

interface ProductDetailPageProps {
    params: { id: string }
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
    const productId = Number(params.id)
    const { products } = useProducts()
    const [product, setProduct] = useState<Product | undefined>(undefined)
    
    useEffect(() => {
        const found = products.find((p) => p.id === productId)
        setProduct(found)
    }, [products, productId])
    
    if (!product) {
        return <div className="product-detail">Product not found</div>
    }
    
    return (
        <div className="product-detail">
        <Link href="/" className="back-btn">
        Back to products
        </Link>
        
        <div className="product-card detail">
        <div className="product-image">
        <Image
        src={product.image || "/placeholder.svg?height=320&width=320&text=No+Image"}
        alt={product.name}
        width={320}
        height={320}
        className="image"
        />
        </div>
        
        <div className="product-info">
        <h1 className="product-name">{product.name}</h1>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p className="product-description">{product.description || "No description available."}</p>
        </div>
        </div>
        </div>
    )
}
