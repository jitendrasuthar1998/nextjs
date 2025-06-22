import type {NextRequest} from "next/server";
import {headers} from "next/headers";

// reading authorization header value from request

// if authorization header has a valid token, that time user can access resources.

export async function GET(request:NextRequest) {
    // const requestHeaders = new Headers(request.headers);
    // console.log("requestHeaders", requestHeaders.get("accept"));

    // const headersList = await headers();
    // console.log("headersList", headersList);
    
    return new Response("<h1>Reached profile path opened in chrome</h1>", {
        headers:{
            "Content-Type":"text/html"
        }
    });
}

