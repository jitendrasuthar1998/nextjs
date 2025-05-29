import React from 'react'

export default async function ReviewDetails({params}:{params:Promise<{productId:string, reviewId:string}>}) {
  const {productId, reviewId} = await params;
  return (
    <div>
      <h2>Details about product {productId} Review details {reviewId}</h2>
    </div>
  )
}
