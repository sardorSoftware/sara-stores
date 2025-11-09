"use client"

import Link from "next/link"
import Image from "next/image"

export default function Header() {
    return (
        <header className="header">
        <div className="container">
        <Link href="/" className="logo">
        <Image src="/logo.png" alt="Sara Store" width={40} height={40} />
        <span>Sara Store</span>
        </Link>
        
        <nav className="nav">
        <a href="#all" className="nav-link">All</a>
        <a href="#iphone" className="nav-link">iPhones</a>
        <a href="#accessories" className="nav-link">Accessories</a>
        </nav>
        </div>
        </header>
    )
}
