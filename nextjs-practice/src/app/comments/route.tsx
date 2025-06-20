import { comments } from "./data";
import type {NextRequest} from "next/server";

// GET method without query parameter

// export async function GET(){
//     return Response.json(comments);
// }

// GET method with query parameter

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;

    const query = searchParams.get("query");

    // console.log("query", query);

    const filteredComments = query ? comments.filter((comment)=> comment.text.toLowerCase().includes(query.toLowerCase())) : comments;

    return Response.json(filteredComments);
}

export async function POST(request:Request){
    const comment = await request.json();
    const newComment = {
        id:comments.length + 1,
        text:comment.text
    }

    comments.push(newComment);

    return new Response(JSON.stringify(newComment), {
        headers:{"Content-Type":"application/json"},
        status:201
    })
}