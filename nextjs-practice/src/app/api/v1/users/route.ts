import {redirect} from "next/navigation"

const users = [{name:"John Doe", email:"johndoe@gmail.com"}, {name:"Jack Leach", email:"jackleach@gmail.com"}]

export async function GET(){
    return redirect("/api/v2/users");
    // return Response.json(users);
}