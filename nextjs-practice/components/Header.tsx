"use client";
import React from 'react'
import Link from "next/link";

const Header = () => {
  return (
    <header>
        <ul>
            <li><Link href={"/about"}>About</Link></li>
            <li><Link href={"/dashboard"}>Dashboard</Link></li>
            <li><Link href={"/profile"}>Profile</Link></li>
            <li><Link href={"/blog"}>Blog</Link></li>
            <li><Link href={"/docs/123"}>Docs</Link></li>
            <li><Link href={"/comments"}>Comments</Link></li>
            <li><Link href={"/products"}>Products</Link></li>
        </ul>
    </header>
  )
}

export default Header