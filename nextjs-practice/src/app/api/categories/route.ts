import { cookies } from "next/headers";


export async function GET() {
    const token = (await cookies()).get("token")?.value;

    // get the token from cookie, and then validate it.

    // if token is valid, then proceed further.

    console.log("token in categories route", token);

    if(!token){
        return new Response("Unauthorized", {status:401})
    }

    return Response.json({message:"Access granted to view categories", token})
}