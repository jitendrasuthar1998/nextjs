import React from 'react'
import Link from "next/link";

export default function Blog() {
  console.log("blog rendered on server side");
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        <li><Link href={"/blog/first"}>First Blog</Link></li>
        <li><Link href={"/blog/second"}>Second Blog</Link></li>
      </ul>
    </div>
  )
}
