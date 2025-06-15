import React from 'react'

function getRandomInt(count: number){
  return 2;
  // return Math.floor(Math.random() * count);
}

export default async function ReviewDetails({params}:{params:Promise<{productId:string, reviewId:string}>}) {

  const randomNumber = getRandomInt(2);
  console.log("randomNumber", randomNumber);
  if(randomNumber == 2){
    throw new Error("loading product review error");
  }

  const {productId, reviewId} = await params;
  return (
    <div>
      <h2>Details about product {productId} Review details {reviewId}</h2>
    </div>
  )
}
