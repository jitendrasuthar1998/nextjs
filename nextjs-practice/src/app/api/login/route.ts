import type { NextRequest } from "next/server";
import {cookies} from "next/headers";

export async function POST(request: NextRequest) {
    const {username, password} = await request.json();

    if(username === "admin" && password === "123456"){
        (await cookies()).set("token", "server-token-123", {
            httpOnly:true,
            path:"/",
            maxAge:60 * 60 * 24 * 7
        })

        return Response.json({message:"Logged in"})
    }
    return new Response("Invalid credentials", {status:401})
}