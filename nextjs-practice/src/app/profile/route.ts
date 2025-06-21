import type {NextRequest} from "next/server";

// reading authorization header value from request

// if authorization header has a valid token, that time user can access resources.

export async function GET(request:NextRequest) {
    const requestHeaders = new Headers(request.headers);
    console.log("requestHeaders", requestHeaders.get("accept"));
    return new Response("Reached profile path");
}