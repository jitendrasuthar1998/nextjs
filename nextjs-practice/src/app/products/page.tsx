import React from "react";
import Link from "next/link";

export default async function Products() {
  // fetching data from api call like from database, and taking lot of times.

  let products = null;
  try {
    const res = await fetch("https://dummyjson.com/products");  
    const data = await res.json();
    products = data.products;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error:unknown) {
    throw new Error("error in products route");
  }
  
  return (
    <div>
      <h1>Product list</h1>
      <ul>
        {products.map((product: { id: string; title: string }) => (
          <li key={product?.id}>
            <Link href={`products/${product.id}`}>{product.title}</Link>
          </li>
        ))}

        {/* <li>
          <Link href={"/products/2"}>Product 2</Link>
        </li>
        <li>
          <Link href={"/products/3"}>Product 3</Link>
        </li>
        <li>
          <Link href={"/products/4"}>Product 4</Link>
        </li> */}
      </ul>
    </div>
  );
}
