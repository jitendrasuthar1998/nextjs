import React from 'react'
import Link from "next/link";

export default function Products() {
  return (
    <div>
        <h1>Product list</h1>
        <ul>
          <li><Link href={"/products/1"}>Product 1</Link></li>
          <li><Link href={"/products/2"}>Product 2</Link></li>
          <li><Link href={"/products/3"}>Product 3</Link></li>
          <li><Link href={"/products/4"}>Product 4</Link></li>
        </ul>
        
        
        
        
    </div>
  )
}
