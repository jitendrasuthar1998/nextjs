import React from 'react'

export default async function ProductDetails({params}:{params:Promise<{productId:string}>}) {
  const {productId} = await params;
  return (
    <div>
      <h2>Details about product {productId}</h2>
    </div>
  )
}
