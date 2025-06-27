const users = [{name:"John Doe", email:"johndoe@gmail.com", firstName:"John", lastName:"Doe", age:26}, {name:"Jack Leach", email:"jackleach@gmail.com", firstName:"Jack", lastName:"Leach", age:30}]

export async function GET(){
    return Response.json(users);
}