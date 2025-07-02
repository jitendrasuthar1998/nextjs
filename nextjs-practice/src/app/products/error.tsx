"use client";

export default function ErrorBoundary({error}:{error:Error}){
    return (<div>Error in Product Review {error.message}</div>)
}